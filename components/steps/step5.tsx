import Image from "next/image"
import { useState } from "react"

export default function Step5(){
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return(
        <div>
            <span>5</span>
            <p>
                Вокальные приемы и украшения
                {/* <Image src={} /> */}
            </p>
            {isOpen &&
                <div>
                    <p>Ни один артист не обходится без специальных украшений, которые называются <b>«Вокальными приемами».</b> Именно они создают харизму, сексапильность голоса и придают ВАУ эффект исполнению. </p>
                    <p>Это - Хрип, Сип, Рык, Субтон, Заглубление, Мелизмы, Подъезды, Йодль. <b>Научитесь использовать хотя бы 3 приема - и зазвучите, как звезда!</b></p>
                </div>
            }
        </div>
    )
}