import Modal from "@/app/components/Modal";

import ProductFrame from "@/app/components/ProductFrame"
import axios from "axios"

async function getProdutoById(produtoId: any){
    const res= await axios.get(`https://jsonplaceholder.typicode.com/photos/${produtoId}`)
    const data= await res.data
    return data

}

export default async function ModalProducts({params}:any){
    const produto = await getProdutoById(params.id)
    console.log(produto)
    return(
        <>
         <Modal>
         <ProductFrame {...produto}/>
         </Modal>
            
        </>
    )
}