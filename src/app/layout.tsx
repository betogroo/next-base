import './globals.css'
import {NavBar} from '@/components/NavBar'


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
       <NavBar />
        <main className="flex-1 py-6"><div className="container mx-auto px-4" >{children}</div></main>
      </body>
    </html>
  )
}
