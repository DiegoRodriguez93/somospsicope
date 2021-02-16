import React from 'react'
import Fade from 'react-reveal/Fade';
import useFetch from "./../../hooks/useFetch";
import { useTranslation } from 'react-i18next';

export default function Materiales() {

    const { t } = useTranslation();
    
    const [data, loading, setUrl, reload, setReload] = useFetch(
        "https://somospsicope.com/api/productos/listarProductosWeb.php"
      );


    return (
        <Fade>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 contaier-header2">
                            <hr className="hr mobile" />
                            <img src="/images/header-Materiales.jpeg" className="header2" alt="header4 somospsicope" />
                            <div className="text-on-header2 text-on-header2-purple">
                                <h1>{t("materiales-header")}</h1>
                            </div>
                        </div>
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
                            <h1>{t("materiales-title")}</h1>
                            <p>{t("materiales-subtitle")}</p>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        {loading ? '' : (data.map(({id, nombre, url_foto, descripcion, precio}) => 
                            <div key={id} className="col-lg-4 sm-12 galeria-de-fotos-container materiales">
                                <img src={url_foto} alt={nombre} className="galeria-de-fotos-img2" />
                                <h1 className="materiales-title" dangerouslySetInnerHTML={{__html: nombre,}}></h1>
                                <h4 className="materiales-description" dangerouslySetInnerHTML={{__html: descripcion,}}></h4>
                                <div className="row" style={{textAlign:"center"}}>
                                    <div className="col-6 materiales-price"><h2>${precio}</h2></div>
                                    <div className="col-6">
                                        <a href={`materiales/${id}`}><button className="btn btn-purple btn-sm btn-upp">ver más</button></a>
                                    </div>
                                </div>
                            </div>
                         ))}
                         {loading ? '' : (
                    <div className="col-lg-4 sm-12 galeria-de-fotos-container materiales">
                                <img src="/images/proximamente.jpg" alt='proximamente' className="galeria-de-fotos-img2" />
                                <h1 className="materiales-title">kit autoinstrucciones</h1>
                                <h4 className="materiales-description">Próximamente.</h4>
                            </div>)}
                    </div>
                </div>



            </section>
        </Fade>
    )
}