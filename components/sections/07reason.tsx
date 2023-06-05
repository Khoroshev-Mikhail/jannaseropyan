import { AVRILE_SERIF } from "@/pages/_app";

export default function Reason(){
    return (
        <section className="_section _text-14-20">
            <div className="_wrapper mt-20 md:mt-40">
                <div>
                    <h3 className={`${AVRILE_SERIF} _h`}>
                        Дело в том, что 
                        <span className="text-_purple"> красивый голос - </span>
                        это автоматический навык
                    </h3>
                </div>
                <div>
                    <div className="mt-10 md:mt-16">
                        <p className="_text-bold-14-24">И да, петь и правда становится ЛЕГКО, если уметь:</p>
                    </div>
                    <div>
                        <ul className="pl-4 md:columns-2 [&>li]:pl-2 mt-5 [&>li]:list-image-[url('/images/icons/note.svg')] md:[&>li]:list-image-[url('/images/icons/note_big.svg')] ">
                            <li>Отслеживать свои ощущения</li>
                            <li>Вдыхать в нужном месте и сколько нужно</li>
                            <li>Повторять вокальные приемы звезд</li>
                            <li>Разогревать свой голос перед выступлением</li>
                            <li>Знать как добавить объема и убрать гнусавость</li>
                            <li>Применять приемы на всем диапазоне</li>
                            <li>Контролировать работу мышц пресса и голосового аппарата</li>
                            <li>Формировать яркий звук и менять тембр</li>
                            <li>Легко менять регистры - без срывов и петухов)</li>
                            <li>Попадать в ноты на 100%</li>
                            <li>Управлять расходом воздуха - для длинных нот</li>
                            <li>Подсознательно применять всю технику - чтобы свободно творить на сцене!</li>
                        </ul>
                    </div>
                    <div>
                        <p className="mt-9">Много всего, правда? </p>
                    </div>
                </div>
            </div>
        </section>
    )
}