import React, { useState, useEffect } from "react";
import WhatsappBtn from "./WhatsappBtn";
import mpIcon from "../assets/mp.png";

export default function Section() {
  const [Count, setCount] = useState(2);
  const [FirstStep, setFirstStep] = useState(false);
  const [Purcharse, setPurcharse] = useState(false);
  const [payMethod, setPayMethod] = useState(false);
  const [InfoPay, setInfoPay] = useState(false);
  const [buyingAction, setBuyingAction] = useState(false);

  const [timeLeft, setTimeLeft] = useState(900); // 900 segundos = 15 minutos

  // 15m functionality with hooks
  useEffect(() => {
    if (!buyingAction) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalId);
          setBuyingAction(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [buyingAction]);

  //formateo de tiempo para mostrar

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  // hardcode values
  const ticketValue = 14;
  const finalPrice = Count * ticketValue;

  // changeNumbers funcs
  function addNumber() {
    setCount(Count + 1);
  }
  function removeNumber() {
    setCount(Count - 1);
  }

  // change inputValue escribiendo o con las funciones
  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setCount(value);
    } else {
      setCount(0);
    }
  };

  // ventanas emergentes
  function buyButton() {
    setFirstStep(true);
  }
  function ChoosePayMethod() {
    setPurcharse(false);
    setPayMethod(true);
  }
  function backStep() {
    setInfoPay(false);
    setPayMethod(true);
  }
  function payMethodSelected() {
    setPayMethod(false);
    setInfoPay(true);
  }
  function backStepInPaymentCheck() {
    setInfoPay(true);
    setBuyingAction(false);
  }

  function CancelPurcharse() {
    setFirstStep(false);
    setPurcharse(false);
    setPayMethod(false);
    setInfoPay(false);
    setBuyingAction(false);
  }
  function sendPurcharse() {
    console.log("compra de ticketes enviada, cantidad de tickets: " + Count);
    setPurcharse(true);
    setFirstStep(false);
  }

  // abre ventana final y detiene el refresh de pagina
  const FinalStep = (event) => {
    event.preventDefault();

    setInfoPay(false);
    setBuyingAction(true);
  };

  // ventanas emergentes

  return (
    <>
      <div className="sectionContainer">
        <WhatsappBtn />
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

          <ol type="1" className="home-section-li ">
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

          <a href="#top">
            <button className="purcharse" onClick={buyButton}>
              Comprar Boletos
            </button>
          </a>
        </div>

        <div className={FirstStep ? "buy-section-active" : "buy-section"}>
          <h1>Toyota corolla 2024 0km y 2 motos ek outlook 2024 0km</h1>
          {/* loadingBar */}
          <div className="ticketPurcharse">
            <h5>Ingrese la cantidad de boletos a comprar</h5>
            <div className="numberCheck">
              <button onClick={removeNumber}>-</button>
              <input
                type="text"
                onChange={handleChange}
                value={Count}
                className="inputNumber"
              />
              <button onClick={addNumber}>+</button>
            </div>
            <h5>
              Cantidad minima permitida: <strong>2</strong>
            </h5>
            <div className="buttondiv">
              <input type="submit" value="Comprar" onClick={sendPurcharse} />
              <input type="submit" value="Cancelar" onClick={CancelPurcharse} />
            </div>
          </div>
        </div>
        <div
          className={
            Purcharse ? "purcharse-section-active" : "purcharse-section"
          }
        >
          <div className="headerText">
            <h1>Toyota corolla 2024 0km y 2 motos ek outlook 2024 0km</h1>
            <p>Fecha del Sorteo: 2024-06-17</p>
          </div>
          <div className="payInfo">
            <h6>Precio por boleto: {ticketValue}$</h6>
            <h6>Total de boletos a comprar: {Count}</h6>
            <h6>Tasa de cambio: 8CV del 2024-08-15:36</h6>
          </div>
          <h4 className="totalPrice">Total a pagar: {finalPrice}$</h4>
          <div className="TermsInfo">
            <h6>
              Al presionar comprar aceptas nuestros terminos y condiciones
            </h6>
            <a href="htts://www.wikipedia.com">Terminos y condiciones</a>
          </div>
          <div className="actionsContainer">
            <button onClick={CancelPurcharse}>Cancelar</button>
            <button onClick={ChoosePayMethod}>Continuar</button>
          </div>
        </div>

        <div className={payMethod ? "payMethod-active" : "payMethod"}>
          <h2>Seleccione un metodo de pago</h2>
          <button className="payMethodBtn" onClick={payMethodSelected}>
            <img src={mpIcon} alt="" />
          </button>
          <div className="actionsContainerPayMethod">
            <button onClick={CancelPurcharse}>Cancelar</button>
          </div>
        </div>

        <div className={InfoPay ? "infoPay-active" : "infoPay"}>
          <div className="headerText">
            <h1>Toyota corolla 2024 0km y 2 motos ek outlook 2024 0km</h1>
            <p>Fecha del Sorteo: 2024-06-17</p>
          </div>
          <h2>Datos del comprador</h2>
          <form action="" className="formContainer" onSubmit={FinalStep}>
            <label for="name">Nombre Completo del Comprador:</label>
            <input type="text" name="name" id="name" required />

            <label for="email">Correo Comprador:</label>
            <input type="email" name="email" required />

            <label for="dni">Cedula de indentidad:</label>
            <input type="text" name="dni" required />

            <label for="phone">Numero de telefono:</label>
            <input type="text" name="phone" required />

            <input type="submit" />
          </form>
          <div className="actionsContainerCheck">
            <button onClick={CancelPurcharse}>Cancelar</button>
            <button onClick={backStep}>Regresar</button>
          </div>
        </div>

        <div className={buyingAction ? "buyingAction-active" : "buyingAction"}>
          <div className="headerText">
            <h1>Toyota corolla 2024 0km y 2 motos ek outlook 2024 0km</h1>
            <p>Fecha del Sorteo: 2024-06-17</p>
          </div>
          <h2>Realizar Pago</h2>
          <div className="infoPayment">
            <p>
              Tendra 15 minutos para realizar el pago de lo contrario la
              operacion se cancelara.
            </p>
            <p>
              Debe realizar el pago desde el banco de su preferencia en los
              siguientes
            </p>
            <p>{formatTime(timeLeft)}</p>
          </div>
          <div className="paymentData">
            <p>
              Por favor realice el pago movil con los datos suministrados a
              continuacion y luego llene los datos solicitados para procesar su
              compra
            </p>
            <h2>Datos del Beneficiario:</h2>

            <h3>Movil Beneficiario:</h3>
            <p>0853-432 34 34</p>

            <h3>C.I. Beneficiario:</h3>
            <p>v-34.545.753</p>

            <h3>Banco de Destino:</h3>
            <p>Banco nacional de yapeyu</p>

            <h3>Tasa de cambio:</h3>
            <p>35.4176 BS.</p>

            <h4>Monto a Pagar:</h4>
            <h3>${finalPrice}</h3>

            <h5>
              (TRANFIERA EL <strong>MONTO ESTABLECIDO</strong> INCLUIDOS LOS
              CENTIMOS)
            </h5>
          </div>
          <div className="FormPayment">
            <h2>Cargar los Datos de la Transferencia Aqui:</h2>
            <div className="UploadPaymentData">
              <label for="name">Numero de Referencia:</label>
              <input type="text" name="name" id="name" required />

              <label for="date">Fecha de Pago:</label>
              <input type="date" name="date" id="date" required />

              <label for="file">Comprobante de Pago:</label>
              <input type="file" />

              <input type="submit" value={"Finalizar la Compra"} />
            </div>
            <div className="actionsContainerCheck">
              <button onClick={CancelPurcharse}>Cancelar</button>
              <button onClick={backStepInPaymentCheck}>Regresar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
