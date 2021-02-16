import React from 'react'
import Fade from 'react-reveal/Fade';
import { Trans, useTranslation } from 'react-i18next';

export default function QuienesSomos() {

   const { t } = useTranslation();
    
    const reedirect = (url) => {

        window.open(url, '_blank');

    }

    return (
        <Fade>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 contaier-header2">
                    <hr className="hr mobile" />
                            <img src="/images/header-quienesSomos.jpeg" className="header2" alt="header2 somospsicope"/>
                            <div className="text-on-header2 text-on-header2-pink">
                                <h1><Trans i18nKey="quienes-somos-title" /></h1>
                            </div>
                        </div>
                        {/* <div className="col-12 contenedor-de-lineas contenedor-de-lineas-amarillo"></div> */}
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 sm-12  quienesSomos1 vertical-align">
                            <img src="/images/victoria-maseras.jpg" className="quienesSomos1-img  horizontal-align" alt="quienesSomos1 somospsicope"/>
                            <h3 className="center-text">Victoria Maseras</h3>

                                <p
                                className="quienesSomos1-p horizontal-align"
                                    dangerouslySetInnerHTML={{
                                        __html: t("quienes-somos-victoria"),
                                    }}
                                    ></p> 

                        </div>
                        <div className="col-lg-6 sm-12 quienesSomos1 vertical-align">
                            <img src="/images/loreley-arizmendi.jpg" className="quienesSomos1-img horizontal-align" alt="quienesSomos1 somospsicope"/>
                            <h3 className="center-text">Loreley Arizmendi</h3>
                             
                                <p
                                className="quienesSomos1-p horizontal-align"
                                    dangerouslySetInnerHTML={{
                                        __html: t("quienes-somos-loreley"),
                                    }}
                                ></p>

                            
                        </div>
                    </div>
                </div>



                <div className="container-fluid" style={{backgroundColor:"#f0f0f0", paddingBottom:'75px'}}>
                    <div className="row">
                        <div className="col-12 quienesSomos2-title">
                            <h1><Trans i18nKey="quienes-somos-que-encontraras" /></h1>
                        </div>
                        <div className="col-12" >

                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-1 sm-0"></div>
                                    <div className="col-lg-2 sm-12 quienesSomos2-box" style={{backgroundColor:"#f1a3c7"}}>
                                        <div className="quienesSomos2-text"><p><Trans i18nKey="quienes-somos-card1" /></p></div>
                                    </div>
                                    <div className="col-lg-2 sm-12 quienesSomos2-box" style={{backgroundColor:"#91cdeb"}}>
                                        <div className="quienesSomos2-text"><p><Trans i18nKey="quienes-somos-card2" /></p></div>
                                    </div>
                                    <div className="col-lg-2 sm-12 quienesSomos2-box" style={{backgroundColor:"#8bbe44"}}>
                                        <div className="quienesSomos2-text"><p><Trans i18nKey="quienes-somos-card3" /></p></div>
                                    </div>
                                    <div className="col-lg-2 sm-12 quienesSomos2-box" style={{backgroundColor:"#f7e72f"}}>
                                        <div className="quienesSomos2-text"><p><Trans i18nKey="quienes-somos-card4" /></p></div>
                                    </div>
                                    <div className="col-lg-2 sm-12 quienesSomos2-box" style={{backgroundColor:"#f19122"}}>
                                        <div className="quienesSomos2-text"><p><Trans i18nKey="quienes-somos-card5" /></p></div>
                                    </div>
                                    <div className="col-lg-1 sm-0"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container-fluid  quienesSomos3-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="quienesSomos3">
                                <h1><Trans i18nKey="quienes-somos-footer" /></h1>
                                <img src="/images/iconos/instagram.png" style={{maxWidth:'80px'}} onClick={()=>reedirect('https://www.instagram.com/somospsicope/?hl=es-la')} className="icon-footer ordenador2" alt="instragram"/>
                                <img src="/images/iconos/facebook.png" style={{maxWidth:'80px'}} onClick={()=>reedirect('https://www.facebook.com/somospsicope/')} className="icon-footer ordenador2" alt="facebook"/>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </Fade>
    )
}

/* export default index */
