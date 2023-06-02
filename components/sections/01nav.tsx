import Image from "next/image";
import logo from '../../public/images/logo.png'
import facebook from '../../public/images/icons/facebook.svg'
import telegram from '../../public/images/icons/telegram.svg'
import whatsapp from '../../public/images/icons/whatsapp.svg'
import vk from '../../public/images/icons/vk.svg'



export default function Nav(){
    return (
        <section className="">
            <div className="">
                <Image src={logo} alt="Петь легко 3.0"/>
            </div>
            <div className="">
                <p>Система постановки голоса Жанны Серопян</p>
            </div>
            <div className="">
                <p className="block">Напишите нам:</p>
                <Image src={facebook} alt="facebook" className="block"/>
                <Image src={telegram} alt="telegram" className="block"/>
                <Image src={whatsapp} alt="whatsapp" className="block"/>
                <Image src={vk} alt="vk" className="block"/>
            </div>
        </section>
    )
}