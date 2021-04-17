import React from 'react';
import './FooterStyle.css';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-wrap">
                <h1>Pizza</h1>
                <div className="footer-social-icons">
                    <a href="https://www.fb.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
                    <a href="https://www.youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FaTwitter /></a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                </div>
            </div>

        </div>
    )
}

export default Footer;
