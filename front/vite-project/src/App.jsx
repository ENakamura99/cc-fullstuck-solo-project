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
      <h2 className="header">Cafestagram</h2>
      <br></br>
      <br></br>
      { !searchedArea ?
          <SearchCafe
            searchCafe={searchCafe}
          ></SearchCafe>:
        <>
          <AllCafe
            area={searchedArea}
          ></AllCafe>
        </>  
      }
    </>
  )
}

export default App
