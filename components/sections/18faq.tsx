import { AVRILE_SERIF } from "@/pages/_app";

export default function Faq(){
    return (
        <section className="_section">
            <div className="_wrapper mt-20 md:mt-40 md:px-20 _text-14-20">
                <h3 data-aos="fade-right" data-aos-duration="2000" className={`${AVRILE_SERIF} _h`}>Вопросы, которые задают нам чаще всего:</h3>
                <div className="flex flex-col mt-10 [&>div]:border-b [&>div]:border-_pink [&>div]:py-4 [&>div]:pb-5 md:mt-10 ">
                    <div data-aos="fade-right" data-aos-duration="2000" className="border-t">
                        <p className="font-bold">А получится ли у меня? Есть ли у меня данные?</p>
                        <p className="mt-3 md:mt-4">Если есть желание - то все получится, если вы конечно не немой)) Многие думают, что для того чтобы петь нужны какие то особенные данные - но на самом деле петь может каждый.</p>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="2000">
                        <p className="font-bold">Это реально - научиться петь, если мне ___ лет, и я никогда не пел?</p>
                        <p className="mt-3 md:mt-4">Да, реально, у нас есть успешные ученики в возрасте от 7 до 74 лет!</p>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="2000">
                        <p className="font-bold">Сколько времени нужно, чтобы научиться петь профессионально?</p>
                        <p className="mt-3 md:mt-4">От 3 до 6 месяцев, в зависимости от вашей целеустремленности и частоты занятий.</p>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="2000">
                        <p className="font-bold">Как можно онлайн учить петь? Компьютер/скайп же искажает звук?</p>
                        <p className="mt-3 md:mt-4">Это то же самое что говорить - мой голос на записи совсем не похож на мой)) Наоборот, по скайпу как раз слышен ваш настоящий тембр и все недочеты - также как и на записи.</p>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="2000">
                        <p className="font-bold">У меня почти нет времени, смогу ли я учиться?</p>
                        <p className="mt-3 md:mt-4">По нашим программам вы можете заниматься в любое удобное время и с той скоростью, которая вам будет комфортна, не выходя из дома. В среднем, на занятия вам хватит даже 20 минут в день.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}