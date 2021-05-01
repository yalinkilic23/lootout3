import React,{useEffect} from 'react'
import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import Login from '../components/Auth/Login'
import Search from '../../shared/Search'
import Sidebar from '../../shared/Sidebar'
import SignIn from '../components/Auth/SignIn'
import '../../assets/css/AddProduct.css'
import {HandleSigninPopUp} from '../../assets/js/Events/PopUp'
import DownArrow from '../../assets/svg/down-arrow-add-product.svg'
import UpArrow from '../../assets/svg/up-arrow-add-product.svg'
import InfoIcon from '../../assets/svg/info-icon.svg'
import AddProductBox from '../../assets/img/add-product-rect.png'
import AddProductBoxBorder from '../../assets/img/add-product-rect-border.png'
import Sneaker from '../components/AddProduct/Sneaker'
import AddProductShoe from '../../assets/img/add-product-shoe.png'
import AddProductBoxPic from '../../assets/img/add-product-box.png'
import AddProductDonePopUp from '../../shared/AddProductDonePopUp'
import { AddProductEvents } from '../../assets/js/Events/AddProduct'
function AddProduct() {
    useEffect(() => {
        HandleSigninPopUp()
        AddProductEvents()
    }, [])
    return (
        <div className="AddProduct">
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
            
            <AddProductDonePopUp/>
            

            <Header/>

            <div className="add-product-body">
                <div className="main-heading">
                <h1>ADD PRODUCT</h1>
                <p>////////////////////////////</p>
                </div>
            </div>

            <div className="add-product-area">
                <form className="add-product-pure-form">
                <div className="add-product-form-fields">
                    <div className="input-wrapper">
                        <label htmlFor="">SELECT SNEAKER////////</label>
                        <div className="drop-down">
                        Choose Sneaker Model
                        <div className="icons-wrapper" onClick={e=>{
                            document.querySelector(".drop-down-content").classList.toggle("active")
                        }}>
                            <img src={UpArrow} alt=""/>
                            <img src={DownArrow} alt=""/> 
                        </div>

                        <div className="drop-down-content">
                            <Sneaker/>
                            <Sneaker/>
                            <Sneaker/>
                        </div>
                        </div>
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="">SELECT SIZE////////</label>
                        <div className="drop-down">
                        Choose Size
                        <div className="icons-wrapper">
                            <img src={UpArrow} alt=""/>
                            <img src={DownArrow} alt=""/>
                            
                        </div>
                        </div>
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="">OFFERS////////</label>
                        <div className="drop-down">
                        Open
                        <div className="icons-wrapper">
                            <img src={UpArrow} alt=""/>
                            <img src={DownArrow} alt=""/>
                            
                        </div>
                        </div>
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="">PRICE YOU ASK////////</label>
                       <input type="text" value="Ask Price"/>
                    </div>

                    <input type="submit" value="ADD PRODUCT" className="submit-button"/>
                </div>
                <div className="add-product-form-media">
                    <div className="main-heading">
                    <h1>ADD PRODUCT</h1>
                    <p>/////////</p>
                    </div>
                        <div className="boxes">
                            <label className="box-wrapper">
                               <div className="box">
                               <div className="image-wrapper">
                                    <img src={AddProductShoe} alt=""/>
                                </div>
                               
                               </div>
                               <p>APPEARANCE</p>
                            </label>

                            <label className="box-wrapper">
                               <div className="box">
                               <div className="image-wrapper">
                                    <img src={AddProductBoxPic} alt=""/>
                                </div>
                                
                               </div>
                               <p>Box condıtıon <span>(ıf necessery)</span></p>
                            </label>

                        </div>
                    <div className="info-icon-wrapper">
                        <img src={InfoIcon} alt=""/>
                        <img src={DownArrow} alt=""/>
                    </div>

                    <div className="info-wrapper">
                            <div className="info-wrapper-content">
                                <img src={AddProductBox} alt=""/>
                                <img src={AddProductBoxBorder} alt=""/>
                                <div className="presentation">
                                    <p>We Are Going To Pre-Legit Check Your Shoe Due To Appearance Before Adding It To Our Inventory Please Be Sure That Your Pictures Are Clear And Not Blurred. If You Think Your Box Has Some Major/Minor Damages Pelase Upload Its Picture And Let Us To Decide If They Would Pass Our Quality Control Test or Not.</p>
                                </div>
                            </div>
                        <div className="button-wrapper">
                            <button>
                            PRE-LEGIT
                            </button>
                            <p>////////////////</p>
                        </div>
                    </div>
                </div>

                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default AddProduct
