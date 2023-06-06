import { AVRILE_SERIF } from "@/pages/_app";
import round from '../../public/images/icons/round.svg'
import Button from "../ui/Button";

export default function Formula(){
    return (
        <section className="_section">
            <div className="_wrapper mt-20 md:mt-40 _text-14-20">

                <div>
                    <h3 className={`${AVRILE_SERIF} _h`}>
                        На самом деле есть простая<br/>
                        <span className="text-_purple"> Формула Красивого Голоса</span>
                    </h3>
                    <p className="mt-10 md:mt-14 sm:text-center">Только это не «дыхание в живот».<br/> И не «купол во рту».</p>
                    <p className="mt-3 md:mt-8 sm:text-center">Ее не узнаешь и за 10 лет изучения теории музыки.<br/> Не поймешь через медитации и шаманские практики.<br/> Не выяснишь при хаотичном просмотре Ютюб уроков.</p>
                    <p className="pl-4 md:pl-0 font-bold mt-7 md:text-center _text-bold-14-24">
                        <img src={round.src} alt="точка" className="inline pr-1"/>
                        Но этой универсальной формулой (осознанно или нет) пользуются почти
                        <img src={round.src} alt="точка" className="pl-1 hidden md:inline "/>
                    </p>
                    <p className="pl-4 md:pl-0 font-bold md:text-center _text-bold-14-24">ВСЕ популярные исполнители, которых вы слышите на радио, ТВ и в соцсетях. </p>
                    <p className="mt-3 md:mt-5 md:text-center">Которые просто <b>не смогли бы пробиться</b>, если бы их голос не трогал людей до глубины души!</p>
                    <p className="text-center mt-7 md:mt-12">Ладно, чего тянуть…</p>
                </div>
                {/* ДОДЕЛАТЬ ПОИНТЫ */}
                <div className="mt-6 md:mt-14">
                    <p className="_text-bold-14-24 text-_purple text-center">Формула красивого голоса - это:</p>
                    <div className="flex justify-center mt-10 sm:mt-12 md:mt-14 lg:mt-16 maxw:mt-18">
                        <div className="w-1/2">
                            <div className="relative w-full pb-[100%] rounded-full border border-_pink ">

                                <div className="rounded-full w-full h-full p-2 absolute">
                                    <div className="rounded-full w-full h-full bg-[url('/images/alchemy.png')] bg-cover bg-center bg-no-repeat">
                                        {/* эти блоки для бэкграунда alchemy.png */}
                                    </div>
                                </div>

                                <div className="_point right-[calc(50%-10px)] -top-[12px] sm:right-[calc(50%-15px)] sm:-top-[15px] md:right-[calc(50%-20px)] md:-top-[20px] lg:right-[calc(50%-22px)] lg:-top-[22px] maxw:right-[calc(50%-27px)] maxw:-top-[27px]">
                                    <div className="relative ">
                                        1
                                        <div className="absolute z-0 text-_black -top-5 -left-5 sm:-top-7 sm:-left-7 md:-top-9 md:-left-9 lg:-top-11 lg:-left-11 maxw:-top-13 max:-left-13">Опора</div>
                                    </div>
                                </div>
                                
                                <div className="_point right-[0px] xs:right-[5px] sm:right-[12px] md:right-[14px] lg:right-[16px] maxw:right-[18px] top-[calc(25%-10px)] sm:top-[calc(25%-15px)] md:top-[calc(25%-20px)] lg:top-[calc(25%-22px)] maxw:top-[calc(25%-27px)]">
                                    <div className="relative ">
                                        2
                                        <div className="absolute z-0 text-_black top-0 left-4 sm:left-6 md:left-8 lg:left-10">Интонация</div>
                                    </div>
                                </div>

                                <div className="_point right-[10px] top-[calc(75%-10px)]">
                                    <div className="relative ">
                                        3
                                        <div className="absolute z-0 text-_black top-0 left-4">Артикуляция</div>
                                    </div>
                                </div>

                                <div className="_point  right-[calc(50%-10px)] -bottom-[12px] sm:right-[calc(50%-15px)] sm:-bottom-[15px] md:right-[calc(50%-20px)] md:-bottom-[20px] lg:right-[calc(50%-22px)] lg:-bottom-[22px] maxw:right-[calc(50%-27px)] maxw:-bottom-[27px]">
                                    <div className="relative ">
                                        4
                                        <div className="absolute z-0 text-_black -bottom-5 -left-5 sm:-bottom-7 sm:-left-7 md:-bottom-9 md:-left-9 lg:-bottom-11 lg:-left-11 maxw:-bottom-13 max:-left-13">Тембр</div>
                                    </div>
                                </div>

                                <div className="_point left-[10px] top-[calc(75%-10px)]">
                                    <div className="relative ">
                                        5
                                        <div className="absolute z-0 text-_black top-0 right-4">Резонаторы</div>
                                    </div>
                                </div>

                                <div className="_point left-[10px] top-[calc(25%-10px)]">
                                    <div className="relative text-left">
                                        6
                                        <div className="absolute z-0 text-_black top-0 right-4 w-21">Вокальные приемы</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <Button className="mt-20 md:mt-30 lg:mt-40 md:mx-auto">Прокачать голос по формуле</Button>
                </div>

            </div>
        </section>
    )
}