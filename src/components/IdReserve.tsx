'use client'
import {useState} from 'react'

export default function IdReserve({onIdChange}:{onIdChange:Function}) {
    const [reserveId,setReserveId] = useState<string>("")
    return (
        <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                    type="text"
                    name="id"
                    id="id"
                    className="block w-[550px] rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="X-XXXX-XXXXX-XXX"
                    onChange={(e)=>{setReserveId(e.target.value);onIdChange(e.target.value)}}
                    />
                
        </div>
    )
}