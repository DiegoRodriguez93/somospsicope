import React from 'react'
import Fade from 'react-reveal/Fade';

function index() {
    return (
        <Fade>
        <div className="container">
        <div className="row">
            <div className="col-lg-6 sm-12">
                <h2 className="hero-title" style={{marginTop:"26%"}}>Spanish Food <br/>in Miami</h2>
                <p>Within our gastronomy,<br/>
                 the quality of the products,<br/>
                  tradition and innovation prevail.</p>
                  <button className="hero-button">Place your order -{'>'}</button>
            </div>
            <div className="col-lg-6 sm-12"></div>
        </div>
        </div>
        </Fade>
    )
}

export default index
