import React from "react";
import Fade from "react-reveal/Fade";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import ModalCompras from "../../components/ModalCompras";

export default function MaterialesDescription() {
  const { id } = useParams();

  const [w, setW] = React.useState(0);
  const [isOpenModal, setIsOpenModal] = React.useState(false);

  React.useLayoutEffect(() => {
    function updateSize() {
      setW(document.getElementById("photo-bar")?.width);
    }
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const [data, loading, setUrl, reload, setReload] = useFetch(
    "https://somospsicope.com/api/productos/listarProductosWeb.php?productoID="+id
  );

  return (
    <Fade>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 contaier-header2">
              <hr className="hr mobile" />
              <img
                src="/images/header-Materiales.jpeg"
                className="header2"
                alt="header4 somospsicope"
              />
              <div className="text-on-header2 text-on-header2-purple">
                <h1>Materiales</h1>
              </div>
            </div>
            {/* <div className="col-12 contenedor-de-lineas contenedor-de-lineas-amarillo"></div> */}
          </div>
        </div>

        <div className="container">
          {loading
            ? ""
            : data.map(
                ({
                  id,
                  nombre,
                  url_foto,
                  descripcion,
                  precio,
                  objetivos_especificos,
                  que_incluye,
                }) => (
                  <div key={id} className="row" style={{ padding: "3.5%" }}>
                    <div className="col-lg-6 sm-12 galeria-de-fotos-container materiales">
                      <img
                        src={url_foto}
                        alt={nombre}
                        className="galeria-de-fotos-img2"
                        id="photo-bar"
                      />
                      <div
                        className="row bar"
                        style={{ textAlign: "center", width: w }}
                      >
                        <div className="col-6 materiales-price">
                          <h2 className="materiales-price-description">
                            ${precio}
                          </h2>
                        </div>
                        <div className="col-6">
                          <button
                            style={{ float: "right" }}
                            className="btn btn-purple btn-sm btn-upp"
                            onClick={() => {
                              setIsOpenModal(true);
                              setTimeout(() => {
                                setIsOpenModal(false);
                              }, 1500);
                            }}
                          >
                            Comprar
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 sm-12 galeria-de-fotos-container materiales">
                      <h1 className="materiales-title" dangerouslySetInnerHTML={{__html: nombre,}}></h1>
                      <h4 className="materiales-description" dangerouslySetInnerHTML={{__html: descripcion,}}></h4>
                      {objetivos_especificos !== "" && (
                        <>
                          <h3 className="light-blue-subtitle">Objetivos Específicos</h3>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: objetivos_especificos,
                            }}
                          ></div>
                        </>
                      )}
                        {que_incluye !== "" && (
                        <>
                          <h3 className="light-blue-subtitle">¿Qué incluye?</h3>
                          <div
                          className="open-sans"
                            dangerouslySetInnerHTML={{
                              __html: que_incluye,
                            }}
                          ></div>
                        </>
                      )}
                    </div>
                  </div>
                )
              )}
        </div>
      </section>
      <ModalCompras setIsOpenModal={isOpenModal} nombreProducto={data[0]?.nombre} />
    </Fade>
  );
}
