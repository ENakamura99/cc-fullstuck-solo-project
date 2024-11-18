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
                
                console.log(res.data)
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
            <div className="cafeDetails">
                <div>住所 : {cafeInfo.address}</div>
                <div>営業時間 : {cafeInfo.businessHours}</div>
                <div>Wifi有無 : {cafeInfo.wifi? "あり" : "なし"}</div>
                <div>コンセント有無 : {cafeInfo.outlet? "あり" : "なし"}</div>
                <div>喫煙有無 : {cafeInfo.smoking? "あり" : "なし"}</div>
                <div>雰囲気 : {cafeInfo.atmosphere}</div>
                <div>価格帯 : {cafeInfo.priceRange}</div>
                <div>レビュー : {cafeInfo.coffeeReview}</div>
            </div>
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