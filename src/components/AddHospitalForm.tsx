import Hospital from "@/db/models/Hospital"
import { dbConnect } from "@/db/dbConnect"
import { revalidatePath } from "next/cache"


export default function HospitalForm() {
    const addHospital = async (addHospitalForm:FormData) => {
        'use server'
        const hname = addHospitalForm.get("hname")
        const address = addHospitalForm.get("address")
        const province = addHospitalForm.get("province")
        const district = addHospitalForm.get("district")
        const postalcode = addHospitalForm.get("postalcode")
        const tel = addHospitalForm.get("tel")
        const picture = addHospitalForm.get("picture")

        try {
            await dbConnect()
            const hospital = await Hospital.create({
                "name": hname,
                "address":address,
                "district": district,
                "province":province,
                "postalcode": postalcode,
                "tel": tel,
                "picture": picture
            })
        } catch(error) {
            console.log(error)
        }
        revalidatePath("/hospital")
    }

    return (
        <form action={addHospital}>
            <div className="text-md text-blue-700">Add Hospital</div>
            <div className="flex items-center w-1/2 my-2">
                <label htmlFor='hname' className="w-auto block text-gray-700 pr-4">Hospital Name</label>
                <input className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus-border-blue-400" type='text' required id='hname' name='hname' placeholder="Hospital Name"/>
            </div>
            <div className="flex items-center w-1/2 my-2 gap-1.5">
                <label htmlFor='address' className="w-auto block text-gray-700 pr-4">Address</label>
                <input className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus-border-blue-400" type='text' required id='address' name='address' placeholder="Road"/>
                <label htmlFor='district' className="w-auto block text-gray-700 pr-4">District</label>
                <input className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus-border-blue-400" type='text' required id='district' name='district' placeholder="district"/>
            </div>
            
            <div className="flex items-center w-1/2 my-2 gap-1.5">
                <label htmlFor='province' className="w-auto block text-gray-700 pr-4">Province</label>
                <input className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus-border-blue-400" type='text' required id='province' name='province' placeholder="province"/>
                <label htmlFor='postalcode' className="w-auto block text-gray-700 pr-4">Postal code</label>
                <input className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus-border-blue-400" type='text' required id='postalcode' name='postalcode' placeholder="postal code"/>
            
            </div>
            
            <div className="flex items-center w-1/2 my-2">
                <label htmlFor='tel' className="w-auto block text-gray-700 pr-4">Tel.</label>
                <input className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus-border-blue-400" type='text' required id='tel' name='tel' placeholder="tel number"/>
            </div>
            <div className="flex items-center w-1/2 my-2">
                <label htmlFor='picture' className="w-auto block text-gray-700 pr-4">Picture</label>
                <input className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus-border-blue-400" type='text' required id='picture' name='picture' placeholder="URL"/>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">Add New Hospital</button>
        
        </form>
    )
}