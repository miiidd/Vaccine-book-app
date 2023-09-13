'use client'
import styles from './banner.module.css'
import Image from 'next/image'
import {useState} from 'react';

export default function Banner() {
    const covers = ['/img/vaccine1.jpg','/img/vaccine2.jpg','/img/vaccine3.jpg','/img/vaccine4.jpg']
    const [index,setIndex] = useState(0)

    return (
        <div className={styles.banner} onClick={()=>{setIndex(index+1)}}>
            <Image src={covers[index%4]} alt='banner' fill={true} priority objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1>Get Vaccinated Today</h1>
                <h2>and Protect Your Loved Ones!</h2>
                <h6 style={{marginTop:'10px'}}>From Today To 28 AUG @ every Wellness centre in Thailand!</h6>
            </div>
        </div>
    )
}