import ProductFrame from "@/app/components/productFrame"
import axios from "axios"

async function getProdutoById(produtoId: any){
    const res= await axios.get(`https://jsonplaceholder.typicode.com/photos/${produtoId}`)
    const data= await res.data
    return data

}

export default async function Products({params}:any){
    const produto = await getProdutoById(params.id)
    console.log(produto)
    return(
        <>
         <div className="w-screen h-screen flex justify-center items-center">
             <ProductFrame {...produto}/>
         </div>

        </>
    )
}