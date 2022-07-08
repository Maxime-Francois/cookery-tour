import React from 'react'
import logo from '../assets/img/forkLogo.svg'
import '../styles/components/Nav.css'
import { Link } from 'react-router-dom';
import avatar from '../assets/img/avatar.svg'

const Nav = () => {
    return (
        <div className='nav'>
            <nav>
                <div className='contentNav'>
                    <div className="left-part">
                        <Link to="/"> <div className='logoPart'>
                            <img src={logo} alt="Logo" />
                            <h1>COOKERY TOUR</h1>
                            </div>
                         </Link>
                       
                        <div className='linkPart'>
                            <Link to="/">MAP</Link>
                            <Link to="/allRecipes">RECETTES</Link>
                        </div>
                    </div>
                    <div className='avatar'>
                        <img src={avatar} alt="Logo" />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav