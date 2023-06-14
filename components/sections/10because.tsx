import { AVRILE_SERIF } from "@/pages/_app";
import finger from '../../public/images/icons/finger.png'

export default function Because(){
    return (
        <section className="_section">
            <div className="_wrapper mt-10 md:mt-20">
                <h3 className={`${AVRILE_SERIF} _h`}>Потому что на самом деле:</h3>
                <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 flex flex-col md:flex-row justify-center gap-x-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-12 maxw:gap-x-14">

                    <div className="relative md:w-1/2 lg:w-7/12">
                        <p className="absolute -top-5 _p-bg-inline px-5 ml-5">ВАЖНО:</p>
                        <ul className="py-8 px-12 bg-_mainbg rounded-md [&>li]:list-image-[url('/images/icons/done.svg')] [&>li]:relative [&>li>span]:absolute [&>li>span]:-top-[1px] [&>li]:pl-2">
                            <li><span>Звучать на опоре и без зажимов</span></li>
                            <li><span>Попадать в ноты и слышать себя со стороны </span></li>
                            <li><span>Четко артикулировать</span></li>
                            <li><span>Раскрыть природный тембр</span></li>
                            <li><span>Соединить резонаторы</span></li>
                            <li><span>Использовать Микст</span></li>
                            <li><span>Применять вибрато и вокальные приемы</span></li>
                        </ul>
                        <div className="mt-5 md:mt-7 flex justify-start md:justify-center w-full">
                            <p className="text-center block font-bold">
                                Когда умеешь это 
                            </p>
                            <img src={finger.src} className="-mt-2 block w-4 sm:w-5 md:w-6 lg:w-7 maxw:w-8"/>
                        </div>
                    </div>

                    <div className="mt-10 md:w-1/2 lg:w-5/12">
                        <p className="_p-bg-inline">Вообще НЕ ВАЖНО:</p>
                        <ul className="py-8 px-12 [&>li]:list-image-[url('/images/icons/cross.svg')] [&>li]:relative [&>li>span]:absolute [&>li>span]:-top-[1px] [&>li]:pl-2">
                            <li><span>Сотни распевок для разогрева</span></li>
                            <li><span>«100 грамм» чтобы запеть</span></li>
                            <li><span>Музыкальное образование</span></li>
                            <li><span>Пробуждение «горловой чакры» и «энергетическое» дыхание</span></li>
                            <li><span>Годы занятий с репетитором</span></li>
                            <li><span>Особое вдохновение, настроение, просветление</span></li>
                            <li><span>Вокальный талант от Бога)</span></li>
                        </ul>
                        <div className="flex justify-start md:justify-center w-full">
                            <p className="text-center block font-bold">
                                Это уже не нужно
                            </p>
                            <img src={finger.src} className="-mt-2 block w-4 sm:w-5 md:w-6 lg:w-7 maxw:w-8"/>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}