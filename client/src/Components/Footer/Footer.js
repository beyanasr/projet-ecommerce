import React from "react";
import "../../App.css";

function Footer() {
    return (
       
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col-1">
                        <h3>Visit Our Shop </h3>
                        <p>Visit our shop and enjoy the variety of our products.</p>
                    </div>
                    <div className="footer-col-2">
                        <h3>Useful Links </h3>
                        <ul>
                            <li>Coupons</li>
                            <li>Return Policy</li>
                        </ul>
                    </div>
                    <div className="footer-col-3">
                        <h3>Follow us </h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            
                        </ul>
                    </div>
                </div>

                <span>
                    <p className="copyright"> Copyright © Village Natural Beauty 2021  </p>
                </span>
            </div>
        </div>
       
        
    );
}

export default Footer;
