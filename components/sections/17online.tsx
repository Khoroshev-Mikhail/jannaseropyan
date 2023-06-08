import Image from "next/image";
import online from '../../public/images/online.png'
import { AVRILE_SERIF } from "@/pages/_app";
import Button from "../ui/Button";

export default function Online(){
    return (
        <section className="_section">
            <div className="_wrapper mt-20 md:mt-40">
                <h3 className={`${AVRILE_SERIF} _h`}>Все происходит в удобном онлайн формате</h3>
                <div className="flex mt-10 md:mt-16">
                    <div className="w-1/3">
                        <Image src={online}  alt="Онлайн занятия с Жанной Серопян"/>
                    </div>
                    <div className="w-2/3">
                        <p>Живые занятия - «отмазка» для ленивых.</p>
                        <p className="mt-3"><b>Единственное отличие живых занятий</b> - педагог может вас «пощупать» лично.  Но вы же не за этим идете учится петь?</p>
                        <div className="_p-bg mt-12 py-1 _text-14-24">В остальном - онлайн удобнее и современнее:</div>
                        <ul className="[&>li]:list-image-[url('/images/icons/done.svg')] [&>li]:pl-2 pl-8 mt-8 space-y-4">
                            <li>Ноль времени на дорогу и ожидание своей очереди</li>
                            <li>Личный кабинет с видеоуроками и распевками</li>
                            <li>Полноценное общение с педагогом - на индивидуальных уроках</li>
                            <li>Единая система и методика </li>
                            <li>Подбор педагогов конкретно под вас</li>
                            <li>Занимаетесь из любого места, с любого устройства.</li>
                        </ul>
                        <p className="_text-bold-14-24 text-_purple mt-3">А главное - вы не просто ходите развлекаться, а двигаетесь по системе, отслеживаете результаты и меняете голос.</p>
                    </div>
                </div>

                <Button className="!mx-auto px-16 mt-20">Начать!</Button>
            </div>
        </section>
    )
}