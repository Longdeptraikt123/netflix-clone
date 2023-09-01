import './navbar.scss'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isShow, setIsShow] = useState(false)

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    const handleShow = () => {
        window.scrollY > 50 ? setIsShow(true) : setIsShow(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleShow)
        return () => window.removeEventListener('scroll', handleShow)
    }, [])
    return (
        <div className='navbar'>
            <div className={`container ${isShow && 'nav_black'}`}>
                <div className='left'>
                    <Link to='/' onClick={scrollToTop}>
                        <img
                            src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'
                            alt=''
                        />
                    </Link>
                </div>
                <div className='right'>
                    <div className='right_buttons'>
                        <Link to='/sign-in' className='right_button button-1'>Sign in</Link>
                        <Link to='/sign-up' className='right_button button-2'>Sign up</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Navbar