import Image, { StaticImageData } from 'next/image';
import React from 'react';

export default function Author_slide( { name, src, toggle, preview }: { name: string, src: string, toggle: (src: string) => void, preview: StaticImageData} ){
    return(
        <Image src={preview} alt="name" onClick={()=>toggle(src)} className="cursor-pointer bg-[#D9D9D9] w-full aspect-video"/>
        // <iframe src={src} title={name} loading='lazy' className="bg-[#D9D9D9] w-full aspect-video"  />
    )
}