import { useState } from "react"

export default function Step1( ){
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return(
        <div className="relative flex flex-col border border-_pink rounded py-3 px-4 w-full">
            <div className="absolute w-full flex justify-center -top-3 md:-top-[14px] lg:-top-4 -mx-3">
                <span className="_point-step">1</span>
            </div>
            <div className="flex justify-between font-bold cursor-pointer" onClick={()=>setIsOpen(!isOpen)}>
                <div className="flex flex-col justify-center">
                    <p className="block">Постановка опоры и формирование звука</p>
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-_pink text-[20px] md:text-[24px]">{isOpen ? '-' : '+'}</p>
                </div>
            </div>
            {isOpen &&
                <div className="bg-_mainbg mt-8 p-4 rounded-xl space-y-3">
                    <p><b>Певческое дыхание</b> - это основа для красивого, мощного и поставленного голоса. Благодаря опоре вы снимете зажимы с горла и начнете петь свободно. </p>
                    <p><b>В результате</b> - ноты перестанут срываться, а сложные песни петь будет в разы проще. </p>
                    <p><i>А еще - с правильным дыханием вы сохраните здоровые голосовые связки на всю жизнь.</i></p>
                </div>
            }
        </div>
    )
}