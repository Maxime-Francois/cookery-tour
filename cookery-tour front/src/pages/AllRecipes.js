import React from 'react'
import Searchbar from '../components/Searchbar'
import '../styles/pages/AllRecipes.css'

const AllRecpie = () => {
  return (
    <div className='allRecipe'>
        <Searchbar/>
        <h1>TOUTES LES RECETTES</h1>
    </div>
  )
}

export default AllRecpie