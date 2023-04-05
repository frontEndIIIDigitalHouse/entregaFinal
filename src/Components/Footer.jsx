import React from "react";
import { useEstadosGlobalesContext } from "./utils/global.context";

const Footer = () => {
  const { theme } = useEstadosGlobalesContext();
  return (
    <footer className={theme.color}>
      <img src="../images/DH.png" alt="DH-logo" />
      <a href="#"><img src="./images/face.png" alt="Facebook-logo" class="red-social" /></a>
      <a href="#"><img src="./images/instagram.png" alt="Instagram-logo" class="red-social" /></a>
      <a href="#"><img src="./images/tiktok.png" alt="Tiktok-logo" class="red-social" /></a>
      <a href="#"><img src="./images/whatsapp.png" alt="Whatsapp-logo" class="red-social" /></a>    
    </footer>
  );
};

export default Footer;
