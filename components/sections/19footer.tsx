import Image from "next/image";
import whatsapp from '../../public/images/icons/whatsapp.svg'
import vk from '../../public/images/icons/vk.svg'
import telegram from '../../public/images/icons/telegram.svg'
// import viber from '../../public/images/icons/viber.svg'
// import messenger from '../../public/images/icons/messenger.svg'
import { TG_LINK, VK_LINK, WHATSAPP_LINK } from "@/lib/consts";
import Link from "next/link";

export default function Footer(){
    return (
        <section className="_section bg-_mainbg py-10 md:py-14 mt-20 md:mt-40 ">
            <div className="_wrapper flex justify-center">
                <div className="flex flex-col text-center">
                    <p className="_text-bold-14-24">Остались вопросы?</p>
                    <p className="mt-2.5 md:mt-7 md:w-2/3 mx-auto">Позвоните нам или напишите в мессенджер, мы свяжемся с вами в ближайшее время</p>
                    <p className="mt-5 md:mt-12 _h-text">8 800 200 24 04</p>
                    <p>(Звонок бесплатный со всех телефонов рф)</p>

                    <div className="mt-5 md:mt-10 flex justify-center gap-x-1 md:gap-x-3 lg:gap-x-6 maxw:gap-x-7">
                        <div className="flex flex-col justify-center">
                            <Link href={WHATSAPP_LINK}>
                                <Image src={whatsapp} alt="whatsapp"/>
                            </Link>
                        </div>
                        <div className="flex flex-col justify-center">
                            <Link href={VK_LINK}>
                                <Image src={vk} alt="vk"/>
                            </Link>
                        </div>
                        <div className="flex flex-col justify-center">
                            <Link href={TG_LINK}>
                                <Image src={telegram} alt="telegram" className="block"/>
                            </Link>
                        </div>
                        {/* <div className="flex flex-col justify-center">
                            <Link href={}>
                                <Image src={viber} alt="viber"/>
                            </Link>
                        </div>
                        <div className="flex flex-col justify-center">
                            <Link href={}>
                                <Image src={messenger} alt="messenger" />
                            </Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}