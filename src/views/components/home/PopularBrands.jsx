import React from 'react'
import Slash from '../../../assets/img/slash.png'
import PopularBrandsPicture from '../../../assets/img/popular-brands.png'
function PopularBrands() {
    return (
        <div className="popular-brands">
            <div className="popular-presentation">
                <h1>Popular Brands </h1>
                <p>/////////////////</p>
            </div>
            <img src={PopularBrandsPicture} alt="" className="popular-brands-img"/>
        </div>
    )
}

export default PopularBrands
