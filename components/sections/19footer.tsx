import Image from "next/image";
import whatsapp from '../../public/images/icons/whatsapp.svg'
import vk from '../../public/images/icons/vk.svg'
import viber from '../../public/images/icons/viber.svg'
import messenger from '../../public/images/icons/messenger.svg'

export default function Footer(){
    return (
        <section>
            <div>
                <p>Остались вопросы?</p>
                <p>Позвоните нам или напишите в мессенджер, мы свяжемся с вами в ближайшее время</p>
                <p>8 800 200 24 04</p>
                <p>(Звонок бесплатный со всех телефонов рф)</p>
                <div>
                    <Image src={whatsapp} alt="whatsapp"/>
                    <Image src={vk} alt="vk"/>
                    <Image src={viber} alt="viber"/>
                    <Image src={messenger} alt="messenger" />
                </div>
            </div>
        </section>
    )
}