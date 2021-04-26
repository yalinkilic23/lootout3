import React from 'react'
import CloseIcon from '../assets/svg/close.svg'
import SideBarBackground from '../assets/svg/SideBarBackground.svg'
import SideBarSearch from '../assets/svg/SideBarSearch.svg'
import SidebarLogo from '../assets/img/sidebar-logo.png'
function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="sidebar-top">
                <div className="left-side">
                    <img src={SidebarLogo} alt=""/>
                </div>
                <div className="right-side">
                <img src={SideBarSearch} alt=""/>
                <img src={CloseIcon} alt=""  onClick={e=>{
                    document.querySelector(".Sidebar").classList.remove("active")
                }}/>
                </div>
            </div>
            <div className="sidebar-body">
                <div className="auth-buttons">
                <button className="sign-in-button">sign up</button>
                <button className="login-option ">sign in</button>
                </div>
                <nav>
                    <li>
                        Store
                    </li>
                    <li>
                        My Account
                    </li>
                    <li>
                        About Us
                    </li>
                    <li>
                        Customer Care
                    </li>
                </nav>

                <button className="logout-button">log out</button>
            </div>
        </div>
    )
}

export default Sidebar
