import React from 'react'

import PopularBrandsPicture from '../../../assets/img/popular-brands.png'
import PopularBrand1 from '../../../assets/img/popular-brand-1.png'
import PopularBrand2 from '../../../assets/img/popular-brand-2.png'
import PopularBrand3 from '../../../assets/img/popular-brand-3.png'
import PopularBrand4 from '../../../assets/img/popular-brand-4.png'
function PopularBrands() {
    return (
        <div className="popular-brands">
            <div className="popular-presentation">
                <h1>Popular Brands </h1>
                <p>/////////////////</p>
            </div>
            <img src={PopularBrandsPicture} alt="" className="popular-brands-img"/>
            <div className="mobile-mode-display">
                <div className="card">
                <div className="image-wrapper">
                <img src={PopularBrand1} alt=""/>
                </div>
                    <p>Air Jordan 1</p>
                </div>
                 <div className="card">
                 <div className="image-wrapper">
                 <img src={PopularBrand2} alt=""/>
                 </div>
                    <p>Other</p>
                </div>
                 <div className="card">
                 <div className="image-wrapper">
                 <img src={PopularBrand3} alt=""/>
                 </div>
                    <p>Air Jordan 1 Mid</p>
                </div>
                 <div className="card">
                 <div className="image-wrapper">
                 <img src={PopularBrand4} alt=""/>
                 </div>
                    <p>Yeezy</p>
                </div>
            </div>
        </div>
    )
}

export default PopularBrands
