import Head from "next/head";
import Abouteco from "../components/about/Abouteco";
import Aboutecofirst from "../components/about/Aboutecofirst";
import Abouthero from "../components/about/Abouthero";
import Aboutstart from "../components/about/Aboutstart";

export default function about() {
    return (
        <div id="about">
            <Head>
                <title>About Greenway</title>
            </Head>
            <header>
                <Abouthero />
            </header>
            <main>
                <Aboutstart />
                <Aboutecofirst />
                <Abouteco />
            </main>
        </div>
    );
}
