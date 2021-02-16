import React from 'react';
import { redirect } from './../../handler/redirect';

const Footer = () => {

    return (
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 contenedor-de-lineas contenedor-de-lineas-verde"></div>
                </div>
                <div className="row zona-celeste">

                    <div className="container">
                        <div className="row">
                        <div className="col-lg-4 sm-12 left-side">
                            <h4>Zona norte, Gran Buenos Aires.</h4>
                            <h4>info@somospsicope.com</h4>
                            <img src="/images/iconos/instagram.png" onClick={()=>redirect('https://www.instagram.com/somospsicope/?hl=es-la')} className="icon-footer" alt="instragram"/>
                            <img src="/images/iconos/facebook.png" onClick={()=>redirect('https://www.facebook.com/somospsicope/')} className="icon-footer" alt="facebook"/>
                            <img src="/images/iconos/whatsapp.png" onClick={()=>redirect('')} className="icon-footer" alt="whatsapp"/>
                        </div>
                        <div className="col-lg-4 sm-0"></div>
                        <div className="col-lg-4 ordenador vertical-align">
                            <img src="/images/logo2.png" className="menu-logo-img" alt="logo2 somospsicope"/>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 zona-blanca" style={{textAlign:"center"}}>
                        <h4>Copyright © Somospsicope - Todos los derechos reservados</h4>
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer;