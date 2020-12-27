import React from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

export default function Materiales() {

    return (
        <Fade>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 contaier-header2">
                            <hr className="hr mobile" />
                            <img src="/images/header-Materiales.jpeg" className="header2" alt="header4 somospsicope" />
                            <div className="text-on-header2 text-on-header2-purple">
                                <h1>Materiales</h1>
                            </div>
                        </div>
                        {/* <div className="col-12 contenedor-de-lineas contenedor-de-lineas-amarillo"></div> */}
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 sm-12"></div>
                        <div className="col-lg-4 sm-12">
                            <div className="row" style={{marginTop:'40px'}}>
                                <div className="col-6 vertical-align horizontal-align">
                                    <img src="/images/logo.png" className="materiales-img" alt="logo materiales"/>
                                </div>
                                <div className="col-6 vertical-align horizontal-align">
                                    <img src="/images/abc-logo.png" className="materiales-img2" alt="abc-logo materiales"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 sm-12"></div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12 materiales2">
                            <h1>Kits creados en colaboración con ABC.PSICOPE</h1>
                            <p>Desarrollamos estos materiales descargables para usar desde un dispositivo electrónico o para imprimir.</p>
                        </div>
                    </div>
                </div>


            </section>
        </Fade>
    )
}

/* export default index */
