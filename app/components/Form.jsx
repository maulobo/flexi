import { useState, useEffect } from "react";
import * as Yup from "yup";
import style from "./form.module.css";

export default function Form() {
  const [datos, setDatos] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [camposActivos, setCamposActivos] = useState([]);
  const [errores, setErrores] = useState({});
  const [enviando, setEnviando] = useState(false);

  useEffect(() => {
    validarCamposActivos();
  }, [datos, camposActivos]);

  const mensajes = {
    requerido: "Este campo es obligatorio.",
    email: "Correo electrónico inválido.",
    minimo: "Este campo debe tener al menos 10 dígitos",
  };

  let reglasValidacion = Yup.object().shape({
    nombre: Yup.string().required(mensajes.requerido),
    mensaje: Yup.string().required(mensajes.requerido),
    email: Yup.string().required(mensajes.requerido).email(mensajes.email),
    telefono: Yup.string()
      .trim()
      .transform((valor) => (valor === "" ? undefined : valor))
      .required(mensajes.requerido)
      .min(10, mensajes.minimo),
  });

  function permitirSoloNumeros(evento) {
    if (evento.which < 48 || evento.which > 57) {
      evento.preventDefault();
    }
  }

  function marcarComoActivo(evento) {
    if (!camposActivos.includes(evento.target.name)) {
      setCamposActivos([...camposActivos, evento.target.name]);
    }
  }

  function actualizarDatos(evento) {
    setDatos({
      ...datos,
      [evento.target.name]: evento.target.value,
    });
  }

  function validarCamposActivos() {
    let errores = {};
    try {
      reglasValidacion.validateSync(datos, { abortEarly: false });
      setErrores({});
    } catch (erroresValidacion) {
      erroresValidacion.inner.map((error) => {
        errores[error.path] = error.message;
      });
      const erroresCamposActivos = Object.keys(errores)
        .filter((key) => {
          return camposActivos.includes(key);
        })
        .reduce((acumulador, key) => {
          if (!acumulador[key]) {
            acumulador[key] = errores[key];
          }
          return acumulador;
        }, {});
      setErrores(erroresCamposActivos);
    }
  }

  async function enviarZapier(datos) {
    const respuesta = await fetch("", {
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });
    return respuesta;
  }

  function enviarFormulario(evento) {
    evento.preventDefault();
    let erroresFormulario = {};
    try {
      reglasValidacion.validateSync(datos, { abortEarly: false });
      setErrores({});
      setEnviando(true);
      enviarZapier(datos)
        .then((respuesta) => {
          console.log(respuesta);
          setEnviando(false);
        })
        .catch((error) => {
          setEnviando(false);
        });
    } catch (erroresValidacion) {
      erroresValidacion.inner.map((error) => {
        erroresFormulario[error.path] = error.message;
      });
      setErrores(erroresFormulario);
      const camposActivos = Object.keys(erroresFormulario);
      setCamposActivos(camposActivos);
    }
  }

  return (
    <>
      <form className={style.form} onSubmit={enviarFormulario}>
        <input
          className={style.casilla}
          type="text"
          id="nombre"
          name="nombre"
          onKeyUp={marcarComoActivo}
          onBlur={marcarComoActivo}
          onChange={actualizarDatos}
          value={datos.nombre}
          placeholder="Apellido y nombre "
        />
        {errores.nombre ? (
          <div className={style.invalid}>{errores.nombre}</div>
        ) : null}

        <input
          type="email"
          className={style.casilla}
          id="email"
          name="email"
          onKeyUp={marcarComoActivo}
          onBlur={marcarComoActivo}
          onChange={actualizarDatos}
          value={datos.email}
          placeholder="Email"
        />
        {errores.email ? (
          <div className={style.invalid}>{errores.email}</div>
        ) : null}

        <div className="mb-3">
          <input
            type="text"
            className={style.casilla}
            maxLength="10"
            id="telefono"
            name="telefono"
            onKeyPress={permitirSoloNumeros}
            onKeyUp={marcarComoActivo}
            onBlur={marcarComoActivo}
            onChange={actualizarDatos}
            placeholder="Numero de Telefono"
          />
          {errores.telefono ? (
            <div className={style.invalid}>{errores.telefono}</div>
          ) : null}
        </div>
        <div className="mb-3">
          <input
            type="text"
            className={`form-control ${errores.nombre ? "is-invalid" : ""}`}
            id="mensaje"
            name="mensaje"
            onKeyUp={marcarComoActivo}
            onBlur={marcarComoActivo}
            onChange={actualizarDatos}
            value={datos.mensaje}
            placeholder="Mensaje... "
          />
          {errores.nombre ? (
            <div className="invalid-feedback">{errores.nombre}</div>
          ) : null}
        </div>
        <div className="mb-3">
          <button
            onClick={enviarFormulario}
            disabled={enviando}
            type="submit"
            className="btn btn-lg btn-success"
          >
            Enviar
          </button>
        </div>
      </form>
    </>
  );
}
