import React from "react";
import Form from "../Components/Form";
import { useEstadosGlobalesContext } from "../Components/utils/global.context";

const Contact = () => {
  const { theme } = useEstadosGlobalesContext();

  return (
    <div className={theme.color}>
      <h1>Para mas información</h1>
      <p className="centered">
        Escribenos tu nombre y correo electronico
      </p>
      <Form />
    </div>
  );
};

export default Contact;
