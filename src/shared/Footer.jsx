import React from 'react'
import FooterLogo from '../assets/img/small-logo.png'
import facebook from '../assets/img/Facebook.png'
import google from '../assets/img/google.png'
import youtube from '../assets/img/Twitter.png'
import twitter from '../assets/img/YouTube.png'
import DiscoverCard from '../assets/img/Discover.png'
import MasterCard from '../assets/img/MasterCard.png'
import PayPal from '../assets/img/PayPal.png'
import visaCard from '../assets/img/Visa.png'


function Footer() {
    return (
        <div className="Footer">
            <div className="footer-top">
                <span className="left-line"></span>
                <img src={FooterLogo} alt=""/>
                <span className="right-line"></span>
            </div>

            <div className="footer-body">
                <ul className="col1">
                    <li className="main-footer-heading">
                        Main Menu
                    </li>
                    <li>
                    Home
                    </li>  
                    <li>
                    Our Services
                    </li>
                      <li>
                      Our Products
                    </li>
                      <li>
                      About Us
                    </li>
                    <li>
                    Contact Us
                    </li>
                </ul>
                <ul className="col2">
                    <li className="main-footer-heading">
                    Knowledge Base
                    </li>
                    <li>
                    Delivery
                    </li>  
                    <li>
                    Returns
                    </li>
                      <li>
                      Services
                    </li>
                      <li>
                      Discount
                    </li>
                    <li>
                    Special Offer
                    </li>
                </ul>
                <ul className="col3">
                    <li className="main-footer-heading">
                    Useful Links
                    </li>
                    <li>
                    Site Map
                    </li>  
                    <li>
                    Search
                    </li>
                      <li>
                      Advanced Search
                    </li>
                      <li>
                      Suppliers
                    </li>
                    <li>
                    FAQ
                    </li>
                </ul>
                <ul className="col4">
                    <li className="main-footer-heading">
                    Contact Us
                    </li>
                    <li>
                    25 Astor Pl, NY 10003, USA
                    </li>  
                    <li>
                    +1 212-982-4589
                    </li>
                    <li>
                    dailyshop@gmail.com
                    </li>

                      <li className="footer-icons">
                      

                      <img src={facebook} alt=""/>
                      <img src={google} alt=""/>
                      <img src={youtube} alt=""/>
                      <img src={twitter} alt=""/>
                    </li>
                      <li className="footer-icons">
                      <img src={DiscoverCard} alt=""/>
                      <img src={MasterCard} alt=""/>
                      <img src={PayPal} alt=""/>
                      <img src={visaCard} alt=""/>
                    </li>
                  
                </ul>
            </div>
        </div>
    )
}

export default Footer
