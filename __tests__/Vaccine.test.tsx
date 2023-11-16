import {render, screen,waitFor} from '@testing-library/react'
import HospitalCatalog from '@/components/hospitalCatalog'

const mockResult = {
    "success": true,
    "count": 2,
    data : [
        {
            "_id": "652e9a10e35ce49e3610e2e4",
            "name": "Chulalongkorn Hospital",
            "address": "1873 Rama IV Rd",
            "district": "Pathum Wan",
            "province": "Bangkok",
            "postalcode": "10330",
            "tel": "026494000",
            "picture": "https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
            "__v": 0,
            "id": "652e9a10e35ce49e3610e2e4"
        },
        {
            "_id": "652e9a5be35ce49e3610e2e7",
            "name": "Rajavithi Hospital",
            "address": "2 Phaya Thai Rd, Thung Phaya Thai",
            "district": "Ratchathewi",
            "province": "Bangkok",
            "postalcode": "10400",
            "tel": "022062900",
            "picture": "https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
            "__v": 0,
            "id": "652e9a5be35ce49e3610e2e7"
        }
    ]
}

describe('HospitalCatalog',()=>{
    it('should have correct number of hospital images', async()=>{
        const hospitalCatalog = await HospitalCatalog({hospitalJson:mockResult})
        render(hospitalCatalog)

        await waitFor(
            ()=> {
                const hospitalImages = screen.queryAllByRole('img')
                expect(hospitalImages.length).toBe(2)
            }
        )
    })
})
