import React from 'react'
import Sneaker1 from '../../../assets/img/sneaker-add-product.png'
function Sneaker() {
    return (
        <div className="Sneaker">
            <img src={Sneaker1} alt=""/>
            <div className="presentation">
                <h1>Air Jordan 1 Mid</h1>
                <small>Last Sale: <span>1250₺</span></small>
            </div>
        </div>
    )
}

export default Sneaker
