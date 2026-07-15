import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO_EMAIL = process.env.CONTACT_EMAIL || 'info@theasaphitesfoundation.org'
const FROM_EMAIL = 'noreply@theasaphitesfoundation.org'

// Simple in-memory rate limiter — max 3 submissions per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 })
    return false
  }

  if (entry.count >= 3) return true

  entry.count++
  return false
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, subject, message, type, website } = body

    // Honeypot — bots fill hidden fields, humans don't
    if (website) {
      return NextResponse.json({ success: true }) // pretend it worked
    }

    // Rate limiting by IP
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown'
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please wait a few minutes.' },
        { status: 429 }
      )
    }

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required.' },
        { status: 400 }
      )
    }

    // Email must look valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    // Message must be at least 10 characters
    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Message is too short.' },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to:   TO_EMAIL,
      replyTo: email,
      subject: `[Website] ${subject || 'New message'} — from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0F172A; padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: #D4A017; margin: 0; font-size: 18px;">
              New message from theasaphitesfoundation.org
            </h2>
          </div>

          <div style="background: #f9f9f9; padding: 24px; border: 1px solid #e5e5e5;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666; width: 120px; font-size: 14px;">Name</td>
                <td style="padding: 8px 0; color: #111; font-size: 14px; font-weight: bold;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 14px;">Email</td>
                <td style="padding: 8px 0; font-size: 14px;">
                  <a href="mailto:${email}" style="color: #D4A017;">${email}</a>
                </td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 14px;">Phone</td>
                <td style="padding: 8px 0; color: #111; font-size: 14px;">${phone}</td>
              </tr>` : ''}
              ${type ? `
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 14px;">Type</td>
                <td style="padding: 8px 0; color: #111; font-size: 14px; text-transform: capitalize;">${type}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 14px;">Subject</td>
                <td style="padding: 8px 0; color: #111; font-size: 14px;">${subject || '—'}</td>
              </tr>
            </table>

            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e5e5;">
              <p style="color: #666; font-size: 14px; margin: 0 0 8px;">Message:</p>
              <p style="color: #111; font-size: 15px; line-height: 1.6; white-space: pre-wrap; margin: 0;">${message}</p>
            </div>
          </div>

          <div style="background: #0F172A; padding: 16px 24px; border-radius: 0 0 8px 8px; text-align: center;">
            <p style="color: #ffffff60; font-size: 12px; margin: 0;">
              The Asaphites Foundation · theasaphitesfoundation.org
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, id: data?.id })

  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}