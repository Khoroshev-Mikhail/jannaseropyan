import Image from "next/image";
import arrow_double from "../../public/images/icons/arrow_double.svg"

export default function Preview(){
    return (
        <section className="_section">
            <div className="_wrapper h-full mt-20 md:flex md:justify-between">
                <div className="space-y-3 md:w-[45%] text-[20px]">
                    <p>
                        <span className="text-_purple">На курсе вы поставите красивый и сильный голос, </span> 
                        раскроете ваш уникальный тембр.
                    </p>
                    <p>
                        <span className="text-_purple">Найдете свой стиль</span> с применением вокальных приемов.
                    </p>
                    <p>
                        <span className="text-_purple">Сможете петь любимые песни</span> как в оригинале.
                    </p>
                    <p className="font-bold mt-4 md:relative block w-3/4">
                        Подробнее рассказываю, из чего состоит курс
                        <Image src={arrow_double} alt="arrow" className="mt-3 ml-10 rotate-90 md:rotate-0 md:absolute md:right-[-35px] md:top-0"/>
                    </p>

                </div>
                <div className="md:w-[50%] h-full">
                    <iframe className="w-full h-full min-h-[200px] sm:min-h-[300px] rounded-md mt-4 md:mt-0" src="https://www.youtube.com/embed/0k-kTeuRBv0?controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
            </div>
        </section>
    )
}