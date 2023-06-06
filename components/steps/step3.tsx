import Image from "next/image"
import { useState } from "react"

export default function Step3(){
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return(
        <div className="relative flex flex-col border border-_pink rounded py-3 px-4 w-full">
            <div className="absolute w-full flex justify-center -top-3 -mx-3">
                <span className="_point-step">3</span>
            </div>
            <div className="flex justify-between font-bold" onClick={()=>setIsOpen(!isOpen)}>
                <p className="block">Звуковедение, акценты и динамика</p>
                <div className="flex flex-col justify-center">
                    <p className="text-_pink text-[20px] md:text-[24px]">{isOpen ? '-' : '+'}</p>
                </div>
            </div>
            {isOpen &&
                <div className="bg-_mainbg mt-4 p-4 rounded-xl space-y-3">
                    <p>Именно динамика, т.е. изменение громкости звука, отвечает за создание нужной эмоции. Если петь на одной громкости, песня будет звучать нудно и однообразно, и это как раз <b>проблема многих новичков и любителей.</b></p>
                    <p>В этом модуле мы научимся добавлять динамику в пение - без потери качества звука.</p>
                </div>
            }
        </div>
    )
}