import './AllCafe.css'
import { useState } from 'react'
import SingleCafe from "./SingleCafe"

export default function AllCafe(area){

    const [cafeName, setCafeName] = useState("")

    console.log(area)
    //backendができたらareaを元にcafeの情報を取ってくる。とってきた情報をcafesに入れる
    //const [cafes, setCafe] = setState();
    
    const showSingleCafe = (e) => {
        console.log(e.target.src)
        setCafeName('a')
        console.log("aaaa", cafeName)
    }
    
    return (
        <>
            { !cafeName ? 
                <div className="cafeCell">
                    {/* backendができたら修正 */}
                    {/* { cafes.map ((cafe) => {
                        return (
                            <figure>
                                <figcaption className="figCaption">{cafe.name}</figcaption>
                                <img className="photo" src={"../../src/tempPhoto/pexels-chevanon-312418.jpg"} alt="cafe1" />
                                onClick=
                            </figure>
                        )
                    })} */}
                    <figure>
                        <figcaption className="figCaption">a</figcaption>
                        <img 
                            className="photo" 
                            src="../../src/tempPhoto/pexels-chevanon-312418.jpg" 
                            onClick={showSingleCafe}
                        />
                        
                    </figure>
                    <figure>
                        <figcaption className="figCaption">b</figcaption>
                        <img className="photo" src="../../src/tempPhoto/pexels-fotios-photos-907142.jpg" alt="cafe1" />
                    </figure>
                    <figure>
                        <figcaption className="figCaption">c</figcaption>
                        <img className="photo" src="../../src/tempPhoto/pexels-arthurbrognoli-2260824.jpg" alt="cafe1" />
                    </figure>
                    <figure>
                        <figcaption className="figCaption">d</figcaption>
                        <img className="photo" src="../../src/tempPhoto/pexels-fotios-photos-1833769.jpg" alt="cafe1" />
                    </figure>

                </div>
            : 
            <SingleCafe
                cafeName={cafeName}
            >
            </SingleCafe>
            }
        </>
    )
}
