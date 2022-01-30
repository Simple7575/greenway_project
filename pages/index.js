import Head from "next/head";
import { useRef } from "react";
import Mainhero from "../components/main/Mainhero";
import Mainmessage from "../components/main/Mainmessage";
import Mainproduct from "../components/main/Mainproduct";
import Mainwhy from "../components/main/Mainwhy";

export default function Home() {
    const elementToScroll = useRef();

    return (
        <div>
            <Head>
                <title>Greenway Home</title>
            </Head>
            <header>
                <Mainhero elementToScroll={elementToScroll} />
            </header>
            <main ref={elementToScroll}>
                <Mainwhy />
                <Mainproduct />
                <Mainmessage />
            </main>
        </div>
    );
}
