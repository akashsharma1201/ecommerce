import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi"
import { AiOutlineMenu } from "react-icons/ai"
import { RxCross2 } from "react-icons/rx";
import { useSelector } from 'react-redux';
import "./Navbar.css"

const Navbar = () => {

    let [menuToggle, setMenuToggle] = useState(false)
    let itemList = useSelector((state) => state.cartReducer.cartsList);

    return (
        <div className='navbar-wrapper'>
            <nav>
                <div className='logo'><img alt='logo' width={50} src='https://png.pngtree.com/png-clipart/20210311/original/pngtree-e-commerce-business-owners-better-understand-the-financial-side-of-their-png-image_6009252.png' /></div>
                {/* <div className="menu-box mobile" > */}
                <div className="menu-box mobile" id={menuToggle ? "showMenu" : "hideMenu"}>
                    <RxCross2 className='d-md-none cross-icon' onClick={() => { setMenuToggle(!menuToggle) }} />
                    <ul className='menu'>
                        <li className="menu-item"><NavLink to="/">Home</NavLink></li>
                        <li className='menu-item'><NavLink to="/allproducts">All Products</NavLink></li>
                        <li className='menu-item'><NavLink to='/men'>Men</NavLink></li>
                        <li className='menu-item'><NavLink to="/women">Women</NavLink></li>
                        <li className='menu-item'><NavLink to="/electronics">Electronics</NavLink></li>
                    </ul>
                </div>

                <div className='cart-box'>
                    <NavLink to="/cart">
                        <div className='d-flex cart'>
                            <span>Cart</span>
                            <div>
                                <FiShoppingCart />
                                <span className='cart-count'>{itemList.length}</span>
                            </div>
                        </div>
                        {/* <button type="button" class="btn btn-primary position-relative">
                            Cart <FiShoppingCart />
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {itemList.length}
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </button> */}
                    </NavLink>
                </div>
                <AiOutlineMenu className='d-md-none' onClick={() => setMenuToggle(!menuToggle)} />
            </nav>
        </div>
    )
}

export default Navbar