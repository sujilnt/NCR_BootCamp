import Head from "next/head";
import Menu from "../components/Menu";
import styles from "./style.module.css";

export default function Layout(props:any){
    return(
        <div className={styles.container}>
            <Head>
                <title>NCR Rewards</title>
                <meta name="description" content="NCR Rewards" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                <Menu/>
            </header>
            <main className={styles.main}>
                {props.children}
            </main>
            <footer className={styles.footerContainer}>
                © 2022 NCR Corporation. All rights reserved.
            </footer>
        </div>
    );
}