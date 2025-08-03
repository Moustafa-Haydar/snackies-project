import React from "react";
import "./style.css";
import Button from "../../Components/Button/Button";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CheckoutCardInput from "../../Components/CheckoutCardInput/CheckoutCardInput";

const Checkout = () => {
  return (
    <div>
      <Header />

      <main className="flex checkout-page">
        <div className="flex column checkout-page-inner">
          <h1 className="checkout-page-inner-titles">Checkout</h1>

          <h3 className="checkout-page-inner-titles">Payment Method</h3>

          <div className="flex checkout-page-inner-inner">
            <section className="flex column checkout-payment-card">
              <div className="flex payment-card-header"></div>

              <div className="flex flex-center payment-card-body">
                <article className="flex column payment-card-details">
                  <CheckoutCardInput label={"Card Number"} inputWidth={"wide-input"} />

                  <div className="flex">
                    <CheckoutCardInput label={"Expiry Date"} inputWidth={"narrow-input"} />

                    <CheckoutCardInput label={"CVC/CVV"} inputWidth={"narrow-input"} />
                  </div>

                  <CheckoutCardInput label={"Name on Card"} inputWidth={"wide-input"} />
                </article>
              </div>
            </section>

            <section className="flex column checkout-summary">
              <h2>Order Summary</h2>

              <p>Original Price:</p>

              <h3>Total:</h3>

              <Button btn_name={"Pay"} />
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
