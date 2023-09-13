import styles from './card.module.css'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard'

export default function Card( {hospitalName, imgSrc} : {hospitalName:string, imgSrc:string}) {
    return (
        <InteractiveCard>
            <div className='w-full h-[83%] relative rounded-t-lg '>
                <Image src={imgSrc} alt='Hospital Picture' fill={true} className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[20%] p-[10px] font-normal'>
                {hospitalName}
            </div>
        </InteractiveCard>
    )
}