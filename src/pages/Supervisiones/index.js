import React from "react";
import Fade from "react-reveal/Fade";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function Supervisiones() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {
    Swal.fire({
      title: "Enviando ...",
      onBeforeOpen() {
        Swal.showLoading();
      },
      onAfterClose() {
        Swal.hideLoading();
      },
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      showConfirmButton: false,
    });

    const { fullName, email, phone, message } = data;
    let formData = new FormData();

    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);

    fetch("https://somospsicope.com/api/forms/mensajeSupervision.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setTimeout(() => {
          Swal.fire(
            "Correcto!",
            "Mensaje enviado correctamente, en breve alguien se pondrá en contacto!",
            "success"
          );
        }, 2500);
        e.target.reset();
      })
      .catch((error) =>
        Swal.fire("Error!", "Ha ocurrido un error, intente más tarde!", "error")
      );
  };

  /*     const { t } = useTranslation(); */

  return (
    <Fade>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 contaier-header2">
              <hr className="hr mobile" />
              <img
                src="/images/header-Supervisiones.jpg"
                className="header2"
                alt="header4 somospsicope"
              />
              <div className="text-on-header2 text-on-header2-green">
                <h1>Supervisiones</h1>
              </div>
            </div>
            {/* <div className="col-12 contenedor-de-lineas contenedor-de-lineas-amarillo"></div> */}
          </div>
        </div>

        <div
          className="container-fluid"
          style={{ paddingBottom: "45px", paddingTop: "45px" }}
        >
          <div className="row">
            <div className="col-12">
              <div className="container">
                <div className="row">
                  <div
                    className="col-12 center-text"
                    style={{ fontWeight: "bold" }}
                  >
                    <p>
                      Un espacio de intercambio y diálogo para repensar la
                      práctica psicopedagógica desde el
                      <br /> enfoque nueropsicológico y el sistémico.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid" style={{ marginBottom: "80px" }}>
          <div className="row">
            <div className="col-12">
              <div className="container">
                <div className="row">
                  <div
                    className="col-lg-4 sm-12 index2-box index2-box-white"
                    style={{ backgroundColor: "#f0a2c6" }}
                  >
                    <p>
                      Supervisiones
                      <br /> clínicas
                      <br />
                      (Diagnóstico y tratamiento)
                    </p>
                  </div>
                  <div
                    className="col-lg-4 sm-12 index2-box index2-box-white"
                    style={{ backgroundColor: "#90ccea" }}
                  >
                    <p style={{ marginTop: "22px" }}>
                      Supervisiones
                      <br /> de dispositivos
                    </p>
                  </div>
                  <div
                    className="col-lg-4 sm-12 index2-box index2-box-white"
                    style={{ backgroundColor: "#8abd44" }}
                  >
                    <p style={{ marginTop: "22px" }}>
                      Supervisiones
                      <br /> de tesis de grado
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container-fluid"
          style={{
            backgroundColor: "#f0f0f0",
            paddingBottom: "10px",
            paddingTop: "10px",
          }}
        >
          <div className="row">
            <div className="col-12">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 sm-12">
                    <div className="supervisiones2">
                      <h2>
                        Solicitá
                        <br />
                        una entrevista{" "}
                      </h2>
                      <p>
                        Se coordina fecha y hora en base a la disponibilidad de
                        ambas partas. Completá el formulario y nos comunicaremos
                        con vos a la brevedad.
                      </p>
                      <h5>
                        Las supervisiones tienen una duración de 1:30hs
                        aproximadamente por plataforma Zoom.
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-6 sm-12 vertical-align">
                    <form
                      className="supervisiones2-form"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <input
                        type="text"
                        placeholder="Nombre y apellido*"
                        name="fullName"
                        ref={register({ required: true })}
                      />
                      <b className="error-form">
                        {errors.fullName && "Nombre y apellido requeridos."}
                      </b>
                      <input
                        type="text"
                        placeholder="Email*"
                        name="email"
                        ref={register({
                          pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          required: true,
                        })}
                      />
                      <b className="error-form">
                        {errors.email && "Email válido requerido."}
                      </b>
                      <input
                        type="text"
                        placeholder="Teléfono"
                        name="phone"
                        ref={register()}
                      />
                      <input
                        type="text"
                        placeholder="Motivo de consulta*"
                        name="message"
                        ref={register({ required: true })}
                      />
                      <b className="error-form">
                        {errors.message && "Motivo de consulta requerido."}
                      </b>
                      <div className="button-container">
                        <button className="btn btn-purple btn-sm">
                          ENVIAR
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}

/* export default index */
