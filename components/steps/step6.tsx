import Image from "next/image"
import { useState } from "react"

export default function Step6(){
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return(
        <div className="relative flex flex-col border border-_pink rounded py-3 px-4 w-full">
            <div className="absolute w-full flex justify-center -top-3 md:-top-[14px] lg:-top-4 -mx-3">
                <span className="_point-step">6</span>
            </div>
            <div className="flex justify-between font-bold cursor-pointer" onClick={()=>setIsOpen(!isOpen)}>
                <div className="flex flex-col justify-center">
                    <p className="block">Зарабатывай на выступлениях</p>
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-_pink text-[20px] md:text-[24px]">{isOpen ? '-' : '+'}</p>
                </div>
            </div>
            {isOpen &&
                <div className="bg-_mainbg mt-8 p-4 rounded-xl space-y-3">
                    <p>Если вы хотите не только петь красиво, но сделать пение своим источником дохода, то в этом разделе <b>вы узнаете как зарабатывать на выступлениях.</b> Мы разберем 3 основных формата выступлений и контрактов для вокалистов. А вы выберите те, с которых будет комфортнее начать. </p>
                    <p><b>Еще вы узнаете как сделать демо и программу, как упаковать себя как артиста, и как договариваться с агентами и заведениями.</b></p>
                </div>
            }
        </div>
    )
}