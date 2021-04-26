import React from 'react'
import SignInShoe from '../../../assets/img/sign-in-shoe.png'
import SignInShoeMobile from '../../../assets/img/sign-up-mobile-show.png'
function SignIn() {
    return (
        <div className="SignIn">
            <img src={SignInShoe} alt="" className="sign-in-desktop-image"/>
            <img src={SignInShoeMobile} alt="" className="sign-in-Mobile-image"/>
            <form className="SignInForm">
                <h3>SIGN UP</h3>
                <div className="input-wrapper">
                    <label htmlFor="Email">Email</label>
                    <input type="email" value="Email"/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="Password">Password</label>
                    <input type="password" id="Password" value="........."/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="PasswordAgain">Password Again</label>
                    <input type="password" id="PasswordAgain" value="........."/>
                </div>

                <div className="checkbox-wrapper">
                    <input type="checkbox" id="sign-in-checkbox" />
                    <label for="sign-in-checkbox">Loot-Out E Bülteninden Haberdar Olmak İstiyorum</label>
                </div>


                <input type="submit" value="Sign Up" className="popup-sign-up-button"/>
            </form>
        </div>
    )
}

export default SignIn
