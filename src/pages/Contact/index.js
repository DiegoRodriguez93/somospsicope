import React from 'react'
import Fade from 'react-reveal/Fade';

function Contact() {
    return (
        <Fade>
        <div className="container">
        <div className="row" style={{margin:0}}>
            <div className="col-12 form-container">
                <h5 className="hero-subtitle">LEAVE US A MESSAGE</h5>
                <h2 className="hero-title">We cook any dish of our gastronomy to the taste of the client.</h2>

                <div className="row">
                    <div className="col-lg-6 sm-12">
                        <input type="text" className="input-form"  placeholder="First name" />
                    </div>
                    <div className="col-lg-6 sm-12">
                    <input type="text" className="input-form" placeholder="Last name" />
                    </div>
                    <div className="col-lg-6 sm-12">
                    <input type="email" className="input-form"  placeholder="Email" />
                    </div>
                    <div className="col-lg-6 sm-12">
                    <input type="number" className="input-form"  placeholder="Phone number" />
                    </div>
                    <div className="col-12">
                        <textarea name="" id="" className="input-form" rows="3" placeholder="Message"></textarea>
                    </div>
                    <div className="col-12" style={{textAlign:'center', paddingTop:'15px', paddingBottom:'15px'}}>
                        <button className="hero-button">Send Message</button>
                    </div>
                </div>

            </div>
        </div>
        </div>
        </Fade>
    )
}

export default Contact
