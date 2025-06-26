import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Meu App',
  description: 'Aprendendo Next.js com React',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header className='p-4 bg-blue-600 text-white'>
          <nav className='flex  gap-2'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>
        <main className="flex items-center text-white p-4">{children}</main>
      </body>
    </html>
  )
}
