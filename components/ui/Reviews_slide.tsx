import Image, { StaticImageData } from "next/image";
import play from '../../public/images/icons/arrow_play.svg'

export default function Reviews_slide( { photo, name, src, review, toggle }: { photo: StaticImageData, name: string, src: string, review: string, toggle: (src: string) => void } ){

    return(
        <div className="h-[570px] px-3 xs:px-6 pb-10 flex flex-col w-full border border-_pink rounded-md xs:h-[500px] md:h-[620px]">
            <div className="mt-[30px] rounded-full overflow-hidden flex justify-center w-full min-h-[95px] xs:mt-[32px] xs:min-h-[105px] sm:min-h-[120px] sm:mt-[37px] md:min-h-[130px] md:mt-[40px]">
                <Image src={photo} alt={name} className="w-[95px] h-[95px] xs:w-[130px] xs:h-[130px] sm:w-[120px] sm:h-[120px] md:w-[130px] md:h-[130px]"/>
            </div>
            <div className="mt-[30px] xs:mt-[32px] sm:mt-[37px] md:mt-[40px]">
                <p className="_text-14-20 font-bold text-center">{name}</p>
            </div>
            <div className="flex-grow mt-[20px] md:mt-[30px] _overflow-transition border-b-2 border-_white border-opacity-50 xs:mt-[22px] sm:mt-[27px]">
                <p>{review}</p>
            </div>
            <div className="flex justify-center">
                <button onClick={()=>toggle(src)} className="flex justify-center border border-_purple border-opacity-50 rounded-[8px/30px] _text-14-20 font-bold py-1 px-2 sm:py-2 md:py-3 hover:px-4 duration-300 ">
                    <div>Смотреть результат</div>
                    <div className="flex flex-col justify-center h-full">
                        <Image src={play} alt="play" className="block ml-1"/>
                    </div>
                </button>
            </div>

        </div>
    )
}