import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import ModalCapacitaciones from "../../components/ModalCapacitaciones";
import { Trans, useTranslation } from "react-i18next";
import useFetch from "./../../hooks/useFetch";

export default function Capacitaciones() {
  const { t } = useTranslation();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [data, loading, setUrl, reload, setReload] = useFetch(
    "https://somospsicope.com/api/capacitaciones/chequearFinalizadoInscripto.php"
  );

  React.useEffect(() => {
    const I = setTimeout(() => {
      setReload(reload + 1);
    }, 15000); //when state change useEffect trigger again
  }, [reload, setReload]);

  const mostrarFinalizado = (loading, data) => {
    let result = "none";

    if (!loading && data?.estado_capacitacion === 0) {
      result = "block";
    }

    return result;
  };

  return (
    <Fade>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 contaier-header2">
              <hr className="hr mobile" />
              <img
                src="/images/books.jpeg"
                className="header2"
                alt="header2 somospsicope"
              />
              <div className="text-on-header2 text-on-header2-blue">
                <h1>
                  <Trans i18nKey="capacitaciones-header" />
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 sm-12">
              <img
                src="/images/compu-capacitaciones.jpg"
                className="quienesSomos1-img horizontal-align"
                style={{ marginTop: "40px", marginBottom: "40px" }}
                alt="compu capacitaciones somospsicope"
              />
            </div>
            <div className="col-lg-6 sm-12 capacitaciones1">
              <h2>
                <Trans i18nKey="capacitaciones-title" />
              </h2>
              <h4>
                <Trans i18nKey="capacitaciones-subtitle" />
              </h4>
              <h5 className="subtitle subtitle-blue">
                <Trans i18nKey="capacitaciones-datetime" />
              </h5>
              <h6
                style={{
                  display: loading
                    ? "none"
                    : data.estado_capacitacion === "0"
                    ? "block"
                    : "none",
                }}
                className="finalizado"
              >
                FINALIZADO
              </h6>
            </div>
          </div>
        </div>

        <div
          className="container-fluid"
          style={{
            backgroundColor: "#f0f0f0",
            paddingBottom: "45px",
            paddingTop: "45px",
          }}
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
                      <Trans i18nKey="capacitaciones-objetivo" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 sm-12 capacitaciones3">
                    <h2>Temario</h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: t("capacitaciones-temario"),
                      }}
                    />
                    <h2>¿A quién está dirigido?</h2>
                    <p>
                      <Trans i18nKey="capacitaciones-a-quien-esta-dirigido" />
                    </p>
                    <h5 className="capacitaciones3-contact">
                      <Trans i18nKey="capacitaciones-dudas" />
                    </h5>
                  </div>
                  <div className="col-lg-6 sm-12 center-text horizontal-align vertical-align capacitaciones3">
                    <h5 className="subtitle subtitle-pink">Plataforma</h5>
                    <h6>Vía Zoom</h6>
                    <h5 className="subtitle subtitle-green">Formas de pago</h5>
                    <h6>Transferencia bancaria</h6>
                    <h6>Depósito bancario</h6>
                    <h6>Mercado Pago</h6>
                    <h6>PayPal</h6>
                    <button
                      disabled={
                        loading
                          ? true
                          : data.estado_inscripciones === "0"
                          ? true
                          : false
                      }
                      onClick={() => {
                        setIsOpenModal(true);
                        setTimeout(() => {
                          setIsOpenModal(false);
                        }, 1500);
                      }}
                      className={`btn btn-purple ${
                        loading
                          ? "btn-disabled"
                          : data.estado_inscripciones === "0"
                          ? "btn-disabled"
                          : ""
                      }`}
                      style={{ marginTop: "40px", marginBottom: "25px" }}
                    >
                      Quiero inscribirme
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container-fluid  capacitaciones-especialistas-container"
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
                    <div className="capacitaciones-especialistas capacitaciones-especialistas-name">

                        {/* <h1><Trans i18nKey="capacitaciones-especialista-name" /></h1> */}
                        <h1
                      dangerouslySetInnerHTML={{
                        __html: t("capacitaciones-especialista-name"),
                      }}
                    />

                    </div>
                  </div>
                  <div className="col-lg-6 sm-12">
                    <div className="capacitaciones-especialistas">
{/*                       <p>
                        <Trans i18nKey="capacitaciones-especialista-description" /></p> */}
                        <p
                      dangerouslySetInnerHTML={{
                        __html: t("capacitaciones-especialista-description"),
                      }}
                    />
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalCapacitaciones setIsOpenModal={isOpenModal} />
    </Fade>
  );
}

/* export default index */
