import Image from "next/image"
import { useState } from "react"

export default function Step1( ){
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return(
        <div>
            <span>1</span>
            <p>
                Постановка опоры и формирование звука
                {/* <Image src={} /> */}
            </p>
            {isOpen &&
                <div>
                    <p><b>Певческое дыхание</b> - это основа для красивого, мощного и поставленного голоса. Благодаря опоре вы снимете зажимы с горла и начнете петь свободно. </p>
                    <p><b>В результате</b> - ноты перестанут срываться, а сложные песни петь будет в разы проще. </p>
                    <p><i>А еще - с правильным дыханием вы сохраните здоровые голосовые связки на всю жизнь.</i></p>
                </div>
            }
        </div>
    )
}