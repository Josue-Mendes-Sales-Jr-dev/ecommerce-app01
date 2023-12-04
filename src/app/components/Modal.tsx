"use client"

import { useCallback, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

export default function Modal({children}:{children:React.ReactNode}){
     const box1=useRef<HTMLInputElement | null>(null)
     const box2=useRef<HTMLInputElement | null>(null)  
     const Router=useRouter()

     const OnDimiss=useCallback(()=>{
        Router.back()
     },[Router])
     const OnClick=useCallback(
        (e:any)=>{
            if(e.target === box1.current || e.target === box2.current){
               if(OnDimiss) OnDimiss()
            }
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[OnDimiss,box1,box2])

     const OnKeyDown=useCallback(
        (e:any)=>{
     if(e.key==="Escape") OnDimiss()
     },[OnDimiss])

     useEffect(()=>{
        document.addEventListener("keydown",OnKeyDown)
       return ()=> document.removeEventListener("keydown",OnKeyDown)
     },[OnKeyDown])
    
     return(
        <div 
         ref={box1}
         onClick={OnClick}
         className="fixed w-screen h-screen top-0 right-0 bg-black/40">
            <div 
            ref={box2} 
            className="flex items-center justify-center pt-5">
                {children}
            </div>
        </div>
    )
}