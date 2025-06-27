
import {Button} from '@/components/ui/button'
import PageTitle from '@/components/PageTitle'
export default function Home() {
  return (
      <div>
        <PageTitle title='Home Page' />
        <div className='flex gap-4 mt-4'>
          <Button variant="default">Clique aqui</Button>
          <Button variant="destructive">Deletar</Button>
        </div>
      </div>
  )
}
