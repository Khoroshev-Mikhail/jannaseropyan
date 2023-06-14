import Image from "next/image";
import girl_with_microphone from '../../public/images/girl_with_microphone.png'
import { AVRILE_SERIF } from "@/pages/_app";

export default function Way(){
    return (
        <section className="_section _text-14-20">
            <div className="_wrapper mt-20 md:mt-40">

                <div>
                    <h3 className={`${AVRILE_SERIF} _h`}>Как вокалисту раскрыть свой потенциал и сделать музыку своей профессией?</h3>
                </div>
                
                <div className="relative">
                    <div className="mt-10 gap-x-10 gap-y-5 md:flex">

                        <div className="relative z-30">
                            <div>
                                <p>Вы любите петь - и у вас даже неплохо получается.  </p>
                            </div>
                            <div className="mt-5 p-4 border border-_pink rounded-md md:p-8 ">
                                <p className="_p-bg-inline !px-8">Вот только:</p>
                                <ul className="marker:text-_pink [&>li]:list-disc list-inside">
                                    <li>Часто срывается голос, поете на связках</li>
                                    <li>Не берутся высокие или низкие ноты</li>
                                    <li>Голос не звучит «по звездному», не получаются вокальные приемы</li>
                                    <li>Страшно показать себя - на конкурсе или шоу</li>
                                    <li>А главное - совершенно непонятно, как можно   достойно зарабатывать на музыке и вокале</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="md:mt-[70px]">
                                <p className="mt-5 relative z-50 md:mt-0">А ведь эти проблемы не исчезнут сами собой, если просто петь.</p>
                                <p className="mt-5 relative z-50 w-2/3 md:w-full">И с каждым годом все труднее будет трансформировать себя и свою жизнь.</p>
                            </div>
                            <div className="relative z-30  mt-5 border border-_pink rounded-md p-4 md:p-8">
                                <p className="_p-bg-inline !px-8">А пока что:</p>
                                <ul className="[&>li]:list-disc list-inside font-bold">
                                    <li>Срывы и зажимы</li>
                                    <li>Конкурсы - это не мое...</li>
                                    <li>Приемы - не получаются</li>
                                    <li>Так высоко не спою...</li>
                                    <li>Скучная нелюбимая работа</li>
                                    <li>Я - неудачник</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="absolute right-0 bottom-24 w-full z-40 flex justify-end xs:bottom-20 md:static md:z-0 md:justify-center md:-mt-[100px]">
                        <Image src={girl_with_microphone} alt="девочка с микрофоном" className="w-1/3 md:w-1/2 -ml-20"/>
                    </div>

                </div>
            </div>
        </section>
    )
}