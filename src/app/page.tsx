import axios from "axios"
import { Suspense } from "react"
import List from "../components/list"

export async function getData(){
  const res= await axios.get("https://jsonplaceholder.typicode.com/photos?_limit=20")
  const data= await res.data
  return data
}
export default async function Home() {
  const data= await getData()

  return (
    <main className="container flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {
          data?.map((items:any)=>(
              <List key={items.id} url={items.url} id={items.id} title={items.title}/>
              
            ))
            }
      </div>
    </main>
  )
}
