import React, { useEffect, useState } from 'react'
import Header from '../../shared/Header'
import '../../assets/css/home.css'
import SearchIcon from '../../assets/svg/search-icon.svg'
import ShoeWithChart from '../../assets/img/shoe-with-chart.png'
import DownArrow from '../../assets/svg/down-arrow.svg'
import PopularBrands from '../components/home/PopularBrands'
import HomeItemCard from '../components/home/HomeItemCard'
import SliderLeftArrow from '../../assets/svg/slide-left-arrow.svg'
import SliderRightArrow from '../../assets/svg/slide-right-arrow.svg'
import Recent1 from '../../assets/img/recent-1.png'
import Recent2 from '../../assets/img/recent-2.png'
import Recent3 from '../../assets/img/recent-3.png'
import Recent4 from '../../assets/img/recent-4.png'

import AirJordan1 from '../../assets/img/air-jordan1.png'
import AirJordan2 from '../../assets/img/air-jordan2.png'
import AirJordan3 from '../../assets/img/air-jordan3.png'
import AirJordan4 from '../../assets/img/air-jordan4.png'
import Sneakers1 from '../../assets/img/sneakers1.png'
import Sneakers2 from '../../assets/img/sneakers2.png'
import Sneakers3 from '../../assets/img/sneakers3.png'
import Sneakers4 from '../../assets/img/sneakers4.png'
import Footer from '../../shared/Footer'
import {HandleSigninPopUp} from '../../assets/js/Events/PopUp'
import SignIn from '../components/Auth/SignIn'
import Services from '../components/home/Services'
import Login from '../components/Auth/Login'
import Search from '../../shared/Search'
function Home() {

    useEffect(() => {
        HandleSigninPopUp()
    }, [])
    return (
        <div className="home">
            <div className="home-sign-in-wrapper">
                <SignIn/>
            </div>
            <div className="home-login-wrapper">
                <Login/>
            </div>

            <div className="home-search-wrapper">
                <Search/>
            </div>
            <Header/>
            <div className="home-hero">
                <div className="left">
                    <h1>HYPE <span>AND</span><br/>LIMITED</h1>
                    <p>Turkey's first sneaker stock market</p>
                    <form>
                        <div className="search-input-wrapper">
                            <input type="text" value="Search"/>
                            <img src={SearchIcon} alt="Search Icon"/>
                        </div>
                        <div className="button-wrapper">
                            <button>Buy</button>
                            <p>&</p>
                            <button>Sell</button>
                        </div>
                    </form> 
                </div>
                <div className="right">
                    <img src={ShoeWithChart} alt=""/>
                </div>
            </div>

            <div className="down-arrrow-wrapper">
                <img src={DownArrow} alt=""/>
            </div>

            <PopularBrands/>


            <div className="most-recent-item-container">
                <div className="most-recent-item-presentation">
                    <h1>Most Searched Items</h1>
                    <p>//////////</p>
                    <div className="slider-arrow" >
                        <img src={SliderLeftArrow} alt="" />
                        <img src={SliderRightArrow} alt="" />
                    </div>
                </div>
               <div className="home-card-reel recent-reel">
               <HomeItemCard img={Recent1} ItemName="Air Jordan 1 Mid" ItemPrice="145 €"/>
               <HomeItemCard img={Recent2} ItemName="Air Jordan XXXV “Paris”" ItemPrice="250 €"/>
               <HomeItemCard img={Recent3} ItemName="Yeezy QNTM" ItemPrice="300 €"/>
               <HomeItemCard img={Recent4} ItemName="Air Jordan 1 Zoom" ItemPrice="180 €"/>
            
               </div>
            </div>

            <div className="brand-item-container">
                <div className="brand-presentation">
                    <h1>Air Jordan 1</h1>
                    <p>////////////////</p>
                    <div className="slider-arrow">
                        <img src={SliderLeftArrow} alt=""/>
                        <img src={SliderRightArrow} alt=""/>
                    </div>
                </div>
               <div className="home-card-reel jordan-reel">
               <HomeItemCard img={AirJordan1} ItemName="Air Jordan 1 Mid" ItemPrice="145 €"/>
               <HomeItemCard img={AirJordan2} ItemName="Air Jordan XXXV “Paris”" ItemPrice="250 €"/>
               <HomeItemCard img={AirJordan3} ItemName="Yeezy QNTM" ItemPrice="300 €"/>
               <HomeItemCard img={AirJordan4} ItemName="Air Jordan 1 Zoom" ItemPrice="180 €"/>
            
               </div>
            </div>


            <Services/>

            <div className="sneaker-news-container">
            <div className="brand-presentation">
                    <h1>Sneaker news</h1>
                    <p>////////////////</p>
                    <div className="slider-arrow">
                        <img src={SliderLeftArrow} alt=""/>
                        <img src={SliderRightArrow} alt=""/>
                    </div>
                </div>
               <div className="home-card-reel jordan-reel">
               <HomeItemCard img={Sneakers1} ItemName="Air Jordan 1 Mid" ItemPrice="145 €"/>
               <HomeItemCard img={Sneakers2} ItemName="Air Jordan XXXV “Paris”" ItemPrice="250 €"/>
               <HomeItemCard img={Sneakers3} ItemName="Yeezy QNTM" ItemPrice="300 €"/>
               <HomeItemCard img={Sneakers4} ItemName="Air Jordan 1 Zoom" ItemPrice="180 €"/>
            
               </div>
            </div>

            
            {/* footer */}
            <div className="footer-container">
            <Footer/>
            </div>

        </div>
    )
}

export default Home
