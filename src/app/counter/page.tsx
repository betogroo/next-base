'use client'
import PageTitle from "@/components/PageTitle"
import {Button} from '@/components/ui/button'
import { useState } from "react"



export default function Counter() {
    const [count, setCount] = useState(0)
    const [maxValue] = useState(10)
    const increaseValue = () => setCount(count +1)
    const decreaseValue = () => setCount(count -1)
    
    return (
        <div className="container flex flex-col mx-auto items-center gap-4 py-8">
            <PageTitle title="Limitador de Acessos" />
            <div className="text-6xl font-bold text-blue-600">{count}</div>
            <div className="flex gap-2">
                <Button className="bg-red-500 " disabled={count <= 0} onClick={decreaseValue}>-</Button>
                <Button className="bg-green-700" disabled={count >= maxValue} onClick={increaseValue} >+</Button>
            </div>
        </div>

    )
}