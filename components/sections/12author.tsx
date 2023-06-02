import Image from "next/image";
import janna_seropyan_portrait from '../../public/images/janna_seropyan_portrait.png'

import moscow from '../../public/images/moscow.png'
import cosmopoliten from '../../public/images/cosmopoliten.png'
import dniru from '../../public/images/dniru.png'
import mir from '../../public/images/mir.png'
import tvc from '../../public/images/tvc.png'
import rentv from '../../public/images/rentv.png'

export default function Author(){
    return (
        <section>
            <h3>Основатель школы  и автор методики</h3>
            <div>
                <div>
                    <Image src={janna_seropyan_portrait} alt="Жанна Серопян"/>
                </div>
                <div>
                    <h4>Жанна Серопян </h4>
                    <p>автор уникальной рефлекторной методики по ускоренной постановке и развитию голоса</p>
                    <ul>
                        <li><b>15 лет</b> профессионально занимаетя вокалом и обучает пению.</li>
                        <li>Часто гастролирует, побывала с концертами <b>в более чем 90 городах России и СНГ. </b></li>
                        <li>Основатель онлайн-школы вокала «Петь легко». </li>
                        <li>По ее методике прошли обучение <b>более 30 тысяч учеников с 15 стран мира.</b></li>
                        <li>Закончила бывшее гнесинское училище по эстадному вокалу (ГМУЭДИ), в котором обучались также Л. Агутин, А. Варум, П. Гагарина и многие другие звезды  отечественной эстрады.</li>
                        <li>Окончила ТГУ им. Державина, отделение Музыкальное исскуство эстрады, как педагог и исполнитель.</li>
                    </ul>
                </div>
            </div>
            <div>
                <Image src={moscow} alt="Москва" />
                <Image src={cosmopoliten} alt="Космополитен" />
                <Image src={dniru} alt="ДниРу" />
                <Image src={mir} alt="Мир" />
                <Image src={tvc} alt="ТВц" />
                <Image src={rentv} alt="РенТВ" />
                <p>Телепередачи и статьи о Жанне часто появляются в ведущих СМИ - Москва24, Рен-ТВ, ТВ-центр, Cosmopolitan, МИР, Дни.ру</p>
            </div>
            <div>
                slider
            </div>
        </section>
    )
}