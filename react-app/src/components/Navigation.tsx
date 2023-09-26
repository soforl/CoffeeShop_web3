import React, {useState} from "react";
import 'C:\\Users\\Sofia\\WebstormProjects\\CofeeShop\\react-app\\src\\styles.css';
import {Link} from "react-router-dom";

export function Navigation() {
    // let [cartOpen, setCartOpen] = useState(false)
    return(
            <nav className="headerSt">
                <div className="left">
                    <img className="header__logo"
                         src={require("C:\\Users\\Sofia\\WebstormProjects\\CofeeShop\\react-app\\src\\pages\\images_react\\logo.png")}
                         alt="logo"/>
                    <Link to="/" className="header__title">CO&GO</Link>
                </div>
                <nav className="header-nav right">
                    <Link to="/" className="nav__home">HOME</Link>
                    <Link to="/menu" className="nav__menu">MENU</Link>
                    {/*<Link to="/cart" className="nav__home">CART</Link>*/}
                    <Link to="/about" className="nav__about">ABOUT US</Link>
                    <Link to="/user" className="nav__about">SIGNUP</Link>
                    <Link to="/login" className="nav__menu">LOGIN</Link>
                </nav>
            </nav>
    )
}