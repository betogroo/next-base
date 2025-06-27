import './globals.css'
import {NavBar, type Page} from '@/components/NavBar'


export const metadata = {
  title: 'Meu App',
  description: 'Aprendendo Next.js com React',
}

const pages: Page[] = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'About',
    href: '/about'
  }
]



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
       <NavBar pages={pages} title='MEU APP'/>
        <main className="flex-1 py-6"><div className="container mx-auto px-4" >{children}</div></main>
      </body>
    </html>
  )
}
