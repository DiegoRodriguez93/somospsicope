import React, { useState } from 'react';
import ham from './ham.png';
import hamX from './ham-x.png';
import { NavLink } from 'react-router-dom'

const Header = () => {

    const [ mobileMenuVisibility, setMobileMenuVisibility ] = useState('none');

    const handleDisplayNone = () => {
        setMobileMenuVisibility('none');
    }

    const isActive = {
        textDecoration:'underline'
      };

    const isActiveInMobile = {
        textDecoration:'line-through'
      };

    return (
        <header>
            <div className="container">
                <div className="row" style={{flexWrap: 'nowrap'}}>
                    <div className="col-lg-4 sm-6">
                        <h1>PaellasTo<br/>GoMiami</h1>
                    </div>
                    <nav className="col-lg-4 menu ordenador">
                        <NavLink exact className="menu-link" activeStyle={isActive} to="/">HOME</NavLink>
                        <NavLink className="menu-link" activeStyle={isActive} to="/menu">MENU</NavLink>
                        <NavLink className="menu-link" activeStyle={isActive} to="/chef">CHEF</NavLink>
                        <NavLink className="menu-link" activeStyle={isActive} to="/about">ABOUT</NavLink>
                        <NavLink className="menu-link" activeStyle={isActive} to="/contact">CONTACT</NavLink>
                    </nav>
                    <div className="col-sm-6 mobile">
                        <img src={ham} onClick={()=>{setMobileMenuVisibility('block')}} className="ham-icon" />
                    </div>
                </div>
            </div>

            <div className="container-fluid mobile-menu" style={{display:mobileMenuVisibility}}>
                <div className="row">
                    <div className="col-9"></div>
                    <div className="col-3">
                        <img src={hamX} onClick={handleDisplayNone} className="ham-icon" />
                    </div>
                    <div className="col-12">
                        <NavLink exact onClick={handleDisplayNone} activeStyle={isActiveInMobile} className="menu-link-mobile" to="/">HOME</NavLink>
                        <NavLink onClick={handleDisplayNone} activeStyle={isActiveInMobile} className="menu-link-mobile" to="/menu">MENU</NavLink>
                        <NavLink onClick={handleDisplayNone} activeStyle={isActiveInMobile} className="menu-link-mobile" to="/chef">CHEF</NavLink>
                        <NavLink onClick={handleDisplayNone} activeStyle={isActiveInMobile} className="menu-link-mobile" to="/about">ABOUT</NavLink>
                        <NavLink onClick={handleDisplayNone} activeStyle={isActiveInMobile} className="menu-link-mobile" to="/contact">CONTACT</NavLink>
                    </div>
                </div>
            </div>

        </header>
    )

}

export default Header;