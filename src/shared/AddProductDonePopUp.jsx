import React from 'react'
import CloseIcon from '../assets/img/close-icon.png'
import ShoePopUp from '../assets/img/sneakers pop-up.png'
function AddProductDonePopUp() {
    return (
        <div className="AddProductDonePopUp">
            <div className="image-wrapper">
            <img src={CloseIcon} alt="" className="close-icon-add-product-popup"/>
            </div>
            <div className="image-wrapper">
            <img src={ShoePopUp} alt="" className="shoe-product-done-popup"/>
            </div>
            <h2>Item Successfully Qued</h2>
            <p>We Are Going To Pre-Check Your Item According To  Appearence, We Are Going To Notify You When It Displays, Please Remove Your Item If It Would Sold Via Different Way.</p>

            <div className="button-wrapper">
                <button>ADD ANOTHER ONE</button>
                <button>GO TO HOMEPAGE</button>
            </div>
        </div>
    )
}

export default AddProductDonePopUp
