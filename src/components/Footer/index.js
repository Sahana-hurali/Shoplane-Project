import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
    <div className="footer">
        <div className="footer-content">

            <div className="footer-section first">
                <h3 className="title">ONLINE STORE</h3>
                <div className="title-content">
                    <ul>
                    <a href="#"><li>MEN CLOTHING</li></a>
                    <a href="#"><li>WOMEN CLOTHING</li> </a>
                    <a href="#"><li>MEN ACCESSORIES</li></a>
                    <a href="#"><li>WOMEN ACCESSORIES</li></a>
                    </ul>
                </div>
            </div>

            <div className="footer-section second">
            <h3 className="title">HELPFUL LINKS</h3>
                <div className="title-content">
                    <ul>
                    <a href="#"><li>HOME</li></a>
                    <a href="#"><li>ABOUT</li></a>
                    <a href="#"><li>CONTACT</li></a>
                    </ul>
                </div>
            </div>

            <div className="footer-section third">
            <h3 className="title">PATNERS</h3>
                <div className="title-content">
                    <ul>
                    <a href="#"><li>ZARA</li></a>
                    <a href="#"><li>PANTALOONS</li></a>
                    <a href="#"><li>LEVIS</li></a>
                    <a href="#"><li>UCB</li></a>
                    <a href="#"><li>+ MANY MORE</li></a>
                    </ul>
                </div>
            </div>
            
            <div className="footer-section fourth">
                <h3 className="connect">ADDRESS</h3>
                <p>
                BUILDING 101 CENTRAL AVENUE LA - 902722 UNITED STATES
                </p>
            </div>
            
            
        </div>        
    </div>);   

}

export default Footer;