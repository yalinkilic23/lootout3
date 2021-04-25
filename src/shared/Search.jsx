import React from 'react'
import SearchIcon from '../assets/svg/search-icon.svg'
import ResultPic from '../assets/img/search-result-box.png'
function Search() {
    return (
        <div className="search"> 
            <form>
                <div className="input-container">
                    <label htmlFor="home-search">Search Sneaker</label>
                    <div className="input-wrapper">
                        <input type="text" placeholder="Serach" id="home-search"/>
                        <img src={SearchIcon} alt=""/>
                    </div>
                </div>
            </form>
            <div className="results">
                <div className="result-box">
                    <div className="left-area">
                            <img src={ResultPic} alt=""/>
                         
                    </div>
                    <div className="result-presentation">
                   <div className="left">
                    <p className="product-title">Air Jordan 1 Mid</p>
                    <p className="product-information">Last Sale: <span>1250₺</span></p>
                   </div>
                   <div className="right">
                       <p className="product-price">2 000 €</p>
                   </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
