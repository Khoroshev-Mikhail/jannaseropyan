import Image, { StaticImageData } from "next/image";
import play from '../../public/images/icons/arrow_play.svg'

export default function Reviews_slide( { photo, name, review }: { photo: StaticImageData, name: string, review: string} ){
    return(
        <div className="h-[570px] xs:h-[500px] md:h-[620px] px-6 pb-10 flex flex-col w-full border border-_pink rounded-md">
            <div className="mt-[30px] xs:mt-[32px] sm:mt-[37px] md:mt-[40px] rounded-full overflow-hidden flex justify-center w-full min-h-[95px] xs:min-h-[105px] sm:min-h-[120px] md:min-h-[130px]">
                <Image src={photo} alt={name} className="w-[95px] h-[95px] xs:w-[130px] xs:h-[130px] sm:w-[120px] sm:h-[120px] md:w-[130px] md:h-[130px]"/>
            </div>
            <div className="mt-[30px] xs:mt-[32px] sm:mt-[37px] md:mt-[40px]">
                <p className="_text-14-20 font-bold text-center">{name}</p>
            </div>
            <div className="flex-grow mt-[20px] xs:mt-[22px] sm:mt-[27px] md:mt-[30px] _overflow-transition border-b-2 border-_white border-opacity-50">
                <p>{review}</p>
            </div>
            <div className="flex justify-center">
                <button className="flex justify-center border border-_purple border-opacity-50 rounded-[8px/30px] _text-14-20 font-bold py-1 sm:py-2 md:py-3 px-2">
                    Смотреть результат
                    <Image src={play} alt="play" className="block ml-1"/>
                </button>
            </div>
        </div>
    )
}