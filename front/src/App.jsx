import { useState } from 'react'
import './App.css'
import SearchCafe from './SearchCafe'
import AllCafe from './AllCafe'

function App() {

  const [ searchedArea, setSearchedArea ] = useState('')

  const searchCafe = (area) => {
    console.log(area)
    setSearchedArea(area)
  }
  
  return (
    <>
      <h2 className="header">Cafestagram</h2>
      { !searchedArea ?
          <SearchCafe
            searchCafe={searchCafe}
          ></SearchCafe>
          :
          <AllCafe
            area={searchedArea}
            searchCafe={searchCafe}
          ></AllCafe> 
      }
    </>
  )
}

export default App
