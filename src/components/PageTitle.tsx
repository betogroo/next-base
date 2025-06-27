interface PageTitle{
    title: string
}

export default function PageTitle({title}: PageTitle){
    return (
        <h1 className="text-3xl font-bold text-blue-500">{title}</h1>
    )
}