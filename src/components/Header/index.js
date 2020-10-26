import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import '../../scss/blocks/Header.scss'
import '../../scss/blocks/nav-menu.scss'
const Header = () => {
    return ( 
        <header className="header">
            <div className="header__logo">
                logo
            </div>
            <nav className="header__menu">
                <ul className="nav-menu">
                    <li className="nav-menu__item">
                        <Link to="/Home/upload" className="nav-menu__link" >
                           <FontAwesomeIcon icon={ faUpload } className="nav-menu__icon"/>
                            Upload</Link>
                    </li>
                    <li className="nav-menu__item">
                        <a href="#ola" className="nav-menu__link nav-menu__link--background">
                            <FontAwesomeIcon icon={ faUserCircle } className="nav-menu__icon"/>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
    
}
 
export default Header;