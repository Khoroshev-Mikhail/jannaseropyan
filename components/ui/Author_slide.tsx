import React from 'react';

export default function Author_slide( { name, src }: { name: string, src: string} ){
    return(
        <iframe src={src} title={name} loading='lazy' className="bg-[#D9D9D9] w-full aspect-video"  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
    )
}