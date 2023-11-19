import Image from "next/image"
import getHospital from "@/libs/getHospital"
import Link from "next/link"
export default async function HospitalDetailPage({params} : {params : {hid:string}}) {
    const hospitalDetail = await getHospital(params.hid)
    
    /**
     * Mock Data for Demonstration Only
     */
    /*
    const mockHospitalRepo = new Map()
    mockHospitalRepo.set("001",{name:'Chulalongkorn Hospital', image:'/img/chula.jpg'})
    mockHospitalRepo.set("002",{name:'Rajavithi Hospital', image:'/img/rajavithi.jpg'})
    mockHospitalRepo.set("003",{name: 'Thammasat University Hospital', image:'/img/thammasat.jpg'})
    */

    return(
        <main className="text-center p-5">
            <div className="flex flex-row my-5">
                <Image src={ hospitalDetail.data.picture} alt="hospital image" width={0} height={0} sizes="100vw" className="rounded-lg w-[30%]"/>
                <div className="text-md mx-5 font-bold text-left">
                {hospitalDetail.data.name}
                <div className="text-md mx-5 font-normal">Address: {hospitalDetail.data.address}</div>
                <div className="text-md mx-5 font-normal">Province: {hospitalDetail.data.province}</div>
                <div className="text-md mx-5 font-normal">Postal code: {hospitalDetail.data.postalcode}</div>
                <div className="text-md mx-5 font-normal">Tel.: {hospitalDetail.data.tel}</div>
                <Link href={`/booking?id=${params.hid}&name=${hospitalDetail.data.name}`}>
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white font-normal shadow-sm">
                        Make booking
                    </button>
                </Link>
                
                </div>
            </div>
        </main>
    )
}

export async function generateStaticParams() {
    return [{hid:'001'},{hid:'002'},{hid:'003'},{hid:'004'}]
}