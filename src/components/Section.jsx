import React, { useState } from "react";
import WhatsappBtn from "./WhatsappBtn";

export default function Section() {
  const [Count, setCount] = useState(0);

  function addNumber() {
    setCount(Count + 1);
  }
  function removeNumber() {
    setCount(Count - 1);
    console.log(Count);
  }

  return (
    <>
      <div className="home-section">
        <h1>Toyota corolla 2024 0km y 2 motos ek outlook 2024 0km</h1>
        {/* loadingBar */}
        <p className="">⏱Descripción:</p>
        <h4>Toyota corolla 2024 0km y 2 motos ek outlook 2024 0km</h4>

        <h4>🥇Toyota corolla 2024 0km - 17/06/2024 10PM⏱</h4>

        <h4>🥈Premio moto outlook 2024 0km - 17/06/2024 4PM⏱</h4>

        <h4>🥉Premio moto outlook 2024 0km - 17/06/2024 8PM⏱</h4>

        <h4>Compras de 2 tickets en adelante</h4>

        <p className="infoP">
          Todos los resultados seran tomados de la loteria super gana de la
          familia de la loteria tachira (en sus honorarios correspondientes)
        </p>

        <p className="awardsP">🏅Premios:</p>

        <ol type="1">
          <li>
            <h4>🥇Toyota corolla 2024 0km - 17/06/2024 10PM⏱</h4>
          </li>
          <li>
            <h4>🥈Premio moto outlook 2024 0km - 17/06/2024 4PM⏱</h4>
          </li>
          <li>
            <h4>🥉Premio moto outlook 2024 0km - 17/06/2024 8PM⏱</h4>
          </li>
        </ol>

        <h6>📅Fecha del sorteo:</h6>
        <p>17-06-2024</p>

        <button className="purcharse">Comprar Boletos</button>

        <WhatsappBtn />
      </div>
      <div className="home-section">
        <h1>Toyota corolla 2024 0km y 2 motos ek outlook 2024 0km</h1>
        {/* loadingBar */}
        <div className="ticketPurcharse">
          <h5>Ingrese la cantidad de boletos a comprar</h5>
          <div className="numberCheck">
            <button onClick={removeNumber}>-</button>
            <h3>{Count}</h3>
            <button onClick={addNumber}>+</button>
          </div>
          <h5>
            Cantidad minima permitida: <strong>2</strong>
          </h5>
          <div className="buttondiv">
            <button>Comprar</button>
          </div>
        </div>
      </div>
    </>
  );
}
