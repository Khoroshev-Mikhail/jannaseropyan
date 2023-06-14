import { AVRILE_SERIF } from "@/pages/_app";
import Button from "../ui/Button";
import Reviews_slider from "./14_1slider";
import Fixed from "../ui/Fixed";


export default function Reviews(){
    return (
        <section className="_section">
            <div className="_wrapper mt-20 md:mt-40">            

                <h3 className={`${AVRILE_SERIF} _h`}>Результаты учеников</h3>
                <p className="text-_purple text-center mt-10 md:mt-14">За 5 лет по этой системе изменили голос более
                    <br /><b>11 000 человек</b>
                </p>
                <p className="mt-7 md:mt-10 text-center">Результаты "До и После" говорят сами за себя:</p>

                <Reviews_slider />
                
                <a href="#payment">
                    <Button className="mt-10 md:mt-20 !mx-auto">
                        Хочу так же!
                    </Button>
                </a>
            </div>
        </section>
    )
}