import Image from "next/image";
import vitalii_abdulov from '../../public/images/photo_with_stars/vitalii_abdulov.png'
import anastasiya_lisova from '../../public/images/photo_with_stars/anastasiya_lisova.png'
import ekaterina_melnik from '../../public/images/photo_with_stars/ekaterina_melnik.png'
import aliana_gobozova from '../../public/images/photo_with_stars/aliana_gobozova.png'
import tatiana_kiriluk from '../../public/images/photo_with_stars/tatiana_kiriluk.png'
import viktoria_klinkova from '../../public/images/photo_with_stars/viktoria_klinkova.png'
import { AVRILE_SERIF } from "@/pages/_app";
import Fixed from "../ui/Fixed";
import { useState } from "react";
import youtube_48x48 from '../../public/images/icons/youtube_48x48.svg'
import youtube_96x96 from '../../public/images/icons/youtube_96x96.svg'
import youtube_64x64 from '../../public/images/icons/youtube_64x64.svg'

export default function Stars(){
    const [ isOpen, setIsOpen ] = useState<boolean>(false)
    const [ activeSRC, setActiveSRC ] = useState<string>('');
    const toggle = (src: string) => {
        setIsOpen(!isOpen)
        setActiveSRC(src)
    }

    return (
        <section className="_section  bg-_mainbg mt-20 md:mt-40">
            <div className="_wrapper my-10 md:my-20">
                
                <h3 className={`${AVRILE_SERIF} _h`}>Звездные ученики нашей школы</h3>
                <div className="grid grid-cols-6 xs:gap-x-4 md:gap-x-8 gap-y-8 md:gap-y-16  mt-10 md:mt-14">
                    <div onClick={()=>toggle("https://www.youtube.com/embed/8G5RXz0rmOs")} className="block cursor-pointer col-span-6 xs:col-span-3 md:col-span-2">
                        <div className="relative">
                            <div className="absolute flex flex-col justify-center w-full h-full">
                                <Image src={youtube_64x64} alt="▶" className="block mx-auto"/>
                            </div>
                            <Image src={vitalii_abdulov} alt="Виталий Абдулов и Жанна Серопян" />
                        </div>
                        <p className="_text-bold-14-24 mt-4 md:mt-6">Виталий Абдулов</p>
                        <p className="mt-1.5 _text-14-20 text-ce xs:text-left">актер театра и кино («Молодежка», «Ранетки», «Марш Турецкого», «Кадетство», «Превосходство Борна»)</p>
                    </div>
                    <div onClick={()=>toggle("https://www.youtube.com/embed/W4oLzrePAQg")} className="block cursor-pointer col-span-6 xs:col-span-3 md:col-span-2">
                        <div className="relative">
                            <div className="absolute flex flex-col justify-center w-full h-full">
                                <Image src={youtube_64x64} alt="▶" className="block mx-auto"/>
                            </div>
                            <Image src={anastasiya_lisova} alt="Анастасия Лисова и Жанна Серопян" />
                        </div>
                        <p className="_text-bold-14-24 mt-4 md:mt-6">Анастасия Лисова</p>
                        <p className="mt-1.5 _text-14-20 text-ce xs:text-left">медийная личность, модель, Экс-участница «Дом-2»</p>
                    </div>
                    <div onClick={()=>toggle("https://www.youtube.com/embed/VLB_nomzBms")} className="block cursor-pointer col-span-6 xs:col-span-3 md:col-span-2">
                        <div className="relative">
                            <div className="absolute flex flex-col justify-center w-full h-full">
                                <Image src={youtube_64x64} alt="▶" className="block mx-auto"/>
                            </div>
                            <Image src={ekaterina_melnik} alt="Екатерина Мельник и Жанна Серопян" />
                        </div>
                        <p className="_text-bold-14-24 mt-4 md:mt-6">Екатерина Мельник</p>
                        <p className="mt-1.5 _text-14-20 text-ce xs:text-left">Актриса театра и кино («Физрук», «Интерны», «Шпион», «Воин»)</p>
                    </div>
                    <div onClick={()=>toggle("https://www.youtube.com/embed/fyrwy7UzUJE")} className="block cursor-pointer col-span-6 xs:col-span-3 md:col-span-2">
                        <div className="relative">
                            <div className="absolute flex flex-col justify-center w-full h-full">
                                <Image src={youtube_64x64} alt="▶" className="block mx-auto"/>
                            </div>
                            <Image src={aliana_gobozova} alt="Алиана Гобозова (Устиненко) и Жанна Серопян" />
                        </div>
                        <p className="_text-bold-14-24 mt-4 md:mt-6">Алиана Гобозова (Устиненко)</p>
                        <p className="mt-1.5 _text-14-20 text-ce xs:text-left">Экс-участница «Дом-2»</p>
                    </div>
                    <div className="col-span-6 xs:col-span-3 md:col-span-2">
                        <Image src={tatiana_kiriluk} alt="Татьяна Кирилюк и Жанна Серопян" />
                        <p className="_text-bold-14-24 mt-4 md:mt-6">Татьяна Кирилюк</p>
                        <p className="mt-1.5 _text-14-20 text-ce xs:text-left">журналистка, телеведущая, экс-участница «Дом-2»</p>
                    </div>
                    <div onClick={()=>toggle("https://www.youtube.com/embed/yLgR6_FyMus")}  className="block cursor-pointer col-span-6 xs:col-span-3 md:col-span-2">
                        <div className="relative">
                            <div className="absolute flex flex-col justify-center w-full h-full">
                                <Image src={youtube_64x64} alt="▶" className="block mx-auto"/>
                            </div>
                            <Image src={viktoria_klinkova} alt="Виктория Клинкова и Жанна Серопян" />
                        </div>
                        <p className="_text-bold-14-24 mt-4 md:mt-6">Виктория Клинкова</p>
                        <p className="mt-1.5 _text-14-20 text-ce xs:text-left">актриса кино (телесериал «Физрук», телеканал «Дисней»)</p>
                    </div>
                </div>

                {isOpen && <Fixed src={activeSRC} toggle={toggle}/>}

            </div>
        </section>
    )
}