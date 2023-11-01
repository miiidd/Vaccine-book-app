import {createSlice,PayloadAction} from "@reduxjs/toolkit"
import { BookingItem } from "../../../interfaces"

type CartState = {
    bookItems: BookingItem[]
}

const initialState:CartState = {
    bookItems:[]
}

export const bookSlice = createSlice({
    name:"book",
    initialState,
    reducers:{
        addBooking: (state,action:PayloadAction<BookingItem>)=>{
            if (state.bookItems.length >= 1) {
                state.bookItems.pop()
            }
            state.bookItems.push(action.payload)
        },
        removeBooking: (state, action:PayloadAction<BookingItem>) => {
            const remainItems = state.bookItems.filter(obj => {
                return ( (obj.id !== action.payload.id) ||
                (obj.date !== action.payload.date) ||
                (obj.hospital !== action.payload.hospital))
            }) //return [] which items don't follow the rules
            state.bookItems = remainItems
        } 
    }
})

export const { addBooking, removeBooking} = bookSlice.actions
export default bookSlice.reducer