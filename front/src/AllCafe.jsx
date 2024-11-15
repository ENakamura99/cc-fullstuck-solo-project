import './Cafe.css'
import { useState, useEffect } from 'react'
import SingleCafe from "./SingleCafe"
import axios from 'axios'

const baseUrl = import.meta.env.VITE_API_BASE_URL

export default function AllCafe({area, searchCafe}){

    const [selectedCafe, setSelectedCafe] = useState("")
    const [cafesList, setCafeList] = useState();

    useEffect(() => {
        try {
            const fetchCafes= async() => {
                const res = await axios.get(`${baseUrl}/cafes?area=${area}`)
                setCafeList(res.data)
            }
            fetchCafes();
        } catch (e){
            console.log("error", e)
        }
    },[])
    const showSingleCafe = (e) => {
        cafesList.map((cafe) => {
            if (e.target.src === cafe.photo) {
                setSelectedCafe(cafe.cafeName)
            }
        })
    }

    const goBackApp= () => {
        searchCafe('')
    }

    const goBackAllCafe = () => {
        setSelectedCafe('')
    }

    return (
        <>
        { !selectedCafe ? 
          <>
            <button className='backButton' onClick={goBackApp}>←</button>
            <div className="cafeCell">

                { cafesList && cafesList.map ((cafe, index) => {
                    return (
                        <figure key={index}>
                            <figcaption className="figCaption">{cafe.cafeName}</figcaption>
                            <img 
                                className="photo" 
                                src={cafe.photo} 
                                alt="cafe" 
                                onClick={showSingleCafe}
                            />
                        </figure>
                    )
                })}
            </div>
          </>
            : 
            <SingleCafe
                selectedCafe={selectedCafe}
                goBackAllCafe={goBackAllCafe}
                area={area}
            >
            </SingleCafe>
            }
        </>
    )
}