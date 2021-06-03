import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className = 'footer'>
            <ul className="footer-content">
                <li className="footer-item"><a href="/home">Home</a></li>
                <li className="footer-item"><a href="#">Product</a></li>
                <li className="footer-item"><a href="#">About Us</a></li>
                <li className="footer-item"><a href="#">Contact</a></li>
            </ul>
            <div className="copyright">
                © 2021, All Rights Reserved.
            </div>
        </section>
    );
};

export default Footer;