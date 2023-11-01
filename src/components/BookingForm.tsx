"use client"
import {useState} from 'react'
import dayjs, { Dayjs } from "dayjs";
import HospitalDateReserve from "@/components/HospitalDateReserve";
import {useDispatch} from 'react-redux'
import { AppDispatch } from '@/redux/store';
import { BookingItem } from '../../interfaces';
import IdReserve from './IdReserve';
import NameReserve from './NameReserve';
import { addBooking } from '@/redux/features/bookSlice';

export default function Bookingform() {

    const [pickupDate,setPickupDate] = useState<Dayjs|null>(null)
    const [pickupLocation,setLocation] = useState<string>('')
    const [bookFirstName,setBookFirstName] = useState<string>('')
    const [bookId,setBookId] = useState<string>('')
    const [bookLastName,setBookLastName] = useState<string>('')

    const dispatch = useDispatch<AppDispatch>()

    const makeReservation = () => {
        if (pickupDate && pickupLocation) {
            const item:BookingItem = {
                name: bookFirstName,
                surname: bookLastName,
                id:bookId,
                hospital:pickupLocation,
                date: dayjs(pickupDate).format("YYYY/MM/DD")
            }
            dispatch(addBooking(item))
        }
    }

    return(
<main>
<div className="block text-lg py-2 font-medium leading-6 text-gray-900">Book the vaccine</div>
            <div className="py-3">
                <label htmlFor="fullname" className="block text-sm font-medium leading-6 text-gray-900">
                    Name
                </label>
                <NameReserve onSurNameChange={(value:string)=>{setBookLastName(value)}} onNameChange={(value:string)=>{setBookFirstName(value)}}/>
            </div>

            <div className="py-3">
                <label htmlFor="id" className="block text-sm font-medium leading-6 text-gray-900">
                    Citizen Identify Number
                </label>
                <IdReserve onIdChange={(value:string)=>{setBookId(value)}}/>
            </div>

            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">Pick-up Date and Location</div>
                <HospitalDateReserve onDateChange={(value:Dayjs)=>{setPickupDate(value)}} onLocationChange={(value:string)=>setLocation(value)}/>
            </div>
            <button className="rounded-md bg-sky-600 hover:bg-indigo-400 px-3 py-2 shadow-sm text-white my-5" onClick={makeReservation}>Book your appointment</button>
</main>
    )
}