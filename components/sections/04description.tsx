import Image from "next/image";
import boy_with_microphone from '../../public/images/boy_with_microphone.png'
import { AVRILE_SERIF } from "@/pages/_app";
import quotes_start from '../../public/images/icons/quotes_start.png'
import quotes_end from '../../public/images/icons/quotes_end.png'

export default function Description(){
    return (
        <section className="_section">
            <div className="_wrapper mt-20">
                <div>
                    <h3 className={`${AVRILE_SERIF} _h`}>Как новичку поставить красивый голос, не тратя годы на обучение?</h3>
                </div>

                <div className=" mt-9 flex justify-center">
                    <div>
                        <div className="flex justify-around w-auto">
                            <Image src={quotes_start} alt="'" className="block w-[12px] md:w-[36px]"/>
                            <div className="w-11/12 ml-2 md:ml-4">
                                <div className="h-full w-11/12 border-b border-_pink"> </div>
                            </div>
                        </div>
                        <div className="w-auto px-3 py-1 sm:py-2 md:py-3 lg:py-5 maxw:py-6">
                            <p className="text-center _text-14-20">Какая разница где учиться петь?<br/>- думает новичок</p>
                        </div>
                        <div className="flex justify-around w-auto">
                            <div className="h-2 w-11/12 border-t border-_pink mr-2 md:mr-4"></div>
                            <Image src={quotes_end} alt="'" className="w-[12px] mr-6 md:w-[36px]"/>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between">
                    <div className="hidden sm:w-1/3 sm:flex sm:flex-col sm:justify-center">
                        <Image src={boy_with_microphone} alt="Парень с микрофоном" className="block"/>
                    </div>
                    <div className="mt-2.5 _text-14-20 sm:w-2/3 ">
                        <p>И, до того как прийти к нам, проходит стандартный путь - уроки на Ютюбе, случайные репетиторы, тетушки из ДК, дорогие абонементы в частных школах, караоке...</p>

                        <p className="mt-[30px]"><b>И сотни раз слышит одно и тоже:</b></p>
                        <ul className="mx-auto pl-4 mt-5 [&>li]:list-disc xs:block xs:columns-2">
                            <li>Сделай купол во рту</li>
                            <li>Надо дышать животом</li>
                            <li>Просто повтори за мной (а как, блин?)</li>
                            <li>Подай звук вперед!</li>
                            <li>Начнем с распевки!</li>
                            <li>Какой-то ты непонятливый...</li>
                        </ul>
                        
                        <p className="mt-9">В обучении вокалу до сих пор происходит какая-то дичь: непонятные сравнения, бесцельные распевки, отсутствие внятной методики с четкими ориентирами.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}