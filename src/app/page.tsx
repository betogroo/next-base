
import {Button} from '@/components/ui/button'
export default function Home() {
  return (
      <div>
        <h1 className="text-5xl font-bold text-blue-500">Home</h1>
        <div className='flex gap-4 mt-4'>
          <Button variant="default">Clique aqui</Button>
          <Button variant="destructive">Deletar</Button>
        </div>
      </div>
  )
}
