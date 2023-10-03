'use client'
import Card from '@/components/Card'
import { useReducer } from 'react';
import Link from "next/link";

export default function CardPanel() {

    const ratingReducer = (ratingMap:Map<string,number>,action:{type:string,hospitalName:string, newRating:number })=> {
        switch(action.type) {
            case 'update':{
                return new Map(ratingMap.set(action.hospitalName,action.newRating))
            }
            case 'remove':{
                ratingMap.delete(action.hospitalName)
                return new Map(ratingMap)
            }
            default: 
            return ratingMap
        }
    }
    const [ratingMap,dispatchrating] = useReducer(ratingReducer, new Map([
        ['Chulalongkorn Hospital', 0],
        ['Rajavithi Hospital', 0],
        ['Thammasat University Hospital', 0]
      ]));

/**
 * Mock Data
 */
const mockHospitalRepo = [
    {hid:'001', name:'Chulalongkorn Hospital', image:'/img/chula.jpg'},
    {hid:'002', name:'Rajavithi Hospital', image:'/img/rajavithi.jpg'},
    {hid:'003', name:'Thammasat University Hospital', image:'/img/thammasat.jpg'}
]

    return (
        <div>
            <div style={{margin:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around" }}>
                {
                mockHospitalRepo.map((hospitalItem) => (
                    <Link href={`/hospital/${hospitalItem.hid}`} className="w-1/5">
                    <Card hospitalName={hospitalItem.name} imgSrc={hospitalItem.image} rating={ratingMap.get(hospitalItem.name) || 0 } onRating={(rating:number)=>dispatchrating({type:'update',hospitalName:hospitalItem.name,newRating:rating})}/>
                    </Link>
                ))    
                }
            </div>
            { Array.from(ratingMap).map( (element)=><div key={element[0]} onClick={()=>dispatchrating({type:'remove',hospitalName:element[0],newRating:element[1]})}>{element[0]} Rating = {element[1]}</div> )}
        </div>
    );
}