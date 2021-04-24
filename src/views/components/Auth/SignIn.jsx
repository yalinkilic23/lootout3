import React from 'react'
import SignInShoe from '../../../assets/img/sign-in-shoe.png'
function SignIn() {
    return (
        <div className="SignIn">
            <img src={SignInShoe} alt=""/>
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


                <input type="submit" value="Sign Up" className="popup-sign-in-button"/>
            </form>
        </div>
    )
}

export default SignIn
