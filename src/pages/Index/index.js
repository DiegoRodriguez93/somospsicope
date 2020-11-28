import React from 'react'
import Fade from 'react-reveal/Fade';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';


export default function Index() {

    const { t } = useTranslation();


    return (
        <Fade>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 sm-12">
                        <h2 className="hero-title" style={{marginTop:"26%"}}>{t("Spanish Food")}<br/>{t("in Miami")}</h2>
                        <p>{t("Within our gastronomy,")}<br/>
                        {t("the quality of the products,")}<br/>
                        {t("tradition and innovation prevail.")}</p>
                        <Link to="/menu"><button className="hero-button">{t("See our menu")} -{'>'}</button></Link>
                    </div>
                    <div className="col-lg-6 sm-12"></div>
                </div>
            </div>
        </Fade>
    )
}

/* export default index */
