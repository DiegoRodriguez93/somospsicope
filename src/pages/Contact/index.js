import React from 'react'
import Fade from 'react-reveal/Fade';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

function Contact() {


    const { register, handleSubmit, errors } = useForm();
    const handleSubmionSubmit = (data, e )=> {
        Swal.fire('Correct!','The message was sent successfully, someone will contact you soon!','success');
        e.target.reset();
    }

    return (
        <Fade>
        <div className="container">
        <div className="row" style={{margin:0}}>
            <div className="col-12 form-container">
                <h5 className="hero-subtitle">{"LEAVE US A MESSAGE"}</h5>
                <h2 className="hero-title">{"We cook any dish of our gastronomy to the taste of the client."}</h2>

                <form onSubmit={handleSubmionSubmit} className="row">
                    <div className="col-lg-6 sm-12">
                        <input type="text" className="input-form" name="first_name" placeholder={"First name*"} ref={register({ required: true })} />
                        <span className="errors">{errors.first_name && "First name is required"}</span>
                    </div>
                    <div className="col-lg-6 sm-12">
                    <input type="text" className="input-form" name="last_name" placeholder={"Last name"} ref={register}/>
                    </div>
                    <div className="col-lg-6 sm-12">
                    <input type="email" name="email" className="input-form"  placeholder="Email*" ref={register({ required: true })} />
                    <span className="errors">{errors.email && "Email is required"}</span>
                    </div>
                    <div className="col-lg-6 sm-12">
                    <input type="number" name="phone" className="input-form"  placeholder={"Phone number"} ref={register} />
                    </div>
                    <div className="col-12">
                        <textarea name="message" className="input-form" rows="3" placeholder={"Message*"} ref={register({ required: true })}></textarea>
                        <span className="errors">{errors.message && "Message is required"}</span>
                    </div>
                    <div className="col-12" style={{textAlign:'center', paddingTop:'15px', paddingBottom:'15px'}}>
                        <button type="submit" className="hero-button">{"Send Message"}</button>
                    </div>
                </form>

            </div>
        </div>
        </div>
        </Fade>
    )
}

export default Contact
