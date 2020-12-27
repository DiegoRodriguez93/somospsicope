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
        color:'#e4197c'
      };

    const isActiveInMobile = {
        backgroundColor: "rgba(255, 255, 255, 0.5)"
      };

    return (
        <header>
            <div className="container-fluid">
                <div className="row menu-nowrap">
                    <div className="col-lg-12 sm-8" style={{textAlign:'center'}}>
                        <img src="/images/logo.png" className="menu-logo-img" alt="logo somospsicope"/>
                    </div>

                    <div className="col-lg-12 menu ordenador" style={{textAlign:'center'}}>
                        <NavLink exact className="menu-link" activeStyle={isActive} to="/">Inicio</NavLink>
                        <NavLink className="menu-link" activeStyle={isActive} to="/quienes-somos">Quiénes somos</NavLink>
                        <NavLink className="menu-link" activeStyle={isActive} to="/capacitaciones">Capacitaciones</NavLink>
                        <NavLink className="menu-link" activeStyle={isActive} to="/supervisiones">Supervisiones</NavLink>
                        <NavLink className="menu-link" activeStyle={isActive} to="/materiales">Materiales</NavLink>
                        <NavLink className="menu-link" activeStyle={isActive} to="/galeria-de-fotos">Galería de fotos</NavLink>
                    </div>
                    <div className="col-sm-4 mobile">
                        <img src={ham} onClick={()=>{setMobileMenuVisibility('block')}} alt="ham icon" className="ham-icon" />
                       
                    </div>
                </div>
            </div>

            <div className="container-fluid mobile-menu" style={{display:mobileMenuVisibility}}>
                <div className="row">
                    <div className="col-9"></div>
                    <div className="col-3">

                        <img src={hamX} onClick={handleDisplayNone} alt="ham icon" className="ham-icon" />
                    </div>
                    <div className="col-12">
                        <NavLink exact onClick={handleDisplayNone} activeStyle={isActiveInMobile} className="menu-link-mobile" to="/">Inicio</NavLink>
                        <NavLink onClick={handleDisplayNone} activeStyle={isActiveInMobile} className="menu-link-mobile" to="/quienes-somos">Quiénes somos</NavLink>
                        <NavLink onClick={handleDisplayNone} activeStyle={isActiveInMobile} className="menu-link-mobile" to="/capacitaciones">Capacitaciones</NavLink>
                        <NavLink onClick={handleDisplayNone} activeStyle={isActiveInMobile} className="menu-link-mobile" to="/supervisiones">Supervisiones</NavLink>
                        <NavLink onClick={handleDisplayNone} activeStyle={isActiveInMobile} className="menu-link-mobile" to="/materiales">Materiales</NavLink>
                        <NavLink onClick={handleDisplayNone} activeStyle={isActiveInMobile} className="menu-link-mobile menu-link-mobile-border-bottom" to="/galeria-de-fotos">Galería de fotos</NavLink>
                    </div>
                </div>
            </div>

        </header>
    )

}

export default Header;