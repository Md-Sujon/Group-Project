import React from 'react';
import shop from '../../../Image/Shopp.jpg'
import './Header.css'
import Navber from '../Navber/Navber';
import Typewriter from 'typewriter-effect'


const Header = () => {
    return (
        <div>
            <Navber></Navber>
            <section className="home" id="home">
            <div className="max-width">
                <div className="home-content">
                    <div className="column left">
                        <div className="text-1">Best </div>
                        <div className="text-2">Online Shop</div>
                        <div className="text-3"> In Bangladesh<span> <Typewriter
                            onInit={(typewriter) => {typewriter.typeString("delivery charge").pauseFor(2000).deleteAll().typeString("Delivery Charge Free").start();}}/>
                         </span>
                             <button type="button" class="btn btn-outline-danger">Shop</button> 
                        </div>
                    </div>
                    <div className="column right">
                      <img src={shop} alt="" />
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Header;