import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/Leadup/GW/3000x1200_main_1x._CB409438475_.jpg"
        alt=" amazon banner "
        className="home__image"
      />
      {/* product id , title , image , rating ,price */}
      {/* product */}
      <div className="home__products">
        <div className="home__row">
          <Product
            id="1"
            title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey"
            image="https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_UY218_.jpg"
            rating={4}
            price={189905}
          />
          <Product
            id="12"
            title="Apple iPad (Wi-Fi, 32GB) - Gold (6th Generation)"
            image="https://m.media-amazon.com/images/I/51Y5NYmG81L._AC_UY218_.jpg"
            rating={3}
            price={25999}
          />
        </div>
        <div className="home__row">
          <Product
            id="123"
            title="Apple iPhone 11 Pro Max (64GB) - Midnight Green"
            image="https://m.media-amazon.com/images/I/61ers6OzvUL._AC_UY218_.jpg"
            rating={4}
            price={117100}
          />
          <Product
            id="1112"
            title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
            image="https://m.media-amazon.com/images/I/71EoGntO5bL._AC_UL320_.jpg"
            rating={4}
            price={23900}
          />
          <Product
            id="122"
            title="SAVYA HOME APEX Apollo Chrome Base High Back Engineered Plastic Frame Office Chair"
            image="https://m.media-amazon.com/images/I/71cfvQqlTtL._AC_UL320_.jpg"
            rating={4}
            price={6490}
          />
        </div>
        <div className="home__row">
          <Product
            id="156"
            title="LG 43UD79T 43 UHD/4K (3840x2160) IPS Monitor, HDCP 2.2, DP, HDMI 2.0, USB-C, Flicker Free, 4xPBP, Game Mode"
            image="https://images-na.ssl-images-amazon.com/images/I/41X5xC1BbbL.jpg"
            rating={4}
            price={28990}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
