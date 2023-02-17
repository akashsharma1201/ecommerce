import React from 'react'
import { Link } from 'react-router-dom';
import {AiFillLinkedin ,AiFillGithub ,AiOutlineMail} from "react-icons/ai";
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer-wrapper py-5'>
            <div className='container '>
                <div className='row'>
                    <div className='col-lg-3 mt-3'>
                        <h2>Product</h2>
                        <ul>
                            <li><Link to="/allproduct"> All Products</Link></li>
                            <li><Link to="/men"> Men Collection</Link></li>
                            <li><Link to="/women"> Women Collection</Link></li>
                            <li><Link to="/electronics"> Electronics</Link></li>
                        </ul>
                    </div>
                    <div className='col-lg-3  mt-3'>
                        <h2>Support</h2>
                        <ul>
                            <li>Help</li>
                            <li>Customer Service</li>
                            <li>Shipping</li>
                            <li>Order Tracker</li>
                            <li>Returns & Exchanges</li>
                        </ul>
                    </div>
                    <div className='col-lg-3  mt-3'>
                        <h2>Company Info</h2>
                        <ul>
                            <li>About Us</li>
                            <li>Entity Details</li>
                            <li>Careers</li>
                            <li>Company Apps</li>
                        </ul>
                    </div>
                    <div className='col-lg-3 social-link  mt-3'>
                        <div className='d-flex'>
                            <AiFillLinkedin />
                            <AiFillGithub  className='mx-3'/>
                            <AiOutlineMail />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer