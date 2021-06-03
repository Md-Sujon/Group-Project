import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className = 'footer'>
            <ul className="footer-content">
                <li className="footer-item">Item1</li>
                <li className="footer-item">Item2</li>
                <li className="footer-item">Item3</li>
                <li className="footer-item">Item4</li>
            </ul>
            <div className="copyright">
                2021, All Rights Reserved.
            </div>
        </section>
    );
};

export default Footer;