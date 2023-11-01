'use client'
import {useState} from 'react'

export default function NameReserve({onNameChange,onSurNameChange}:{onNameChange:Function,onSurNameChange:Function}) {
    const [reserveFirstName,setReserveFirstName] = useState<string>("")
    const [reserveLastName,setReserveLastName] = useState<string>('')
    return (
        <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="block w-[550px] rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="First name..."
                    onChange={(e)=>{setReserveFirstName(e.target.value);onNameChange(e.target.value)}}
                    />
<br></br>
                    <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="block w-[550px] rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Surname..."
                    onChange={(e)=>{setReserveLastName(e.target.value);onSurNameChange(e.target.value)}}
                    />
                </div>
    )
}