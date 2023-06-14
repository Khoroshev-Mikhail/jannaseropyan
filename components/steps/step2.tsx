import { useState } from "react"

export default function Step2(){
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return(
        <div className="relative flex flex-col border border-_pink rounded py-3 px-4 w-full">
            <div className="absolute w-full flex justify-center -top-3 md:-top-[14px] lg:-top-4 -mx-3">
                <span className="_point-step">2</span>
            </div>
            <div className="flex justify-between font-bold cursor-pointer" onClick={()=>setIsOpen(!isOpen)}>
                <div className="flex flex-col justify-center">
                    <p className="block">Четкость произношения (артикуляция)</p>
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-_pink text-[20px] md:text-[24px]">{isOpen ? '-' : '+'}</p>
                </div>
            </div>
            {isOpen &&
                <div className="bg-_mainbg mt-4 p-4 rounded-xl space-y-3">
                    <p><b>Хорошая работа артикуляционного аппарата помогает петь и говорить четко, ярко, экспрессивно и артистично.</b> На этом модуле мы освободим твою челюсть и активируем большие и малые мышцы лица. </p>
                    <p><b>В голосе появится четкость и драйв,</b> а при разговоре тебя перестанут переспрашивать.</p>
                    <p><i>Побочный эффект! - подтяжка овала лица.</i></p>
                </div>
            }
        </div>

    )
}