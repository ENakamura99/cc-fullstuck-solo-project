import { useState } from 'react'

export default function SearchCafe({searchCafe}){
    const [area, setArea] = useState('');

    //検索だけなのでuseEffectはいらない
    const clickSearch = (e) => {
        e.preventDefault() //areaが更新される度にリロードされるのを防ぐ
        if (area === "") return

        searchCafe(area)
        setArea('')
    }

    return (
      <>
        <h2>どのエリアのカフェをお探しですか？</h2>
        <form onSubmit={ clickSearch }>
            <input 
                type="text"
                value={area}
                onChange={e => setArea(e.target.value)} //入力を画面に即時反映
            ></input>
            <button>検索</button>
        </form>  
      </>
    )
}

