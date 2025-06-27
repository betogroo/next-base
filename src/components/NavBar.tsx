import Link from 'next/link'

interface Page {
  name: string
  href: string
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

export function NavBar () {
    return (
        <header className="sticky top-0 z-50 border-b bg-white">
        <div className='container mx-auto flex h-16 items-center justify-between px-4'>
          <Link href="/" className='text-xl font-bold text-blue-600'>Meu App</Link>
        <div className='flex items-center gap-4'>

          {
            pages.map((page => (
              <Link
              key={page.href} 
              href={page.href} 
              className='text-sm text-gray-700 hover:text-blue-600'>{page.name}</Link>
            )))
          }
        </div>
        </div>
       </header>
    )
}