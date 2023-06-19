import React, { useEffect } from 'react';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import { Open_Sans } from 'next/font/google'

const Open_Sans_Font = Open_Sans({ subsets: ['latin', 'cyrillic']})
const Avrile_Serif_Font = localFont({ src: '../public/fonts/AvrileSerif-Bold.ttf'})
const OPEN_SANS = Open_Sans_Font.className
export const AVRILE_SERIF = Avrile_Serif_Font.className


import AOS from "aos";
import "aos/dist/aos.css";

// export function reportWebVitals(metric: any) {
//     console.log(metric)
//   }
export default function App({ Component, pageProps }: AppProps) {
    useEffect(()=>{
        AOS.init()
    }, [])
    
    return (
        <main className={`${OPEN_SANS} text-_black`}>
            <Component {...pageProps} />
        </main>
    )
}
