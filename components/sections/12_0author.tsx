import React from 'react';
import Image from "next/image";
import janna_seropyan_portrait from '../../public/images/janna_seropyan_portrait.png'
import { AVRILE_SERIF } from "@/pages/_app";

import moscow from '../../public/images/moscow.png'
import cosmopoliten from '../../public/images/cosmopoliten.png'
import dniru from '../../public/images/dniru.png'
import mir from '../../public/images/mir.png'
import tvc from '../../public/images/tvc.png'
import rentv from '../../public/images/rentv.png'
import Author_slider from "./12_1slider";

export default function Author(){
    return (
        <section className="_section">
            <div className="_wrapper mt-20 md:mt-40">
                <h3 className={`${AVRILE_SERIF} _h`}>Основатель школы  и автор методики</h3>
                <div className="flex flex-col md:flex-row md:justify-between mt-10 md:mt-15 md:gap-x-16">
                    <div className="w-1/3 hidden md:inline mt-[30px]">
                        <Image src={janna_seropyan_portrait} alt="Жанна Серопян" className="hidden md:inline"/>
                    </div>
                    <div className="w-full md:w-2/3">
                        <h4 className="font-bold text-center md:text-left text-_purple text-[18px] sm:text-[20px] md:text-[24px] lg:text-[30px] maxw:text-[36px]">Жанна Серопян</h4>
                        <p className="_text-14-24 mt-1.5 text-center font-bold md:font-normal md:text-left">автор уникальной рефлекторной методики по ускоренной постановке и развитию голоса</p>
                        <div className="w-full flex justify-center md:hidden mt-5">
                            <Image src={janna_seropyan_portrait} alt="Жанна Серопян" className="w-1/2 md:hidden"/>
                        </div>
                        <ul className="mt-5 md:mt-10 [&>li]:list-disc pl-4 [&>li]:pl-3 [&>li]:mt-2.5 ">
                            <li><b>15 лет</b> профессионально занимаетя вокалом и обучает пению.</li>
                            <li>Часто гастролирует, побывала с концертами <b>в более чем 90 городах России и СНГ. </b></li>
                            <li>Основатель онлайн-школы вокала «Петь легко». </li>
                            <li>По ее методике прошли обучение <b>более 30 тысяч учеников с 15 стран мира.</b></li>
                            <li>Закончила бывшее гнесинское училище по эстадному вокалу (ГМУЭДИ), в котором обучались также Л. Агутин, А. Варум, П. Гагарина и многие другие звезды отечественной эстрады.</li>
                            <li>Окончила ТГУ им. Державина, отделение Музыкальное исскуство эстрады, как педагог и исполнитель.</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 md:mt-20 flex flex-col-reverse md:flex-row justify-between rounded-lg border border-_pink p-5 gap-x-10 gap-y-5">
                    
                    <div className="flex flex-col justify-around min-h-full md:w-7/12">
                        <div className="flex justify-between gap-x-10 w-full">
                            <div className="flex flex-col justify-center w-1/3">
                                <Image src={moscow} alt="Москва" className="object-contain w-auto sm:max-h-10 md:max-h-14"/>
                            </div>
                            <div className="flex flex-col justify-center w-1/3">
                                <Image src={cosmopoliten} alt="Космополитен" className="object-contain w-auto max-h-6 sm:max-h-6 md:max-h-8"/>
                            </div>
                            <div className="flex flex-col justify-center w-1/3">
                                <Image src={dniru} alt="ДниРу" className="object-contain w-auto sm:max-h-6 md:max-h-10"/>
                            </div>
                        </div>
                        <div className="flex justify-between gap-x-2 w-full">
                            <div className="flex flex-col justify-center w-1/3">
                                <Image src={mir} alt="Мир" className="object-contain w-auto max-h-10 sm:max-h-12 md:max-h-16 lg:max-h-16"/>
                            </div>
                            <div className="flex flex-col justify-center w-1/3">
                                <Image src={tvc} alt="ТВц" className="object-contain w-auto max-h-6 sm:max-h-8 md:max-h-10"/>
                            </div>
                            <div className="flex flex-col justify-center w-1/3">
                                <Image src={rentv} alt="РенТВ" className="object-contain w-auto max-h-10 sm:max-h-12 md:max-h-16 lg:max-h-16"/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="md:w-5/12 flex flex-col justify-center">
                        <p className="block text-center md:text-left bg-_mainbg rounded-lg _text-14-20 font-bold p-4">
                            Телепередачи и статьи о Жанне часто появляются в ведущих СМИ - Москва24, Рен-ТВ, ТВ-центр, Cosmopolitan, МИР, Дни.ру
                        </p>
                    </div>
                </div>

                
                <Author_slider />
                
            </div>
        </section>
    )
}