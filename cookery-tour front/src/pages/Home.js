import React from 'react'
import Searchbar from '../components/Searchbar'
import '../styles/pages/Home.css'
import Map from '../components/Map'

const Home = () => {
  return (
    <div className='home'>
      <Map/>
      <Searchbar/>
    </div>
  )
}

export default Home