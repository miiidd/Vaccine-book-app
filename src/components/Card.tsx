'use client'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard'
import {Rating} from '@mui/material'

export default function Card( {hospitalName, imgSrc,rating,onRating} : {hospitalName:string, imgSrc:string,rating:number,onRating:Function}) {
    return (
        <InteractiveCard>
            <div className='w-full h-[75%] relative rounded-t-lg '>
                <Image src={imgSrc} alt='Hospital Picture' fill={true} className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[10%] p-[10px] font-normal'>
                {hospitalName}
            </div>
            <Rating className='w-full h-[10%] py-2 pl-2' name="controlled"
            value={rating}
            onChange={(event, newValue) => {event.stopPropagation(); event.preventDefault();
            onRating(newValue);
            }} onClick={(e) => {e.stopPropagation()}}/>
        </InteractiveCard>
    )
}