import { useEffect, useState } from "react"
import axios from 'axios'
import "./Cafe.css"

const baseUrl = import.meta.env.VITE_API_BASE_URL

export default function SingleCafe({selectedCafe, goBackAllCafe}){ 


    const [cafeInfo, setCafeInfo] = useState();
    const [sameCafePhotos, setSameCafePhotos] = useState([]);

    useEffect(() => {
        try {
            const fetchCafe= async() => {
                const res = await axios.get(`${baseUrl}/cafes/${selectedCafe}`)
                
                //カフェデータ表示用
                setCafeInfo(res.data[0])

                //写真表示用
                const allPhotos = res.data.map((cafe) => cafe.photo);
                const removeFirstPhoto = allPhotos.slice(1);
                setSameCafePhotos(removeFirstPhoto);
                
            }
            fetchCafe();
            console.log(sameCafePhotos)
        } catch (e){
            console.log("error", e)
        }
    },[])

    const handleGoBack = () =>{
        goBackAllCafe()
    }
    
    return (
        <>
        <button className='backButton' onClick={handleGoBack}>←</button>
        { cafeInfo &&
            <>
            <h3>{ cafeInfo.cafeName }</h3>
            <img 
                className="biggerPhoto" 
                src={cafeInfo.photo} 
                alt="cafe" 
            />
            <br></br>
            <br></br>
            <div>Address : {cafeInfo.address}</div>
            <div>BusinessHours : {cafeInfo.businessHours}</div>
            <div>Review : {cafeInfo.review}</div>
            </>
        }

        <br></br>
        <hr></hr>
        <h5>ーーこのカフェに関する他ユーザーの投稿ーー</h5>

        <div className="cafeCell">
            {sameCafePhotos.map((cafe, index) => {
                return (
                    <div key={index}>
                        <img 
                            className="photo" 
                            src={cafe} 
                            alt={`cafe ${index}`} 
                        />
                    </div>
                );
            })}
        </div>  
        </>
    )

}