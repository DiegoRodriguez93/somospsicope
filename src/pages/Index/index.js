import React, { useState } from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ModalConsultorio from '../../components/ModalConsultorio'

export default function Index() {

    const { t } = useTranslation();

    const [isOpenModal, setIsOpenModal] = useState(false);

    return (
        <Fade>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 contaier-brains">
                    <hr className="hr mobile" />
                            <img src="/images/brains.jpg" className="brains" alt="brains somospsicope"/>
                            <div className="text-on-brains">
                                <h1>{t("inicio-title")}</h1>
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
                            <h3>{t("inicio-welcome")}</h3>
                            <p>{t("inicio-welcome-sub")}</p>
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
                                <div className="row" style={{marginBottom:'65px', marginTop:'65px'}}>
                                    <div className="col-lg-4 sm-12 index2-box" style={{backgroundColor:"#8abd44"}}>
                                        <img src="/images/iconos/capacitaciones.png" alt="capacitaciones somospsicope"/>
                                        <h4>{t("inicio-card1")}</h4>
                                        <p>{t("inicio-card1-sub")}</p>
                                        <button className="btn btn-purple btn-sm">Ver más</button>
                                    </div>
                                    <div className="col-lg-4 sm-12 index2-box" style={{backgroundColor:"#90ccea"}}>
                                        <img src="/images/iconos/supervisiones.png" alt="supervisiones somospsicope"/>
                                        <h4>{t("inicio-card2")}</h4>
                                        <p>{t("inicio-card2-sub")}</p>
                                        <button className="btn btn-purple btn-sm">Ver más</button>
                                    </div>
                                    <div className="col-lg-4 sm-12 index2-box" style={{backgroundColor:"#f0a2c6"}}>
                                        <img src="/images/iconos/materiales.png" alt="materiales somospsicope"/>
                                        <h4>{t("inicio-card3")}</h4>
                                        <p>{t("inicio-card3-sub")}</p>
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
                                    <h4>{t("inicio-ciclo")}</h4>
                                    <p>{t("inicio-ciclo-sub")}</p>
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
                                    <h4>{t("inicio-consultorio")}</h4>
                                    <p>{t("inicio-consultorio-sub")}</p>
                                    <button onClick={()=>{setIsOpenModal(true); setTimeout(()=>{setIsOpenModal(false);},1500) }} className="btn btn-purple btn-sm">Ver más</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <ModalConsultorio setIsOpenModal={isOpenModal} />
        </Fade>
    )
}

/* export default index */
