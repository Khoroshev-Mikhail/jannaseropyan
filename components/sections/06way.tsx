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
                    <div className="md:flex mt-10 gap-x-10 gap-y-5">

                        <div className="relative z-30">
                            <div>
                                <p>Вы любите петь - и у вас даже неплохо получается.  </p>
                            </div>
                            <div className="border border-_pink rounded-md p-4 md:p-8 mt-5">
                                <p className="_p-bg-inline">Вот только:</p>
                                <ul className="marker:text-_pink [&>li]:list-disc list-inside">
                                    <li>Часто срывается голос, поете на связках</li>
                                    <li>Не берутся высокие или низкие ноты</li>
                                    <li>Голос не звучит «по звездному», не получаются вокальные приемы</li>
                                    <li>Страшно показать себя - на конкурсе или шоу</li>
                                    <li>А главное - совершенно непонятно, как можно   достойно зарабатывать на музыке и вокале</li>
                                </ul>
                            </div>
                        </div>

                        <div className="">
                            <div className="">
                                <p className="mt-5 md:mt-0 relative z-50">А ведь эти проблемы не исчезнут сами собой, если просто петь.</p>
                                <p className="mt-5 relative z-50 w-2/3 md:w-full">И с каждым годом все труднее будет трансформировать себя и свою жизнь.</p>
                            </div>
                            <div className="relative z-30 border border-_pink rounded-md p-4 md:p-8 mt-5">
                                <p className="_p-bg-inline">А пока что:</p>
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

                    <div className="w-full z-40 md:z-0 flex justify-end md:justify-center md:mt-[-100px] lg:mt-[-150px] absolute right-0 bottom-24 xs:bottom-20 md:static">
                            <Image src={girl_with_microphone} alt="девочка с микрофоном" className="w-1/3 md:w-1/2"/>
                    </div>

                </div>
            </div>
        </section>
    )
}