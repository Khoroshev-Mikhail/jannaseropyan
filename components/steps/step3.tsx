import Image from "next/image"
import { useState } from "react"

export default function Step3(){
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return(
        <div>
            <span>3</span>
            <p>
                Звуковедение, акценты и динамика
                {/* <Image src={} /> */}
            </p>
            {isOpen &&
                <div>
                    <p>Именно динамика, т.е. изменение громкости звука, отвечает за создание нужной эмоции. Если петь на одной громкости, песня будет звучать нудно и однообразно, и это как раз <b>проблема многих новичков и любителей.</b></p>
                    <p>В этом модуле мы научимся добавлять динамику в пение - без потери качества звука.</p>
                </div>
            }
        </div>
    )
}