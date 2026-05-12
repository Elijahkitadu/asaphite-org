export const metadata = { title: 'Sanity Studio — Asaphites Foundation' }

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  // No Navbar/Footer — Studio manages its own UI
  return <>{children}</>
}
