import { useState } from 'react'
import './App.css'
import './SearchCafe.css'
import SearchCafe from './SearchCafe'
import AllCafe from './AllCafe'

function App() {

  const [ searchedArea, setSearchedArea ] = useState('')

  const searchCafe = (area) => {
    if (area) {
      setSearchedArea(area)
    }
  }
  
  return (
    <>
      { !searchedArea ?
          <SearchCafe
            searchCafe={searchCafe}
          ></SearchCafe>:
        <>
          <h2>
              Cafestagram
          </h2>
          <AllCafe
            area={searchedArea}
          ></AllCafe>
        </>  
      }
    </>
  )
}

export default App
