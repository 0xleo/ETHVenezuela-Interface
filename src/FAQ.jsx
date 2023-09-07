/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './FAQ.css'

export const FAQ = () => {

  //   const [menuPosition, setMenuPosition] = useState(-500);
  // const handleBurgerClick = () => {
  //   if (menuPosition === -500) {
  //     setMenuPosition(0);
  //     document.body.style.overflow = 'hidden';
  //   }
  //    else {
  //     setMenuPosition(-500);
  //     document.body.style.overflow = 'auto';
  //   }
  // };
  const [openClose, setOpenClose] = useState('none');
const FAQs = document.querySelectorAll('.container-question');
  FAQs.forEach(boton => {
  boton.addEventListener('click', () => {
    // Aquí puedes colocar el código que deseas que se ejecute cuando se hace clic en un botón específico.
    // Por ejemplo, puedes cambiar la apariencia o el estado del botón.
    boton.classList.toggle('activo');
  });
});
  const clickFAQ = () => {
    if (openClose === 'none') {
      setOpenClose('block');
    }
     else {
      setOpenClose('none');
    }
  };

//   document.getElementById("ocultarBtn").addEventListener("click", function() {
//     var caja = document.querySelector(".caja");
//     caja.classList.toggle("oculto");
// });

  return (
    <div className="contain_FAQ">
    <h3 className="tituloFAQ">FAQ</h3>

    <div className="questions">
      <div className="container-questions activo" >
        <div className="container-question" onClick={clickFAQ}>
          <p className="question">¿Qué es Ethereum?</p>
          <p className="answer" style={{ display: openClose }}>Ethereum es una tecnología que alberga dinero digital, pagos globales y aplicaciones. La comunidad ha construido una próspera economía digital, nuevas formas audaces para que los creadores ganen en línea y mucho más. Está abierto a todos, al margen del lugar donde estén; lo único que se necesita es tener internet.</p>
        </div>

        <div className="container-question" onClick={clickFAQ}>
          <p className="question">Un sistema financiero más justo</p>
          <p className="answer" style={{ display: openClose }}>Hoy, miles de millones de personas no pueden abrir cuentas bancarias, otras tienen sus pagos bloqueados. El sistema descentralizado de finanzas (DeFi) de Ethereum nunca duerme o discrimina. Solo con una conexión a internet, puede enviar, recibir, tomar prestado, acumular intereses, e incluso transferir fondos a cualquier parte del mundo.</p>
        </div>

        <div className="container-question">
          <p className="question">El internet de activos</p>
          <p className="answer">Ethereum no es solo para dinero digital. Cualquier cosa que posea puede representarse, comercializarse y utilizarse como token no fungible (NFT). Puede «tokenizar» su arte y obtener comisiones automáticamente cada vez que vuelva a venderse. O utilizar un token de algo que posea para pedir un préstamo. Las posibilidades crecen continuamente.</p>
        </div>

        <div className="container-question">
          <p className="question">Un internet abierto</p>
          <p className="answer">Hoy en día obtenemos acceso a servicios de internet «gratuitos» a cambio de renunciar al control de nuestra información personal. Los servicios de Ethereum están abiertos por defecto; solo necesita una cartera. Estas son gratuitas y fáciles de configurar, la controla usted y funcionan sin ninguna información personal.</p>
        </div>
      </div>
    </div>
  </div>
  )
}

