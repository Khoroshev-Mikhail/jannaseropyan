import Image from "next/image"
import { useState } from "react"

export default function Step4(){
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return(
        <div className="relative flex flex-col border border-_pink rounded py-3 px-4 w-full">
            <div className="absolute w-full flex justify-center -top-3 md:-top-[14px] lg:-top-4 -mx-3">
                <span className="_point-step">4</span>
            </div>
            <div className="flex justify-between font-bold cursor-pointer" onClick={()=>setIsOpen(!isOpen)}>
                <div className="flex flex-col justify-center">
                    <p className="block">Резонаторы и тембр. Микс. Бэлтинг. Твэнг</p>
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-_pink text-[20px] md:text-[24px]">{isOpen ? '-' : '+'}</p>
                </div>
            </div>
            {isOpen &&
                <div className="bg-_mainbg mt-4 p-4 rounded-xl space-y-3">
                    <p><b>Один из самых важных этапов - раскрытие и сбалансированное использование всех голосовых резонаторов.</b> Именно они создают «бархат», обаяние и уникальность голоса.</p>
                    <p>В этом модуле мы научимся пользоваться всеми резонаторами - в результате твой тембр станет ярким, полетным, с идеальным балансом Верха, Низа и Объема.</p>
                </div>
            }
        </div>
    )
}