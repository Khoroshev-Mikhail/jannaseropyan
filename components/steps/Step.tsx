import Image from "next/image"
import { useState } from "react"
// import parse from 'html-react-parser'

export default function Step( { number, preview, text} : { number: string, preview: string, text: string} ){
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return(
        <div>
            <span>{number}</span>
            <p>
                {preview}
                {/* <Image src={} /> */}
            </p>
            {isOpen &&
                <div>
                    {/* {parse(text)} */}
                </div>
            }
        </div>
    )
}