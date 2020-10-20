import React from 'react'
import '../../scss/blocks/Header.scss'
const Header = () => {
    return ( 
        <header className="header">
            <div className="header__logo">
                logo
            </div>
            <nav className="header__menu">
                <ul className="nav-menu">
                    <li className="nav-menu__item">
                        <a href="#">Upload</a>
                    </li>
                    <li className="nav-menu__item">
                        <a href="#">User</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
    
}
 
export default Header;