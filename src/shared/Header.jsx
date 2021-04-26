import React from 'react'
import Logo from '../assets/img/logo.png'
import SearchIcon from '../assets/svg/search-icon.svg'
import BurgerIcon from '../assets/svg/BurgerIcon.svg'
import '../assets/css/header.css'
function Header() {
    
    return (
        <div className="header">
            <img src={Logo} alt="logo" />
            <div className="right-side">
                <nav className="header-list">
                    <li>
                        Sneakers
                    </li>
                    <li>
                        Blog
                    </li>
                    <li>
                        About Us
                    </li>
                    <li className="login-option">
                    Sıgn In
                    </li>
                </nav>

                <img src={SearchIcon} alt="Search Icon" className="search-header-icon"/>
                <img src={BurgerIcon} alt="burger Icon" className="burger-header-icon" onClick={e=>{
                    document.querySelector(".Sidebar").classList.add("active")
                }}/>



                <button className="sign-in-button">Sign Up</button>
            </div>
        </div>
    )
}

export default Header
