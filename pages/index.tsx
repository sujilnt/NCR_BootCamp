import Head from 'next/head';
import Image from 'next/Image';

import styles from '../styles/index.module.css';
import {Button } from 'antd';
import Menu from "./../components/Menu/index";


export default function Home(){
  return (
      <article>
        <main className={styles.container}>
            <section className={styles.mainContentContainer}>
                <h1 className={styles.header}> Join over millions oF NCR customers to unleash your rewards !</h1>
                <div className={styles.content}>
                    <div className={styles.rightContentContainer}>
                        <Image src='/shop.svg' width={700} height={300} alt={"svg shop image"}/>
                    </div>
                    <div className={styles.leftContentContainer}>
                        <h2 className={styles.contentH2}>Shopping made simple,</h2>
                        <h3 className={styles.contentH3}>One stop shop for your rewards</h3>
                        <Button type="primary" className={styles.joinNow}>Join Now</Button>
                    </div>
                </div>
            </section>
            <h1>Reward Partners</h1>
        </main>
      </article>
  )
}