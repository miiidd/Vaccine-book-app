import styles from './card.module.css'
import Image from 'next/image'

export default function Card( {hospitalName, imgSrc} : {hospitalName:string, imgSrc:string}) {
    return (
        <div className='w-1/5 h-[300px] rounded-lg shadow-lg'>
            <div className='w-full h-[83%] relative rounded-t-lg '>
                <Image src={imgSrc} alt='Hospital Picture' fill={true} className='object-cover rounded-t-lg'/>
            </div>
        <div className='w-full h-[20%] p-[10px] bg-amber-200 font-normal'>
                {hospitalName}
            </div>
        </div>
    )
}