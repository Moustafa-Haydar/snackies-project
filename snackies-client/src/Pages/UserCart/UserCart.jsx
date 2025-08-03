import React, { useContext, useEffect, useRef, useState } from "react";

import "./style.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Button from "../../Components/Button/Button";
import CartItem from "../../Components/CartItem/CartItem";
import { TokenContext } from "../../Contexts/TokenContext";
import TokenController from "../../Controllers/TokenController";
import CartController from "../../Controllers/CartController";

const UserCart = () => {
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const { tokenState } = useContext(TokenContext);
  const [userState, setUserState] = useState(null);

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      // Your useEffect code here to be run on update
      fetchCart();
    }
  }, [userState]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      // Your useEffect code here to be run on update
      calculateTotal();
    }
  }, [cartItems]);

  useEffect(() => {
    TokenController.decodeToken(tokenState, setUserState);
  }, [tokenState]);

  const fetchCart = () => {
    CartController.getCart(userState.id, setCartItems);
  };

  const calculateTotal = () => {
    let tempTotal = 0;

    cartItems.forEach((item) => {
      console.log(item.price);
      tempTotal += parseFloat(item.price);
    });

    setTotal(tempTotal);
  };

  return (
    <div>
      <Header />

      <div className="flex user-cart-page">
        <div className="flex column inner-cart-page">
          <h1 className="inner-cart-page-title">Shopping Cart</h1>
          <div className="flex inner-cart-info">
            <div className="flex column cart-item-cards">
              {cartItems.map((item) => {
                return (
                  <CartItem
                    itemTitle={item.name}
                    itemPrice={item.price}
                    itemQuantity={item.quantity}
                  />
                );
              })}
            </div>

            <div className="flex column cart-total">
              <h3>Total:</h3>

              <h1>${total}</h1>

              <Button btn_name={"Proceed to Checkout →"} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserCart;
