import Nav from "@/components/sections/01nav";
import Header from "@/components/sections/02header";
import Preview from "@/components/sections/03preview";
import Description from "@/components/sections/04description";
import Result from "@/components/sections/05result";
import Way from "@/components/sections/06way";
import Reason from "@/components/sections/07reason";
import Mistakes from "@/components/sections/08mistakes";
import Formula from "@/components/sections/09formula";
import Because from "@/components/sections/10because";
import Steps from "@/components/sections/11steps";
import Author from "@/components/sections/12_0author";
import Experience from "@/components/sections/13experiece";
import Reviews from "@/components/sections/14_0reviews";
import Stars from "@/components/sections/15stars";
import Variants from "@/components/sections/16variants";
import Online from "@/components/sections/17online";
import Faq from "@/components/sections/18faq";
import Footer from "@/components/sections/19footer";
import Fixed from "@/components/ui/Fixed";
import Head from "next/head";

export default function Home() {
    return (
        <main className={``}>
            <Head>
                <title>Система Петь легко 3.0 - научись красиво петь и зарабатывай на музыке и вокале</title>
                <meta httpEquiv="content-language" content="ru" />
                <meta name="description" content="Научитесь петь красиво с вокальными приемами - и зарабатывать на музыке и вокале." />
                <link rel="shortcut icon" href="/images/icons/favicon.png" />
            </Head>

            <Nav />
            <Header />
            <Preview />
            <Description />
            <Result />
            <Way/>
            <Reason/>
            <Mistakes/>
            <Formula/> 
            <Because/>
            <Steps/>
            <Author/>
            <Experience/>
            <Reviews/>
            <Stars/>
            <Variants/>
            <Online/>
            <Faq/>
            <Footer/>
        </main>
    )
}
