import { AVRILE_SERIF } from "@/pages/_app";
import round from '../../public/images/icons/round.svg'
import Button from "../ui/Button";

export default function Formula(){
    return (
        <section className="_section">
            <div className="_wrapper mt-20 _text-14-20 md:mt-40">

                <div data-aos="fade-right" data-aos-duration="2000">
                    <h3 className={`${AVRILE_SERIF} _h`}>
                        На самом деле есть простая<br/>
                        <span className="text-_purple"> Формула Красивого Голоса</span>
                    </h3>
                    <p className="mt-10 sm:text-center md:mt-14">Только это не «дыхание в живот».<br/> И не «купол во рту».</p>
                    <p className="mt-3 sm:text-center md:mt-8">Ее не узнаешь и за 10 лет изучения теории музыки.<br/> Не поймешь через медитации и шаманские практики.<br/> Не выяснишь при хаотичном просмотре Ютюб уроков.</p>
                    <p className="pl-4 _text-bold-14-24 mt-9 md:mt-12 md:pl-0 md:text-center">
                        <img src={round.src} alt="точка" className="inline pr-1"/>
                        Но этой универсальной формулой (осознанно или нет) пользуются почти
                        <img src={round.src} alt="точка" className="pl-1 hidden md:inline "/>
                    </p>
                    <p className="pl-4 font-bold _text-bold-14-24 md:text-center md:pl-0">ВСЕ популярные исполнители, которых вы слышите на радио, ТВ и в соцсетях. </p>
                    <p className="mt-3 md:mt-5 md:text-center">Которые просто <b>не смогли бы пробиться</b>, если бы их голос не трогал людей до глубины души!</p>
                    <p className="text-center mt-7 md:mt-12">Ладно, чего тянуть…</p>
                </div>
                {/* ДОДЕЛАТЬ ПОИНТЫ */}

                <div data-aos="fade-right" data-aos-duration="2000" className="mt-6 md:mt-14">

                    <p className="_text-bold-14-24 text-_purple text-center">Формула красивого голоса - это:</p>

                    <div className="flex justify-center mt-10 sm:mt-14 md:mt-16 lg:mt-20 maxw:mt-24 ">
                        <div className="w-1/2">
                            <div className="relative w-full pb-[100%] rounded-full border border-_pink ">

                                <div className="absolute rounded-full w-full h-full overflow-hidden flex flex-col justify-center">
                                    <div className="mx-auto w-[80%] h-[80%] bg-[url('/images/alchemy.webp')] bg-cover bg-center bg-no-repeat">
                                        {/* эти блоки для бэкграунда alchemy.png */}
                                    </div>
                                </div>

                                <div className="_point right-[calc(50%-10px)] -top-[12px] sm:right-[calc(50%-15px)] sm:-top-[15px] md:right-[calc(50%-20px)] md:-top-[20px] lg:right-[calc(50%-22px)] lg:-top-[22px] maxw:right-[calc(50%-27px)] maxw:-top-[27px]">
                                    <div className="relative ">
                                        1
                                        <div className="_text-14-20 font-normal xs:font-bold absolute z-0 text-_black -top-5 -left-5 sm:-top-7 sm:-left-6 md:-top-9 md:-left-6 lg:-top-11 lg:-left-6 maxw:-top-13 max:-left-13">
                                            Опора
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="_point right-[0px] xs:right-[5px] sm:right-[12px] md:right-[14px] lg:right-[16px] maxw:right-[18px] top-[calc(25%-10px)] sm:top-[calc(25%-15px)] md:top-[calc(25%-20px)] lg:top-[calc(25%-22px)] maxw:top-[calc(25%-27px)]">
                                    <div className="relative ">
                                        2
                                        <div className="_text-14-20_formula font-normal xs:font-bold absolute z-0 text-_black top-0 left-4 xs:left-5 sm:left-7 md:top-1 md:left-9 lg:top-2.5 lg:left-14">
                                            Интонация
                                        </div>
                                    </div>
                                </div>

                                <div className="_point right-[0px] xs:right-[5px] sm:right-[12px] md:right-[14px] lg:right-[16px] maxw:right-[18px]  top-[calc(75%-10px)] sm:top-[calc(75%-15px)] md:top-[calc(75%-20px)] lg:top-[calc(75%-22px)] maxw:top-[calc(75%-27px)]">
                                    <div className="relative ">
                                        3
                                        <div className="_text-14-20_formula font-normal xs:font-bold absolute z-0 text-_black top-0 left-3 xs:left-5 sm:left-7 md:top-1 md:left-9 lg:top-2.5 lg:left-14">
                                            Артикуляция
                                        </div>
                                    </div>
                                </div>

                                <div className="_point  right-[calc(50%-10px)] -bottom-[12px] sm:right-[calc(50%-15px)] sm:-bottom-[15px] md:right-[calc(50%-20px)] md:-bottom-[20px] lg:right-[calc(50%-22px)] lg:-bottom-[22px] maxw:right-[calc(50%-27px)] maxw:-bottom-[27px]">
                                    <div className="relative ">
                                        4
                                        <div className="_text-14-20 font-normal xs:font-bold absolute z-0 text-_black -bottom-5 -left-4 sm:-bottom-7 sm:-left-4 md:-bottom-9 md:-left-6 lg:-bottom-11 lg:-left-6 maxw:-bottom-13 max:-left-13">
                                            Тембр
                                        </div>
                                    </div>
                                </div>

                                <div className="_point left-[0px] xs:left-[5px] sm:left-[12px] md:left-[14px] lg:left-[16px] maxw:left-[18px]  top-[calc(75%-10px)] sm:top-[calc(75%-15px)] md:top-[calc(75%-20px)] lg:top-[calc(75%-22px)] maxw:top-[calc(75%-27px)]">
                                    <div className="relative ">
                                        5
                                        <div className="_text-14-20 font-normal xs:font-bold absolute z-0 text-_black top-0 right-4 xs:right-5 sm:right-7 md:top-1 md:right-9 lg:top-2.5 lg:right-14">
                                            Резонаторы
                                        </div>
                                    </div>
                                </div>

                                <div className="_point left-[0px] xs:left-[5px] sm:left-[12px] md:left-[14px] lg:left-[16px] maxw:left-[18px] top-[calc(25%-10px)] sm:top-[calc(25%-15px)] md:top-[calc(25%-20px)] lg:top-[calc(25%-22px)] maxw:top-[calc(25%-27px)]">
                                    <div className="relative text-left">
                                        6
                                        <div className="_text-14-20 font-normal xs:font-bold absolute z-0 text-_black top-0 right-4 xs:right-5 sm:right-7 md:top-1 md:right-9 lg:top-2.5 lg:right-14 w-21">
                                            Вокальные приемы
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <a href="#payment">
                        <Button className="mt-20 md:mt-30 lg:mt-40 md:mx-auto">
                            Прокачать голос по формуле
                        </Button>
                    </a>
                </div>

            </div>
        </section>
    )
}