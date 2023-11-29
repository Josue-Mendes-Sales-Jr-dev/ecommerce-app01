import Image from "next/image"
import Link from "next/link"

export default function ProductFrame({title, url}:any){
    return(
        <>
        <div className="flex flex-col items-center justify-center w-[600px]">
                 <Image
                  src={url}
                  alt={title}
                  height={400}
                  width={400}
                  className="w-[80%]"
                  />
                  <h1 className="w-[80%] bg-gray-300 h-[3.5rem] mx-auto p-2">
                    {title}
                  </h1>
                 <Link className="w-[80%] pl-5 bg-slate-400" href="/">Voltar</Link>
        </div>
        </>
    )
}