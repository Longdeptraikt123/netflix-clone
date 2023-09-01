import './sign-in.scss'
import React, { useEffect, useRef } from "react";
import { BsArrowLeft } from 'react-icons/bs';
import Image from '../img/netflix-bg.jpeg'
const SignIn = () => {
    const ref = useRef(null)
    
    useEffect(() => {
        ref.current.focus();
    }, [])

    return (
        <div
            style={{
                backgroundImage: `url(${Image})`,
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                color: '#fff'
            }}
            className='sign-in-wrapper'>
            <div className='back-to-home'>
                <a href='/'>Back to home</a>
                <BsArrowLeft className='arrow' />

            </div>
            <div className="sign-in">
                <form>
                    <h1>Sign in</h1>
                    <div className="user-box">
                        <input
                            ref={ref}
                            required='required'
                            spellCheck='false'
                            type='email'
                            placeholder=" "

                        />
                        <label>Your's Email</label>
                    </div>
                    <div className="user-box">
                        <input
                            placeholder=" "
                            required='required'
                            type='password'
                        />
                        <label>Password</label>
                    </div>
                    <a className="sign-in-btn" href="#1">
                        Sign in
                    </a>
                    <div className='sign-in-services'
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                        <input
                            type='checkbox'
                        />
                        <label>
                            Remember me
                        </label>
                        <a href="#ds">
                            Do you need help ?
                        </a>
                    </div>
                    <div className='sign-up'>
                        <div className='sign-up-box'>
                            <span>New to Netflix?</span>
                            <a href='/sign-up'>Sign up now</a>
                        </div>
                        <div className='sign-up-terms'>
                            <span>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SignIn