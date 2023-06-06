import { AVRILE_SERIF } from "@/pages/_app";
import alchemy from '../../public/images/alchemy.png'
import round from '../../public/images/icons/round.svg'
import Image from "next/image";

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
                
                <div className="mt-6 md:mt-14">
                    <p className="_text-bold-14-24 text-_purple text-center">Формула красивого голоса - это:</p>
                    <div className="flex justify-center mt-10">
                        <Image src={alchemy} alt="Формула красивого голоса" className="w-full max-w-[853px] mx-[]"/>
                    </div>
                    <button>Прокачать голос по формуле</button>
                </div>

            </div>
        </section>
    )
}