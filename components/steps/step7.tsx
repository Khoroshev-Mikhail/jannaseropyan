import Image from "next/image"
import { useState } from "react"

export default function Step7(){
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return(
        <div className="relative flex flex-col border border-_pink rounded py-3 px-4 w-full">
            <div className="absolute w-full flex justify-center -top-3 -mx-3">
                <span className="_point-step">7</span>
            </div>
            <div className="flex justify-between font-bold" onClick={()=>setIsOpen(!isOpen)}>
                <p className="block">Зарабатывай на обучении вокалу</p>
                <div className="flex flex-col justify-center">
                    <p className="text-_pink text-[20px] md:text-[24px]">{isOpen ? '-' : '+'}</p>
                </div>
            </div>
            {isOpen &&
                <div className="bg-_mainbg mt-4 p-4 rounded-xl space-y-3">
                    <p>Если вы чувствуете, что у вас душа педагога и наставника (одним словом - нравится помогать другим), то этот раздел для вас. </p>
                    <p>Соединив это с музыкой, <b>вы можете научиться обучать других и зарабатывать на этом.</b> А секреты методики преподавания и техники поиска клиентов мы разберем на этом модуле.</p>
                </div>
            }
        </div>
    )
}