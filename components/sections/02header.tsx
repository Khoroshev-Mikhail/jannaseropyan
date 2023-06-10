import { AVRILE_SERIF } from "@/pages/_app";
import janna_seropyan_desktop from '../../public/images/janna_seropyan_desktop.png'
import janna_seropyan_mobile from '../../public/images/janna_seropyan_mobile.png'
import Button from "../ui/Button";

export default function Header(){
    return (
        <section className="_section bg-_mainbg overflow-hidden">
            <div className="_wrapper relative h-full">
                <div className="relative z-10 md:w-[63%] sm:pb-2 md:pb-[76px]">
                    <div className={`${AVRILE_SERIF}`}>
                        <h1 className="text-center md:text-left uppercase text-_purple text-[20px] sm:text-[26px] md:text-[34px] lg:text-[40px] maxw:text-[47px] mt-2 sm:mt-6 md:mt-10 lg:mt-14 maxw:mt-18">
                            НАУЧИТЕСЬ ПЕТЬ КРАСИВО
                        </h1>
                        <h2 className="text-center md:text-left uppercase text-[15px] md:text-[22px] lg:text-[28px] maxw:text-[36px]">
                            С ВОКАЛЬНЫМИ ПРИЕМАМИ ЗВЕЗД ПО ПОДРОБНОЙ ПОШАГОВОЙ ПРОГРАММЕ
                        </h2>
                    </div>
                    <div className="flex justify-center md:justify-start pl-4">
                        <ul className="block mt-10 md:mt-10 text-sm [&>li]:list-disc">
                            <li>Онлайн - из любой точки мира</li>
                            <li>С личным преподавателем</li>
                            <li>Первый месяц - бесплатно</li>
                        </ul>
                    </div>
                    <div>
                        <a href="#payment">
                            <Button className="mt-8 md:mt-16">
                                Выбрать свой курс
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="md:absolute md:right-[-110px] maxw:right-[-140px] md:top-0 h-full w-full flex justify-end mt-6 md:mt-0">
                    <picture className="h-full object-cover">
                        <source srcSet={janna_seropyan_desktop.src} media="(min-width: 768px)" />
                        <img src={janna_seropyan_mobile.src} alt="Жанна Серопян" className="object-cover h-full"/>
                    </picture>
                    {/* <Image src={janna_seropyan} alt="Жанна Серопян" /> */}
                </div>
            </div>
        </section>
    )
}