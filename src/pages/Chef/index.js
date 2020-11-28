import React from 'react'
import Fade from 'react-reveal/Fade';
import { useTranslation } from "react-i18next";

function Chef() {

    const { t } = useTranslation();

    return (
        <Fade>
        <div className="container">
        <div className="row" style={{margin:0}}>
            <div className="col-12 form-container">
                <h5 className="hero-subtitle">{t("Our Master Chef")}</h5>
                <h2 className="hero-title" style={{textAlign:'center'}}>{t("Our Master Chef")}</h2>
{/*                 <h2 className="hero-title">We cook any dish of our gastronomy to the taste of the client.</h2> */}

                <div className="row">
                    <div className="col-lg-6 sm-12">
                        <img className="ordenador" src="/images/left-chef.png" style={{width:'100%'}} alt="cook chef"/>
                    </div>
                    <div className="col-lg-6 sm-12">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Hic veritatis maxime ex esse optio ab minus laboriosam enim. 
                        Blanditiis temporibus voluptate numquam illum aliquam, 
                        accusantium inventore praesentium dolores amet recusandae?
                    </p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Vitae consequatur, provident quo quam optio dolorem. 
                        Quos sunt unde perferendis, eligendi esse tempora cum
                        in, nam dolor id voluptatem iste nostrum.
                    </p>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Debitis laboriosam nostrum laudantium ratione, fugit, beatae
                         voluptate assumenda perspiciatis cum error itaque distinctio
                          sit adipisci, labore quae aliquam odit impedit nam?
                    </p>

                    <div className="row"  style={{marginTop:'45px'}}>
                        <div className="col-3">
                            <img src="/images/chef.png" style={{width:'100%'}} alt="chef face"/>
                        </div>
                        <div className="col-9">
                            <span className="chef-name cursiva">Davi Martin</span><br/>
                            <span className="chef-title">Principal chef</span>
                        </div>
                    </div>
                    

                    </div>
                </div>

            </div>
        </div>
        </div>
        </Fade>
    )
}

export default Chef
