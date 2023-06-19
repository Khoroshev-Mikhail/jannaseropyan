import { AVRILE_SERIF } from "@/pages/_app";
import Button from "../ui/Button";
import Link from "next/link";
import { VARIANT_1_CREDIT_LINK, VARIANT_1_LINK, VARIANT_2_CREDIT_LINK, VARIANT_2_LINK, VARIANT_3_CREDIT_LINK, VARIANT_3_LINK } from "@/lib/consts";

export default function Variants(){
    return (
        <section className="_section scroll-smooth">
            <div className="_wrapper mt-20 md:mt-40">

            <h3 data-aos="fade-right" data-aos-duration="2000" className={`${AVRILE_SERIF} _h`} id="payment">Варианты участия</h3>
            <div className="flex flex-col w-full md:flex-row mt-10 md:mt-14 md:py-10 ">

                {/* Первый вариант */}
                <div data-aos="fade-right" data-aos-duration="2000" className="relative px-5 md:px-1 lg:px-5 border border-_pink rounded-md bg-_mainbg  bg-opacity-50 py-6 md:py-10 md:w-[32%]">
                    <div>
                        <h5 className="_h-text">СТАРТОВЫЙ</h5>
                        <ul className="[&>li]:list-disc list-inside mt-4 [&>li]:mt-2.5 md:mt-10">
                            <li><b>1 ступень</b> - Постановка опоры и формирование звука.</li>
                            <li><b>2 ступень</b> - Четкость произношения (артикуляция).</li>
                            <li><b>3 ступень</b> - Звуковедение, акценты и динамика в пении.</li>
                            <li><b>4 ступень</b> - Резонаторы и тембр. Микс. Бэлтинг. Твэнг.</li>
                            <li><b>60</b> пошаговых видеоуроков, доступных с любого устройства.</li>
                            <li>Обратная связь по ДЗ в личном кабинете - на 6 месяцев.</li>
                        </ul>
                        <div className="flex mt-4 md:mt-8">
                            <p className="text-_purple pr-1">БОНУС:</p>
                            <p>Мини-курс «Идеальный Слух и Ритм»</p>
                        </div>
                    </div>
                    <div className="mt-14 flex justify-center w-full md:absolute md:bottom-5 md:left-0 md:mt-0">
                        <div className="[&>p]:text-center w-full md:px-2 lg:px-10">
                            <p><s>30 000 руб</s></p>
                            <p className="_h-text">24 900 руб</p>
                            <p className="-mx-2 text-[14px]">(скидка 10% при оплате сразу)</p>
                            <Link href={VARIANT_1_LINK} target="_blank" >
                                <Button className="!mx-auto !min-w-0 max-w-[283px] mt-6 md:mt-9 !w-full">
                                    Пройти курс!
                                </Button>
                            </Link>
                            <p className="mt-5 md:mt-[27px]"><b>от 1 990 руб/мес</b></p>
                            <Link href={VARIANT_1_CREDIT_LINK} target="_blank">
                                <Button className="!w-full !mx-auto max-w-[283px] mt-2.5 !px-0 md:mt-5 bg-_white border-_purple border border-opacity-50 !text-_black !text-[14px] sm:!text-[16px] md:!text-[18px] lg:!text-[20px]">
                                    Пройти  в рассрочку
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Второй вариант */}
                <div data-aos="fade-right" data-aos-duration="2000" className="relative mt-10 px-5 md:px-1 lg:px-5 -mx-[1px] border border-_pink rounded-md md:-my-10 py-6 md:w-[36%] md:py-20">
                    <div>
                        <h5 className="_h-text">ОСНОВНОЙ</h5>
                        <ul className="[&>li]:list-disc list-inside mt-4 md:mt-10 [&>li]:mt-2.5">
                            <li><b>1 ступень</b> - Постановка опоры и формирование звука.</li>
                            <li><b>2 ступень</b> - Четкость произношения (артикуляция).</li>
                            <li><b>3 ступень</b> - Звуковедение, акценты и динамика в пении.</li>
                            <li><b>4 ступень</b> - Резонаторы и тембр. Микс. Бэлтинг. Твэнг.</li>
                            <li><b>5 ступень</b> - Вокальные приемы и украшения.</li>
                            <li><b>87</b> пошаговых видеоуроков, доступных с любого устройства.</li>
                            <li>Обратная связь по ДЗ в личном кабинете - 1год.</li>
                            <li><b>12 индивидуальных уроков</b> с педагогом.</li>
                        </ul>
                        <div className="flex mt-4 md:mt-8">
                            <p className="text-_purple pr-1">БОНУС:</p>
                            <p>Мини-курс «Идеальный Слух и Ритм»</p>
                        </div>
                        <div className="flex">
                            <p className="text-_purple pr-1">БОНУС:</p>
                            <p>Мини-курс «Вокальная Йога»</p>
                        </div>
                    </div>
                    <div className="md:absolute md:bottom-[60px] mt-14 md:mt-0 md:left-0 flex justify-center w-full">
                        <div className="[&>p]:text-center w-full md:px-2 lg:px-10">
                            <p><s>50 000 руб</s></p>
                            <p className="_h-text">37 900 руб</p>
                            <p className="-mx-1 text-[14px]">(скидка 10% при оплате сразу)</p>
                            <Link href={VARIANT_2_LINK} target="_blank">
                                <Button className="!mx-auto !min-w-0  max-w-[283px] mt-6 md:mt-9 !w-full">
                                    Пройти курс!
                                </Button>
                            </Link>
                            <p className="mt-5 md:mt-[27px]"><b>от 3 575 руб/мес</b></p>
                            <Link href={VARIANT_2_CREDIT_LINK} target="_blank">
                                <Button className="!w-full !mx-auto max-w-[283px] mt-2.5 !px-0 md:mt-5 bg-_white border-_purple border border-opacity-50 !text-_black">
                                    Пройти  в рассрочку
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Третий вариант */}
                <div data-aos="fade-right" data-aos-duration="2000" className="relative mt-10 border border-_pink rounded-md bg-_mainbg bg-opacity-50 px-5 md:px-1 lg:px-5 py-6 md:pb-[400px] md:py-10 md:mt-0 md:w-[32%]">
                    <div>
                        <h5 className="_h-text">МАКСИМАЛЬНЫЙ</h5>
                        <ul className="[&>li]:list-disc list-inside mt-4 md:mt-10 [&>li]:mt-2.5">
                            <li><b>1 ступень</b> - Постановка опоры и формирование звука.</li>
                            <li><b>2 ступень</b> - Четкость произношения (артикуляция).</li>
                            <li><b>3 ступень</b> - Звуковедение, акценты и динамика в пении.</li>
                            <li><b>4 ступень</b> - Резонаторы и тембр. Микс. Бэлтинг. Твэнг.</li>
                            <li><b>5 ступень</b> - Вокальные приемы и украшения.</li>
                            <li><b>6 ступень</b> - Зарабатывай на выступлениях.</li>
                            <li><b>7 ступень</b> - Зарабатывай на обучении вокалу.</li>
                            <li><b>109</b> пошаговых видеоуроков, доступных с любого устройства.</li>
                            <li>Обратная связь по ДЗ в личном кабинете - 1год.</li>
                            <li><b>30</b> индивидуальных уроков с педагогом.</li>
                        </ul>

                        <div className="flex mt-4 md:mt-8">
                            <p className="text-_purple pr-1">БОНУС:</p>
                            <p>Мини-курс «Идеальный Слух и Ритм»</p>
                        </div>
                        <div className="flex">
                            <p className="text-_purple pr-1">БОНУС:</p>
                            <p>Мини-курс «Вокальная Йога»</p>
                        </div>
                        <div className="flex">
                            <p className="text-_purple pr-1">БОНУС:</p>
                            <p>Работа с микрофоном и настройка аппаратуры для вокалиста»</p>
                        </div>
                    </div>
                    
                    <div className="md:absolute md:bottom-5 md:left-0 mt-14 md:mt-0 flex justify-center w-full">
                        <div className="[&>p]:text-center w-full md:px-2 lg:px-10">
                            <p><s>90 000 руб</s></p>
                            <p className="_h-text">68 900 руб</p>
                            <p className="-mx-2 text-[14px]">(скидка 10% при оплате сразу)</p>
                            <Link href={VARIANT_3_LINK} target="_blank">
                                <Button className="!mx-auto !min-w-0 max-w-[283px] mt-6 md:mt-9 !w-full">
                                    Пройти курс!
                                </Button>
                            </Link>
                            <p className="mt-5 md:mt-[27px]"><b>от 6 240 руб/мес</b></p>
                            <Link href={VARIANT_3_CREDIT_LINK} target="_blank">
                                <Button className="!w-full !mx-auto max-w-[283px] mt-2.5 !px-0 md:mt-5 bg-_white border-_purple border border-opacity-50 !text-_black">
                                    Пройти  в рассрочку
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

            </div>
        </section>
    )
}