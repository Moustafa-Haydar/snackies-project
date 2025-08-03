import React, { useState } from "react";
import "./style.css";
import Button from "../../Components/Button/Button";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CheckoutCardInput from "../../Components/CheckoutCardInput/CheckoutCardInput";
import headerIcon from "../../Assets/Icons/card-header-icon.svg";
import cardBrands from "../../Assets/Icons/credit-cards.svg";

const Checkout = () => {
  const [cardNum, setCardNum] = useState();
  const [expiryDate, setExpiryDate] = useState();
  const [extraCode, setExtraCode] = useState();
  const [nameCard, setNameCard] = useState();

  const savePayment = () => {
    const paymentDetails = { cardNum, expiryDate, extraCode, nameCard };

    console.log(paymentDetails);
  };

  return (
    <div>
      <Header />

      <main className="flex checkout-page">
        <div className="flex column checkout-page-inner">
          <h1 className="checkout-page-inner-titles">Checkout</h1>

          <h3 className="checkout-page-inner-titles">Payment Method</h3>

          <div className="flex checkout-page-inner-inner">
            <section className="flex column checkout-payment-card">
              <div className="flex payment-card-header">
                <article className="flex">
                  <img
                    className="header-icon"
                    src={headerIcon}
                    alt="Card Header"
                  ></img>

                  <h3>Cards</h3>
                </article>

                <img className="card-icon" src={cardBrands} alt="Brands"></img>
              </div>

              <div className="flex flex-center payment-card-body">
                <article className="flex column payment-card-details">
                  <CheckoutCardInput
                    label={"Card Number"}
                    inputWidth={"wide-input"}
                    setField={setCardNum}
                  />

                  <div className="flex">
                    <CheckoutCardInput
                      label={"Expiry Date"}
                      inputWidth={"narrow-input"}
                      setField={setExpiryDate}
                    />

                    <CheckoutCardInput
                      label={"CVC/CVV"}
                      inputWidth={"narrow-input"}
                      setField={setExtraCode}
                    />
                  </div>

                  <CheckoutCardInput
                    label={"Name on Card"}
                    inputWidth={"wide-input"}
                    setField={setNameCard}
                  />
                </article>
              </div>
            </section>

            <section className="flex column checkout-summary">
              <h2>Order Summary</h2>

              <div className="flex space-beween divider">
                <p>Original Price:</p>
                <p>$199</p>
              </div>

              <div className="flex space-beween">
                <h3>Total:</h3>
                <h3>$199</h3>
              </div>

              <div className="flex payment-button">
                <Button btn_name={"Pay $199"} onClick={savePayment}/>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
