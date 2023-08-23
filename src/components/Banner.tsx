import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image src={'/img/vaccine1.jpg'} alt='banner' fill={true} priority objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1>Get Vaccinated Today</h1>
                <h2>and Protect Your Loved Ones!</h2>
                <h6 style={{marginTop:'10px'}}>From Today To 28 AUG @ every Wellness centre in Thailand!</h6>
            </div>
        </div>
    )
}