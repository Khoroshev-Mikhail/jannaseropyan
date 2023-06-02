import Image from "next/image"
import { useState } from "react"

export default function Step7(){
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return(
        <div>
            <span>7</span>
            <p>
                Зарабатывай на обучении вокалу
                {/* <Image src={} /> */}
            </p>
            {isOpen &&
                <div>
                    <p>Если вы чувствуете, что у вас душа педагога и наставника (одним словом - нравится помогать другим), то этот раздел для вас. </p>
                    <p>Соединив это с музыкой, <b>вы можете научиться обучать других и зарабатывать на этом.</b> А секреты методики преподавания и техники поиска клиентов мы разберем на этом модуле.</p>
                </div>
            }
        </div>
    )
}