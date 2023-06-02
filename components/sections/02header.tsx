import { AVRILE_SERIF } from "@/pages/_app";
import Image from "next/image";
import janna_seropyan from '../../public/images/janna_seropyan.png'

export default function Header(){
    return (
        <section>
            <div>
                <Image src={janna_seropyan} alt="Жанна Серопян" />
            </div>
            <div className={`${AVRILE_SERIF}`}>
                <h1 className="">НАУЧИТЕСЬ ПЕТЬ КРАСИВО</h1>
                <h2 className="">С ВОКАЛЬНЫМИ ПРИЕМАМИ ЗВЕЗД ПО ПОДРОБНОЙ ПОШАГОВОЙ ПРОГРАММЕ </h2>
            </div>
            <div>
                <ul>
                    <li>Онлайн - из любой точки мира</li>
                    <li>С личным преподавателем</li>
                    <li>Первый месяц - бесплатно</li>
                </ul>
            </div>
            <div>
                <button>Выбрать свой курс</button>
            </div>
        </section>
    )
}