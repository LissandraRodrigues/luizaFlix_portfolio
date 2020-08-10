import React from 'react';
import { FooterBase } from './styles';

import Logo from "../../assets/logo_1.png";

function Footer() {

  return (

    <FooterBase>

      <a href = "/">

        <img src = { Logo } alt = "LuizaFlix" style = {{ height: "1.5rem" }} />

      </a>

      <h5>

        luizalissandrarosa@poli.ufrj.br

      </h5>

    </FooterBase>

  );

}

export default Footer;
