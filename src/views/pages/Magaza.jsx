import React,{useEffect} from 'react'
import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import Login from '../components/Auth/Login'
import Search from '../../shared/Search'
import Sidebar from '../../shared/Sidebar'
import SignIn from '../components/Auth/SignIn'
import {HandleSigninPopUp} from '../../assets/js/Events/PopUp'
import '../../assets/css/magaza.css'
import ServiceCard from '../components/home/ServiceCard'
import HomeItemCard from '../components/home/HomeItemCard'
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
function Magaza() {
    useEffect(() => {
        HandleSigninPopUp()
    }, [])
    return (
        <div className="Magaza">
               <Sidebar/>
            <div className="home-sign-in-wrapper">
                <SignIn/>
            </div>
            <div className="home-login-wrapper">
                <Login />
            </div>

            <div className="home-search-wrapper">
                <Search/>
            </div>

            <Header/>

            <div className="magaza-boxes">
                <HomeItemCard img={Recent1} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
                <HomeItemCard img={Recent2} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
                <HomeItemCard img={Recent3} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
                <HomeItemCard img={Recent4} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
                <HomeItemCard img={AirJordan1} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
                <HomeItemCard img={AirJordan2} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
                <HomeItemCard img={AirJordan3} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
                <HomeItemCard img={AirJordan4} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
                <HomeItemCard img={Sneakers1} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
                <HomeItemCard img={Sneakers2} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
                <HomeItemCard img={Sneakers3} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
                <HomeItemCard img={Sneakers4} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
                <HomeItemCard img={Recent3} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
                <HomeItemCard img={Recent4} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
                <HomeItemCard img={AirJordan4} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
                <HomeItemCard img={Sneakers3} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
                <HomeItemCard img={Sneakers4} ItemName="Air Jordan 1 Mid" ItemPrice="250 €"/>
            </div>


            <Footer/>
        </div>
    )
}

export default Magaza
