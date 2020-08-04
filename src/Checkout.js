import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h1>your basket is empty</h1>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">
              you have thsese {basket?.length} products in your basket
            </h2>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
              />
            ))}
          </div>
        )}
      </div>
      <div className="checkout__subTotal">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
