import React from "react";
import './footer.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_container">
                <div className="footer_icons">
                    <a href="#s"><FacebookIcon className="footer_icon" /></a>
                    <a href="#s"><InstagramIcon className="footer_icon" /></a>
                    <a href="#s"><TwitterIcon className="footer_icon" /></a>
                    <a href="#s"><YouTubeIcon className="footer_icon" /></a>
                </div>
                <div className="footer_text">
                    <a href="#s">Help Center</a>
                    <a href="#s">Jobs</a>
                    <a href="#s">Cookie Creferences</a>
                </div>
                <div className="footer_text">
                    <a href="#s">Gift Card</a>
                    <a href="#s">Terms of Use</a>
                    <a href="#s">Corporate Information</a>
                </div>
                <div className="footer_text">
                    <a href="#s">Media Center</a>
                    <a href="#s">Media</a>
                    <a href="#s">Contact Us</a>
                </div>
            </div>
        </div>
    )
}
export default Footer
