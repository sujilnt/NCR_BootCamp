import { Menu,Button } from 'antd';
import Link from "next/link"
import {ItemType} from "antd/lib/menu/hooks/useItems";
import Image from "next/image";

import styles from "./style.module.css";


enum AuthOptions {
    LOGIN= "LOGIN",
    JOIN_NOW = "JOIN NOW",
}


const routes ={
  [AuthOptions.JOIN_NOW]: "/join",
  [AuthOptions.LOGIN]: "/login"
};


const items:ItemType[]  = [
    {
        key:1,
        title: AuthOptions.LOGIN.toLowerCase(),
        label: generateLinkFor(AuthOptions.LOGIN)
    },
    {
        key:2,
        title: AuthOptions.JOIN_NOW.toLowerCase(),
        danger: true,
        label: generateLinkFor(AuthOptions.JOIN_NOW),

    }
];

/**
 * generating menu links and label for the menu based on the options
 * @param routeName
 */
function generateLinkFor(routeName:AuthOptions){
    return (
        <Link href={routes[routeName]}>
            <a className={styles.link}>{routeName.toLowerCase()}</a>
        </Link>
    )
}


export default function(){
    return(
        <div className={styles.container}>
            <div className={styles.heading}>
                <Image  src='/brand_logo/ncr.svg' alt="logo of the company"  width={100} height={150}/>
                Rewards
            </div>
            <Menu items={items} mode="horizontal" className={styles.menu}/>
        </div>
    );
}

