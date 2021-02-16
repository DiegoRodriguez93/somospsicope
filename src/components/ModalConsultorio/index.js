import React, { useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { useTranslation } from 'react-i18next';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

export default function ModalConsultorio({ setIsOpenModal }) {
  const { t } = useTranslation();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {

    Swal.fire({
      title: 'Enviando ...',
      onBeforeOpen () {
        Swal.showLoading ()
      },
      onAfterClose () {
        Swal.hideLoading()
      },
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      showConfirmButton: false
    });

    const { fullName, email, phone, message } = data;
    let formData = new FormData();

    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);

    fetch("https://somospsicope.com/api/forms/mensajeConsultorio.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setTimeout(()=>{Swal.fire('Correcto!', 'Mensaje enviado correctamente, en breve alguien se pondrá en contacto!', 'success');},2500) 
        e.target.reset();
      })
      .catch((error) => Swal.fire('Error!', 'Ha ocurrido un error, intente más tarde!', 'error'))
      ;
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    setIsOpenModal && openModal();
  }, [setIsOpenModal]);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    document.body.style.overflowY = "hidden";
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflowY = "scroll";
  }

  return (
    <div>
      {/*         <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src="/images/logo2.png" className="menu-logo-img" alt="logo2" />
        <button className="close" onClick={closeModal}>
          X
        </button>
        <h1 className="title title-purple">Consultorio</h1>
        <div className="row">
          <div className="col-lg-8 sm-12">
            <p>
             {t("consultorio-modal-description")}
            </p>
          </div>
          <div className="col-lg-4 sm-12"></div>
        </div>

        <form className="supervisiones2-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            name="fullName"
            ref={register({ required: true })}
            placeholder="Nombre y apellido*"
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
            name="phone"
            ref={register()}
            placeholder="Teléfono"
          />
          <input
            type="text"
            name="message"
            ref={register({ required: true })}
            placeholder="Motivo de consulta*"
          />
          <b className="error-form">
            {errors.message && "Motivo de consulta requerido."}
          </b>
          <div className="button-container">
            <button
              className="btn btn-yellow btn-sm"
              style={{ marginTop: "30px" }}
            >
              ENVIAR
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
