import { useState, useEffect } from "react"
import "./SingleCafe.css"

export default function SingleCafe(cafeName){

    console.log(cafeName)

    const [singleCafe, setSingleCafe] = useState('');

    useEffect(() => {
        setSingleCafe(cafeName.cafeName)
    },[])

    return (
        <>
            <div>
                <h3>{singleCafe}</h3>

            </div>
        </>
    )

}