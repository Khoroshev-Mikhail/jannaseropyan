import Image from "next/image"
import { useState } from "react"

export default function Step5(){
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return(
        <div className="relative flex flex-col border border-_pink rounded py-3 px-4 w-full">
            <div className="absolute w-full flex justify-center -top-3 -mx-3">
                <span className="_point-step">5</span>
            </div>
            <div className="flex justify-between font-bold" onClick={()=>setIsOpen(!isOpen)}>
                <p className="block">Вокальные приемы и украшения</p>
                <div className="flex flex-col justify-center">
                    <p className="text-_pink text-[20px] md:text-[24px]">{isOpen ? '-' : '+'}</p>
                </div>
            </div>
            {isOpen &&
                <div className="bg-_mainbg mt-4 p-4 rounded-xl space-y-3">
                    <p>Ни один артист не обходится без специальных украшений, которые называются <b>«Вокальными приемами».</b> Именно они создают харизму, сексапильность голоса и придают ВАУ эффект исполнению. </p>
                    <p>Это - Хрип, Сип, Рык, Субтон, Заглубление, Мелизмы, Подъезды, Йодль. <b>Научитесь использовать хотя бы 3 приема - и зазвучите, как звезда!</b></p>
                </div>
            }
        </div>
    )
}