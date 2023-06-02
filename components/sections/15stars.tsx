import Image from "next/image";
import vitalii_abdulov from '../../public/images/photo_with_stars/vitalii_abdulov.png'
import anastasiya_lisova from '../../public/images/photo_with_stars/anastasiya_lisova.png'
import ekaterina_melnik from '../../public/images/photo_with_stars/ekaterina_melnik.png'
import aliana_gobozova from '../../public/images/photo_with_stars/aliana_gobozova.png'
import tatiana_kiriluk from '../../public/images/photo_with_stars/tatiana_kiriluk.png'
import viktoria_klinkova from '../../public/images/photo_with_stars/viktoria_klinkova.png'
export default function Stars(){
    return (
        <section>
            <h4>Звездные ученики нашей школы</h4>
            <div>
                <div>
                    <Image src={vitalii_abdulov} alt="Виталий Абдулов и Жанна Серопян" />
                    <p>Виталий Абдулов</p>
                    <p>актер театра и кино («Молодежка», «Ранетки», «Марш Турецкого», «Кадетство», «Превосходство Борна»)</p>
                </div>
                <div>
                    <Image src={anastasiya_lisova} alt="Анастасия Лисова и Жанна Серопян" />
                    <p>Анастасия Лисова</p>
                    <p>медийная личность, модель, Экс-участница «Дом-2»</p>
                </div>
                <div>
                    <Image src={ekaterina_melnik} alt="Екатерина Мельник и Жанна Серопян" />
                    <p>Екатерина Мельник</p>
                    <p>Актриса театра и кино («Физрук», «Интерны», «Шпион», «Воин»)</p>
                </div>
                <div>
                    <Image src={aliana_gobozova} alt="Алиана Гобозова (Устиненко) и Жанна Серопян" />
                    <p>Алиана Гобозова (Устиненко)</p>
                    <p>Экс-участница «Дом-2»</p>
                </div>
                <div>
                    <Image src={tatiana_kiriluk} alt="Татьяна Кирилюк и Жанна Серопян" />
                    <p>Татьяна Кирилюк</p>
                    <p>журналистка, телеведущая, экс-участница «Дом-2»</p>
                </div>
                <div>
                    <Image src={viktoria_klinkova} alt="Виктория Клинкова и Жанна Серопян" />
                    <p>Виктория Клинкова</p>
                    <p>актриса кино (телесериал «Физрук», телеканал «Дисней»)</p>
                </div>
            </div>
        </section>
    )
}