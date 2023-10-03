'use client'
import styles from './banner.module.css'
import Image from 'next/image'
import {useState} from 'react';
import { useRouter } from 'next/navigation';

export default function Banner() {
    const covers = ['/img/vaccine1.jpg','/img/vaccine2.jpg','/img/vaccine3.jpg','/img/vaccine4.jpg']
    const [index,setIndex] = useState(0)
    const router = useRouter()
    return (
        <div className={styles.banner} onClick={()=>{setIndex(index+1)}}>
            <Image src={covers[index%4]} alt='banner' fill={true} priority objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1>Get Vaccinated Today</h1>
                <h2>and Protect Your Loved Ones!</h2>
                <h6 style={{marginTop:'10px'}}>From Today To 28 AUG @ every Wellness centre in Thailand!</h6>
            </div>
            <button className="bg-white text-cyan-600 border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0 hover:bg-cyan-600 hover:text-white hover:border-transparent" onClick={(e)=>{router.push('/hospital');e.stopPropagation()}}>
                Select Your hospital
            </button>
        </div>
    )
}