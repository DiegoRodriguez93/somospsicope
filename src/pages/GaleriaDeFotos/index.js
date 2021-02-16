import React from "react";
import Fade from "react-reveal/Fade";
import useFetch from "./../../hooks/useFetch";

export default function GaleriaDeFotos() {
  const [data, loading, setUrl, reload, setReload] = useFetch(
    "https://somospsicope.com/api/galeriaDeFotos/listarGaleria.php"
  );

  return (
    <Fade>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 contaier-header2">
              <hr className="hr mobile" />
              <img
                src="/images/brains.jpg"
                className="header2"
                alt="header4 somospsicope"
              />
              <div className="text-on-brains">
                <h1>Galería de Fotos</h1>
              </div>
            </div>
            {/* <div className="col-12 contenedor-de-lineas contenedor-de-lineas-amarillo"></div> */}
          </div>
        </div>

        <div className="container">
          <div className="row">
            {loading
              ? ""
              : data
              .sort((a, b) => console.log(a, b))
              .map(({ id, nombre, url, tipo }) => {
                  const wide = tipo == 1 ? "w-50" : "w-25";
                  return (
                    <div
                      key={id}
                      className={`${wide} galeria-de-fotos-container`}
                    >
                      <img
                        src={url}
                        alt={nombre}
                        className="galeria-de-fotos-img"
                      />
                    </div>
                  );
                })}
          </div>
        </div>
      </section>
    </Fade>
  );
}
