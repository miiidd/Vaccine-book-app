import HospitalDateReserve from "@/components/HospitalDateReserve";
import {getServerSession} from 'next-auth'
import { authOptions } from "../api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";

export default async function Booking() {
    
    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <table className='table-auto border-separate bordor-spacing-2'><tbody>
            <tr><td>Name</td><td>{profile.data.name}</td></tr>
            <tr><td>Email</td><td>{profile.data.email}</td></tr>
            <tr><td>Tel.</td><td>{profile.data.tel}</td></tr>
            <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
            </tbody></table>
            
            <div className="block text-lg py-2 font-medium leading-6 text-gray-900">Book the vaccine</div>
            <div className="py-3">
                <label htmlFor="fullname" className="block text-sm font-medium leading-6 text-gray-900">
                    Full name
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    className="block w-[550px] rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Full name..."
                    />
                </div>
            </div>
            <div className="py-3">
                <label htmlFor="id" className="block text-sm font-medium leading-6 text-gray-900">
                    Citizen Identify Number
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                    type="text"
                    name="id"
                    id="id"
                    className="block w-[550px] rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="X-XXXX-XXXXX-XXX"
                    />
                </div>
            </div>
            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">Pick-up Date and Location</div>
                <HospitalDateReserve/>
            </div>

        </main>
    );
}