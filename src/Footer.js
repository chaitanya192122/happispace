 import React from "react";
 import logo from './logo.png';
 function Footer(){
    return(
        <footer className="p-5">  
            <div className="pt-3 pb-5 mt-5">      
            <h1>footer</h1>
            </div>
            <div className="col-12 row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <a><img src={logo}/></a>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h2>about</h2>
                    <p>hs-Happi space which is lockated in lakkavaram</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h2>Navigate Site</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">about</a></li>
                        <li><a href="#">book</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">contact</a></li>
                        <li><a href="#">refund policy</a></li>
                        <li><a href="#">location</a></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h2>Social Media</h2>

                    <ul>
                        <li><a href="#"><i className="bi bi-instagram"></i>  instagram</a></li>
                        <li><a href="#"><i class="bi bi-youtube"></i>  youtube</a></li>
                        <li><a href="#"><i class="bi bi-whatsapp"></i>  whatsapp</a></li>
                        <li><a href="#"><i class="bi bi-phone"></i>  phone</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <p className="text-center p-5">copyright of @2026</p>
            </div>
        </footer>
    )
 }
 export default Footer;