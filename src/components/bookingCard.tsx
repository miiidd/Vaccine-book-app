'use Client'
import { useAppSelector,AppDispatch } from "@/redux/store"
import { useDispatch} from 'react-redux'
import { removeBooking } from "@/redux/features/bookSlice"

export default function BookingCard() {
    const bookItems = useAppSelector( (state)=> state.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()
    if (bookItems.length == 0){
        return <div className="text-xl font-medium flex flex-row px-5 py-5">No Vaccine Booking</div>       
    }
    return (
        <>
        
        {
            bookItems.map((reserveItem) => (
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2">
                    <div className="text-xl">Name: {reserveItem.name} {reserveItem.surname}</div>
                    <div className="text-sm">Date: {reserveItem.date}</div>
                    <div className="text-sm">ID: {reserveItem.id}</div>
                    <div className="text-sm">Hospital: {reserveItem.hospital}</div>
                    <button className="rounded-md bg-sky-600 hover:bg-indigo-400 px-3 py-2 shadow-sm text-white my-5" onClick={()=> dispatch(removeBooking(reserveItem))}>Remove this appointment</button>
                </div>
                
            ))}
        </>
    )
    

}