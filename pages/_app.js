import "../styles/index.scss";
import Nav from "../components/global/Nav.js";
import Head from "next/head";
import Footer from "../components/global/Footer";
import BecomePartner from "../components/global/BecomePartner";
import { useState } from "react/cjs/react.development";

function MyApp({ Component, pageProps }) {
    const [openPartner, setOpenPartner] = useState(null);

    return (
        <>
            <Head>
                <title>Greenway</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
            </Head>
            <Nav setOpenPartner={setOpenPartner} />
            <BecomePartner
                openPartner={openPartner}
                setOpenPartner={setOpenPartner}
            />
            <Component {...pageProps} />
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default MyApp;
