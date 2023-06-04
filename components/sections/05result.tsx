import Image from "next/image";
import boy_with_microphone from '../../public/images/boy_with_microphone.png'

export default function Result(){
    return (
        <section>
            <div>
                <p className="_p-bg mt-12">В результате - вы годами ходите по кругу, БЕЗ каких либо изменений:</p>
            </div>
            <div className="flex justify-start mt-5">
                <div className="md:hidden w-1/3">
                    <Image src={boy_with_microphone} alt="Парень с микрофоном"/>
                </div>
                <div>
                    <ul className="[&>li]:list-image-[url('/images/icons/shaka.svg')] list-inside">
                        <li>Тихий, зажатый голос</li>
                        <li>Неприятный тембр</li>
                        <li>Пение «мимо нот»</li>
                        <li>Напряжение в горле</li>
                        <li>Насмешки и критика</li>
                        <li>Страшно выступать</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}