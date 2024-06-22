import React from "react";
import whatsappIcon from "../assets/whatsapp.png";

export default function WhatsappBtn() {
  return (
    <a className="wspBtn" href="https://www.whatsapp.com" target="_blank">
      <img src={whatsappIcon} alt="" />
    </a>
  );
}
