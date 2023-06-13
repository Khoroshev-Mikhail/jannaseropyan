import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import cross from '../../public/images/icons/cross.svg'

export default function Fixed({ src = 'https://www.youtube.com/embed/fhby1d7lhMk', toggle }:{ src: string, toggle: (src: string) => void }){

    return(
        <div className='fixed w-full h-full top-0 left-0 z-50 flex justify-center bg-_black bg-opacity-50 cursor-pointer' onClick={()=>toggle('')}>
            <div className='fixed top-1 right-1 z-[999] w-10 h-10'  onClick={()=>toggle('')}>
                <img src={cross.src} className='w-10 h-10'/>
            </div>
            <div className='cursor-default px-2 flex flex-col justify-center h-full w-full sm:w-3/4 md:w-2/3 '>
                <iframe loading="lazy" src={src} className='w-full aspect-video'/>
            </div>
        </div>
    )
}