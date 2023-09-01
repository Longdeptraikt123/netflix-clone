import React, { useRef, useEffect } from "react";
import Image from '../img/netflix-bg.jpeg'
import './sign-up.scss'

const SignUp = () => {
    const ref = useRef(null)

    useEffect(() => {
        ref.current.focus();
    }, [])
    return (
        <div className="sign-up-wrapper">
            <img src={Image} alt="#" />
            <div className="sign-up">
                <form>
                    <div className="sign-up-header">
                        <h1>
                            Unlimited movies, TV shows, and more.
                        </h1>
                        <span>
                            Watch anywhere. Cancel anytime.
                        </span>
                        <span>
                            Ready to watch? Enter your email to create or restart your membership.
                        </span>
                    </div>
                    <div className="sign-up-form">
                        <div className="sign-up-input">
                            <input
                                ref={ref}
                                required='required'
                                spellCheck='false'
                                type='email'
                                placeholder=" "
                            />
                            <label>Email</label>
                        </div>
                        <a href="/" className="sign-up-btn">Get Started</a>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SignUp