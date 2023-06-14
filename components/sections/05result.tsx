import Image from "next/image";
import boy_with_microphone from '../../public/images/boy_with_microphone.png'

export default function Result(){
    return (
        <section className="_section">
            <div className="_wrapper">
                <div className="w-full">
                    <p className="_p-bg mt-12">В результате - вы годами ходите по кругу, БЕЗ каких либо изменений:</p>
                </div>
                <div className="flex justify-start">
                    <div className="sm:hidden flex flex-col justify-center w-1/3 sm:w-full">
                        <Image src={boy_with_microphone} alt="Парень с микрофоном" className="block"/>
                    </div>
                    <div className="pl-4 mt-4 flex sm:justify-center w-2/3 sm:pl-0 sm:w-full">
                        <div className="flex flex-col justify-start sm:justify-center">
                            <ul className="flex flex-col sm:block h-full font-bold [&>li]:list-image-[url('/images/icons/shaka.svg')] list-inside _text-14-20 sm:columns-3 sm:mx-auto sm:[&>li]:list-image-[url('/images/icons/shaka_big.svg')]">
                                <li className="flex-grow sm:list-item">Тихий, зажатый голос</li>
                                <li className="flex-grow sm:list-item">Неприятный тембр</li>
                                <li className="flex-grow sm:list-item">Пение «мимо нот»</li>
                                <li className="flex-grow sm:list-item">Напряжение в горле</li>
                                <li className="flex-grow sm:list-item">Насмешки и критика</li>
                                <li className="flex-grow sm:list-item">Страшно выступать</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}