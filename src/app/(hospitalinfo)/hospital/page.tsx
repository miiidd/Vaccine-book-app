import getHospitals from "@/libs/getHospitals";
import HospitalCatalog from "@/components/hospitalCatalog";
import {Suspense} from 'react'
import { LinearProgress } from "@mui/material";
export default function Card() {
    const hospitals = getHospitals()


    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium">Select Your Hospital</h1>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
            <HospitalCatalog hospitalJson={hospitals}/>
            </Suspense>
        </main>
    );
}