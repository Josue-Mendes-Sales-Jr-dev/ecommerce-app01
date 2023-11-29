import Image from "next/image"
import Link from "next/link"

export default async function List({id,url,title}:{id:number, url:string, title:string}){
  return(
        <>
            <Link href={`/products/${id}`}>
              <Image
              src={url}
              alt={title}
              height={400}
              width={400}
              />
              <h1 className="bg-white h-[3.5rem] mx-auto p-2">
                {title}
              </h1>
            </Link>
        </>
    )
}