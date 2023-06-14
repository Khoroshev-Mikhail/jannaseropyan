import Image from "next/image";
import arrow from '../../public/images//icons/arrow_long.png'
import women_with_microphone from '../../public/images/women_with_microphone.png'
import { AVRILE_SERIF } from "@/pages/_app";

export default function Experience(){
    return (
        <section className="_section">
            <div className="_wrapper mt-20 md:mt-40">
          
                <div>
                    <h3 className={`${AVRILE_SERIF} _h`}>Последняя версия программы заняла у меня больше 5 лет исследований и тестов</h3>
                    <p className="text-_purple text-center mt-10 md:mt-14">На тысячах наших учеников - онлайн и оффлайн </p>
                    <p className="mx-auto text-center mt-2 md:mt-4 md:w-3/4 ">Теперь она дает четкие и предсказуемые результаты всем - независимо от таланта или музыкального образования:</p>
                </div>


                <div className="relative z-10 grid grid-cols-12 p-4 mt-6 md:mt-16  md:gap-x-10 md:gap-y-9">
                    <div className="col-span-12 _text-bold-14-24 md:col-span-5">
                        <p>Если ты новичок в вокале, у тебя было так:</p>
                    </div>
                    <div className="col-span-1 pt-1 pr-1 sm:pr-2 md:pr-0 md:-mx-2 md:col-span-1">
                        
                    </div>
                    <div className="col-span-11 mt-4 md:col-span-6">
                        <div className="_div-bg uppercase">А станет так:</div>
                    </div>

                    <div className="col-span-12 mt-4 md:mt-0 md:col-span-5">
                        Слабый, тихий, зажатый голос. Неприятный тембр.
                    </div>
                    <div className="col-span-1 pt-1 pr-1 sm:pr-2 md:pr-0 md:-mx-2 mt-2 md:mt-0 md:col-span-1">
                        <Image src={arrow} alt="arrow" className="w-full h-auto"/>
                    </div>
                    <div className="col-span-11 font-bold mt-2 md:mt-0 md:col-span-6">
                        Поëшь и говоришь громко, объемно и красиво. Раскрылся яркий «естественный»тембр.
                    </div>

                    <div className="col-span-12 mt-4 md:mt-0 md:col-span-5">
                        Напрягается горло, поëшь и говоришь «на связках».
                    </div>
                    <div className="col-span-1 pt-1 pr-1 sm:pr-2 md:pr-0 md:-mx-2 mt-2 md:mt-0 md:col-span-1">
                        <Image src={arrow} alt="arrow" className="w-full h-auto"/>
                    </div>
                    <div className="col-span-11 font-bold mt-2 md:mt-0 md:col-span-6">
                        Ушли зажимы, ты умеешь расслабляться и петь без напряжения.
                    </div>

                    <div className="col-span-12 mt-4 md:mt-0 md:col-span-5">
                        Не попадаешь в ноты. Часто даже непонятно - попал или нет...
                    </div>
                    <div className="col-span-1 pt-1 pr-1 sm:pr-2 md:pr-0 md:-mx-2 mt-2 md:mt-0 md:col-span-1">
                        <Image src={arrow} alt="arrow" className="w-full h-auto"/>
                    </div>
                    <div className="col-span-11 font-bold mt-2 md:mt-0 md:col-span-6">
                        Поешь чисто в любой ситуации. Слышишь фальшь у других.
                    </div>

                    <div className="col-span-12 mt-4 md:mt-0 md:col-span-5">
                        Стесняешься петь на публике, страшно даже думать об этом.
                    </div>
                    <div className="col-span-1 pt-1 pr-1 sm:pr-2 md:pr-0 md:-mx-2 mt-2 md:mt-0 md:col-span-1">
                        <Image src={arrow} alt="arrow" className="w-full h-auto"/>
                    </div>
                    <div className="col-span-11 font-bold mt-2 md:mt-0 md:col-span-6">
                        С удовольствием поешь на публике, удивляешь друзей и знакомых своим «внезапным» талантом. Делаешь музыкальные подарки.
                    </div>

                    <div className="col-span-12 mt-4 md:mt-0 md:col-span-5">
                        Чувствуешь усталость, постоянный стресс, эмоциональное выгорание. Нет времени на себя и свои хобби, постоянно нужно удовлетворять чьи-то потребности
                    </div>
                    <div className="col-span-1 pt-1 pr-1 sm:pr-2 md:pr-0 md:-mx-2 mt-2 md:mt-0 md:col-span-1">
                        <Image src={arrow} alt="arrow" className="w-full h-auto"/>
                    </div>
                    <div className="col-span-11 font-bold mt-2 md:mt-0 md:col-span-6">
                        Красивое пение дает расслабление и ощущение счастья. У тебя теперь есть «только твое» хобби, отдушина и личное пространство.
                    </div>

                </div>

                <div className="flex justify-center relative w-full">
                    <div className="w-1/2 relative md:pb-[40%]">
                        <Image src={women_with_microphone} alt="женщина с микрофоном" className="md:absolute md:-top-[25%] md:z-0"/>
                    </div>
                </div>

                <div className="relative pb-8">

                    <div className="absolute z-0 hidden bg-_mainbg w-[55%] -mt-8 top-0 min-h-full right-0 rounded-lg border border-_pink md:block">
                        {/* Блок для фона */}
                    </div>

                    <div className="relative z-10 mt-4 grid grid-cols-12 md:gap-x-10 rounded-lg border border-_pink p-4 bg-_mainbg md:mt-0 md:bg-opacity-0 md:border-none md:gap-y-9">
                        
                        <div className="col-span-12 _text-bold-14-24 md:col-span-5">
                            <p>Если ты давно поешь, у тебя было так:</p>
                        </div>
                        <div className="col-span-1 pt-1 pr-1 sm:pr-2 md:pr-0 md:-mx-2">
                            
                        </div>
                        <div className="col-span-11 mt-4 md:col-span-6">
                            <div className="_div-bg uppercase">А станет так:</div>
                        </div>

                        <div className="col-span-12 mt-4 md:mt-0 md:col-span-5">
                            Маленький диапазон, не берутся высокие или низкие ноты.
                        </div>
                        <div className="col-span-1 pt-1 pr-1 sm:pr-2 md:pr-0 md:-mx-2 mt-2 md:mt-0">
                            <Image src={arrow} alt="arrow" className="w-full h-auto"/>
                        </div>
                        <div className="col-span-11 font-bold mt-2 md:mt-0 md:col-span-6">
                            Диапазон увеличивается на 1-2 октавы.
                        </div>

                        <div className="col-span-12 mt-4 md:mt-0 md:col-span-5">
                            Часто срываешь голос, сложно петь долго «на полную».
                        </div>
                        <div className="col-span-1 pt-1 pr-1 sm:pr-2 md:pr-0 md:-mx-2 mt-2 md:mt-0">
                            <Image src={arrow} alt="arrow" className="w-full h-auto"/>
                        </div>
                        <div className="col-span-11 font-bold mt-2 md:mt-0 md:col-span-6">
                            Чувствуешь опору, снимаешь напряжение со связок. Можно без проблем отпеть концерт на 2-3 часа.
                        </div>


                        <div className="col-span-12 mt-4 md:mt-0 md:col-span-5">
                            Поешь только в хоровой или академической манере.
                        </div>
                        <div className="col-span-1 pt-1 pr-1 sm:pr-2 md:pr-0 md:-mx-2 mt-2 md:mt-0">
                            <Image src={arrow} alt="arrow" className="w-full h-auto"/>
                        </div>
                        <div className="col-span-11 font-bold mt-2 md:mt-0 md:col-span-6">
                            Можешь легко переходить на современный эстрадный или рок-вокал.
                        </div>

                        <div className="col-span-12 mt-4 md:mt-0 md:col-span-5">
                            Только чистый звук, не используешь вокальные приемы.
                        </div>
                        <div className="col-span-1 pt-1 pr-1 sm:pr-2 md:pr-0 md:-mx-2 mt-2 md:mt-0">
                            <Image src={arrow} alt="arrow" className="w-full h-auto"/>
                        </div>
                        <div className="col-span-11 font-bold mt-2 md:mt-0 md:col-span-6">
                            Используешь все известные вокальные приемы - рык, субтон, мелизмы, драйв, заглубление, бэлтинг и т.д.
                        </div>

                        <div className="col-span-12 mt-4 md:mt-0 md:col-span-5">
                            Не показываешь и ни с кем не делишься своим талантом.
                        </div>
                        <div className="col-span-1 pt-1 pr-1 sm:pr-2 md:pr-0 md:-mx-2 mt-2 md:mt-0">
                            <Image src={arrow} alt="arrow" className="w-full h-auto"/>
                        </div>
                        <div className="col-span-11 font-bold mt-2 md:mt-0 md:col-span-6">
                            Выступаешь и побеждаешь в конкурсах. Увеличиваешь свой доход на вокале - и делаешь его стабильным.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}