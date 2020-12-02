import React from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import Footer from './../../components/Footer/'


export default function Index() {

    return (
        <Fade>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 contaier-brains">
                    <hr className="hr mobile" />
                            <img src="/images/brains.jpg" className="brains" alt="brains somospsicope"/>
                            <div className="text-on-brains">
                                <h1>Neurodesarrollo infantil y Psicopedagogía</h1>
                            </div>
                        </div>
                        <div className="col-12 contenedor-de-lineas contenedor-de-lineas-amarillo"></div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 sm-12">
                            <img src="/images/index1.jpg" className="index1" alt="index1 somospsicope"/>
                        </div>
                        <div className="col-lg-6 sm-12 index1-right vertical-align">
                            <h3>¡Bienvenidos a Somospsicope!</h3>
                            <p>Somos Loreley Arizmendi y Victoria Maseras,
                                licenciadas en psicopedagogía.
                                Creadores de Somospsicope, un espacio de intercambio
                                difusión y formación profesional acerca del 
                                Neurodesarrollo infantil y la Psicopedagogía.
                            </p>
                            <button className="btn btn-yellow">Ver más</button>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 contaier-brains">
                            <img src="/images/books.jpeg" className="books" alt="books somospsicope"/>
                            <div className="text-on-books">
                                <h1>¡Sumate a nuestras capacitaciones!</h1>
                                <button className="btn btn-purple">Ver más</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid" style={{backgroundColor:"#f6e62f"}}>
                    <div className="row">
                        <div className="col-12" >

                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 sm-12 index2-box" style={{backgroundColor:"#8abd44"}}>
                                        <img src="/images/iconos/capacitaciones.png" alt="capacitaciones somospsicope"/>
                                        <h4>Capacitaciones</h4>
                                        <p>Sumate a las capacitaciones dictadas por Somospsicope y otros profesionales</p>
                                        <button className="btn btn-purple btn-sm">Ver más</button>
                                    </div>
                                    <div className="col-lg-4 sm-12 index2-box" style={{backgroundColor:"#90ccea"}}>
                                        <img src="/images/iconos/supervisiones.png" alt="supervisiones somospsicope"/>
                                        <h4>Supervisiones</h4>
                                        <p>Un espacio de intercambio y diálogo para repensar la práctica Psicopedagógoca</p>
                                        <button className="btn btn-purple btn-sm">Ver más</button>
                                    </div>
                                    <div className="col-lg-4 sm-12 index2-box" style={{backgroundColor:"#f0a2c6"}}>
                                        <img src="/images/iconos/materiales.png" alt="materiales somospsicope"/>
                                        <h4>Materiales</h4>
                                        <p>Descubrí nuestros materiales creados en colaboración con ABC.PSICOPE</p>
                                        <button className="btn btn-purple btn-sm">Ver más</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row index3">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img src="/images/index3-1.jpg" className="ordenador" alt="index3-1 somospsicope"/>
                                </div>
                                <div className="col-lg-6 sm-12 vertical-align">
                                    <h4>Ciclo de charlas</h4>
                                    <p>Agendá las próximas charlas en Instagram con profesionales.</p>
                                    <button className="btn btn-purple btn-sm">Ver más</button>
                                </div>
                            </div>
                        </div>
                        <hr className="hr hr-top hr-bottom mobile" />
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img src="/images/index3-2.jpg" className="ordenador" alt="index3-2 somospsicope"/>
                                </div>
                                <div className="col-lg-6 sm-12 vertical-align">         
                                    <h4>Consultorio</h4>
                                    <p>Escribinos para atender tu consulta.</p>
                                    <button className="btn btn-purple btn-sm">Ver más</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </Fade>
    )
}

/* export default index */
