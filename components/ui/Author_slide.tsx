import React from 'react';
import Image, { StaticImageData } from "next/image";
import play from '../../public/images/icons/arrow_play.svg'

export default function Author_slide( { name, src }: { name: string, src: string} ){
    return(
        <iframe src={src} title={name} className="bg-[#D9D9D9] w-full aspect-video"  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
    )
}