import React from "react";
import Form from "../Components/Form";
import { useEstadosGlobalesContext } from "../Components/utils/global.context";

const Contact = () => {
  const { theme } = useEstadosGlobalesContext();

  return (
    <div className={theme.color}>
      <h1>PQRS</h1>
      <p className="centered">
        Escribenos tu consulta
      </p>
      <Form />
    </div>
  );
};

export default Contact;
