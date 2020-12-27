import React from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

export default function Capacitaciones() {

    return (
        <Fade>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 contaier-header2">
                            <hr className="hr mobile" />
                            <img src="/images/books.jpeg" className="header2" alt="header2 somospsicope" />
                            <div className="text-on-header2 text-on-header2-blue">
                                <h1>Capacitaciones</h1>
                            </div>
                        </div>
                        {/* <div className="col-12 contenedor-de-lineas contenedor-de-lineas-amarillo"></div> */}
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 sm-12">
                            <img
                                src="/images/compu-capacitaciones.jpg"
                                className="quienesSomos1-img horizontal-align"
                                style={{ marginTop: '40px', marginBottom: '40px' }}
                                alt="compu capacitaciones somospsicope" />
                        </div>
                        <div className="col-lg-6 sm-12 capacitaciones1">
                            <h2>"2° Edición: La enseñanza de Estrategias y Técnicas de Estudio en el Tratamiento Psicopedagógico"</h2>
                            <h4>Dictado por LIC. MARÍA TRESCA<br />Coordinado por Somospsicope</h4>
                            <h5 className="subtitle subtitle-blue">Sábado 26 de septiembre - 9.30hs a 12.00hs</h5>
                        </div>
                    </div>
                </div>



                <div className="container-fluid" style={{ backgroundColor: "#f0f0f0", paddingBottom: '45px', paddingTop: '45px' }}>
                    <div className="row">
                        <div className="col-12">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 center-text" style={{ fontWeight: 'bold' }}>
                                        <p>La capacitación tiene como objetico general dar a conocer a través de la articulación teóricopráctica los conceptos centrales
                                        sobre el desarrollo de habilidades para el estudio en el marco de un tratamiento psicopedagógico. Se busca a su vez ofrecer a
                                        los particulares la posibilidad de conocer y manejar actividades concretas para intervenir con sus pacientes para desarrollar
                                    estrategias y técnicas de estudio eficaces.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="container">
                                <div className="row">

                                    <div className="col-lg-6 sm-12 capacitaciones3">
                                        <h2>Temario</h2>
                                        <ul>
                                            <li>lorem aiusdh asd apara sdses dsfases</li>
                                            <li>lorem aiusdh asd apara sdses dsfases</li>
                                            <li>lorem aiusdh asd apara sdses dsfases</li>
                                            <li>lorem aiusdh asd apara sdses dsfases</li>
                                            <li>lorem aiusdh asd apara sdses dsfases</li>
                                            <li>lorem aiusdh asd apara sdses dsfases</li>
                                            <li>lorem aiusdh asd apara sdses dsfases</li>
                                            <li>lorem aiusdh asd apara sdses dsfases</li>
                                        </ul>
                                        <h2>¿A quién está dirigido?</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Obcaecati alias deserunt, necessitatibus ad nisi vero
                                        doloremque totam! Nostrum voluptate aspernatur, totam
                                quasi debitis quos error, sunt voluptatum, atque accusamus delectus.</p>
                                        <h5 className="capacitaciones3-contact">
                                            Para resolver dudas o mayor información escribir a:<br />info@somospsicope.com</h5>
                                    </div>
                                    <div className="col-lg-6 sm-12 center-text horizontal-align vertical-align capacitaciones3">
                                        <h5 className="subtitle subtitle-pink">Plataforma</h5>
                                        <h6>Vía Zoom</h6>
                                        <h5 className="subtitle subtitle-green">Formas de pago</h5>
                                        <h6>Transferencia bancaria</h6>
                                        <h6>Depósito bancario</h6>
                                        <h6>Mercado Pago</h6>
                                        <h6>PayPal</h6>
                                        <button className="btn btn-purple" style={{marginTop:'40px', marginBottom:'25px'}}>Quiero inscribirme</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid  capacitaciones-especialistas-container" style={{ backgroundColor: "#f0f0f0", paddingBottom: '10px', paddingTop: '10px' }}>
                    <div className="row">
                        <div className="col-12">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 sm-12">
                                        <div className="capacitaciones-especialistas capacitaciones-especialistas-name">
                                            <h1>LIC. MARÍA TRESCA</h1>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 sm-12">
                                        <div className="capacitaciones-especialistas">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Laudantium pariatur labore praesentium voluptates aut fugiat,
                                            incidunt vel nemo doloribus deserunt. Quisquam quos quae corporis
                                            quis accusantium atque provident optio perspiciatis!
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Repellat nostrum molestias ab cupiditate culpa assumenda
                                            consectetur fugit. Provident eum excepturi voluptates, alias tenetur
                                            modi dignissimos incidunt nulla quo cupiditate quam.
                                    </p>
                                        </div>
                                    </div>

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
