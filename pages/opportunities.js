import Head from "next/head";
import Opcar from "../components/opportunities/Opcar";
import Ophero from "../components/opportunities/Ophero";
import Opsecond from "../components/opportunities/Opsecond";
import Opstart from "../components/opportunities/Opstart";
import Optravel from "../components/opportunities/Optravel";

export default function opportunities() {
    return (
        <div id="opportunities">
            <Head>
                <title>Greenway Opportunities</title>
            </Head>
            <header>
                <Ophero />
            </header>
            <main>
                <Opstart />
                <Opsecond />
                <Optravel />
                <Opcar />
            </main>
        </div>
    );
}
