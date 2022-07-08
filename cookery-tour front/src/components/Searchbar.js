import React from 'react'
import '../styles/components/Searchbar.css'
import searchLogo from '../assets/img/searchLogo.svg'
import filterLogo from '../assets/img/filter.svg'

const Searchbar = () => {
    return (
        <div className="searchbar">
            <form class="form">
                <button id="clear" class="clear-results"><img src={searchLogo} alt="Logo" /></button>
                <input id="search" type="text" class="input" placeholder="Rechercher..." />
                <button id="filter"><img src={filterLogo} alt="Logo filtre" /></button>


                <button id="clear" class="clear-results"><img src={searchLogo} alt="search logo" /></button>
            </form>

        </div>
    )
}

export default Searchbar