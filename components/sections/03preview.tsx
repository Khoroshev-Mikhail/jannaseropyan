import Image from "next/image";
import arrow_double from "../../public/images/icons/arrow_double.svg"
import preview from '../../public/images/video_previews/chto_takoe_pet_legko.webp'
import { useState } from "react";
import Fixed from "../ui/Fixed";


export default function Preview(){
    const [ isOpen, setIsOpen ] = useState<boolean>(false)
    const [ activeSRC, setActiveSRC ] = useState<string>('');
    const toggle = (src: string) => {
        setIsOpen(!isOpen)
        setActiveSRC(src)
    }
    return (
        <section className="_section">
            <div className="_wrapper h-full mt-20 md:flex md:justify-between">

                <div className="space-y-3 text-[20px] md:w-[45%] ">
                    <p>
                        <span className="text-_purple">На курсе вы поставите красивый и сильный голос, </span> 
                        раскроете ваш уникальный тембр.
                    </p>
                    <p>
                        <span className="text-_purple">Найдете свой стиль</span> с применением вокальных приемов.
                    </p>
                    <p>
                        <span className="text-_purple">Сможете петь любимые песни</span> как в оригинале.
                    </p>
                    <p className="font-bold mt-4 block w-3/4 md:relative">
                        Подробнее рассказываю, из чего состоит курс
                        <Image src={arrow_double} alt="arrow" className="mt-3 ml-10 rotate-90 md:rotate-0 md:absolute md:right-[-35px] md:top-0"/>
                    </p>
                </div>

                <div className="h-full md:w-[50%]">
                    {/* <iframe loading="lazy" className="w-full h-full min-h-[200px] rounded-md mt-4 sm:min-h-[300px] md:mt-0" id="janna_seropyan" src="https://www.youtube.com/embed/0k-kTeuRBv0?controls=0" title="Жанна Серопян 3.0"  /> */}
                    <Image src={preview} alt="Видео: что такое - 'Петь Легко 3.0" onClick={()=>toggle("https://www.youtube.com/embed/0k-kTeuRBv0?controls=0")}  className="w-full h-full min-h-[200px] rounded-md mt-4 cursor-pointer sm:min-h-[300px] md:mt-0"/>
                </div>

                {isOpen && <Fixed src={activeSRC} toggle={toggle}/>}

            </div>
        </section>
    )
}