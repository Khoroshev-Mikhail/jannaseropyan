import Image from "next/image";
import logo from '../../public/images/logo.png'
import facebook from '../../public/images/icons/facebook.svg'
import telegram from '../../public/images/icons/telegram.svg'
import whatsapp from '../../public/images/icons/whatsapp.svg'
import vk from '../../public/images/icons/vk.svg'
import menu_burger from '../../public/images/icons/menu_burger.svg'
import { useState } from "react";
import Link from "next/link";
import { TG_LINK, VK_LINK, WHATSAPP_LINK } from "@/lib/consts";



export default function Nav(){
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <section className="_section bg-_mainbg md:bg-_white">
            <div className="_wrapper relative flex flex-col md:flex-row justify-between md:py-1 lg:py-4">
                <div className="mt-4 mx-auto md:mx-0 md:mt-0 md:flex md:flex-col md:justify-center">
                    <Image src={logo} alt="Петь легко 3.0" className="w-[81px]"/>
                </div>
                <div className="md:flex md:flex-col md:justify-center">
                    <p className="text-center text-[12px] sm:text-[14px] md:text-[14px] lg:text-[18px]">
                        Система постановки голоса Жанны Серопян
                    </p>
                </div>
                <div className="hidden md:flex justify-between md:gap-x-3 lg:gap-x-6 maxw:gap-x-7">
                    <div className="flex flex-col justify-center">
                        <p className="block text-[12px] sm:text-[14px] md:text-[14px] lg:text-[18px]">Напишите нам:</p>
                    </div>
                    {/* <div className="flex flex-col justify-center">
                        <Link href={FACEBOOK_LINK}>
                            <Image src={facebook} alt="facebook" className="block"/>
                        </Link>
                    </div> */}
                    <div className="flex flex-col justify-center">
                        <Link href={TG_LINK}>
                            <Image src={telegram} alt="telegram" className="block"/>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center">
                        <Link href={WHATSAPP_LINK}>
                            <Image src={whatsapp} alt="whatsapp" className="block"/>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center">
                        <Link href={VK_LINK}>
                            <Image src={vk} alt="vk" className="block"/>
                        </Link>
                    </div>
                </div>

                <Image src={menu_burger} alt="Меню" onClick={()=>setIsOpen(true)} className="absolute top-4 right-8 md:hidden" />

                {isOpen && 
                    <div onClick={()=>setIsOpen(false)} className="absolute z-30 right-0 p-3 rounded-l flex flex-col w-1/2 h-auto bg-_white">
                        <p className="block text-center">Напишите нам:</p>
                        {/* <div className="flex justify-around p-4">
                            <Image src={facebook} alt="facebook" className="block"/>
                            <Image src={telegram} alt="telegram" className="block"/>
                        </div> */}
                        <div className="flex justify-around p-4">
                            <Link href={TG_LINK}>
                                <Image src={telegram} alt="telegram" className="block"/>
                            </Link>
                            <Link href={WHATSAPP_LINK}>
                                <Image src={whatsapp} alt="whatsapp" className="block"/>
                            </Link>
                            <Link href={VK_LINK}>
                                <Image src={vk} alt="vk" className="block"/>
                            </Link>
                        </div>
                    </div>
                }
            </div>
        </section>
    )
}