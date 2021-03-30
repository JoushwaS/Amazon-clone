import React from "react";
import BannerSlider from "./BannerSlider";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        {/* <BannerSlider/> */}
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4564789"
            title="iOttie Easy One Touch 4 Dash & Windshield Car Mount Phone Holder Desk Stand Pad & Mat for iPhone, Samsung, Moto, Huawei, Nokia, LG, Smartphones"
            price={24.95}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/718NVofDrCL._AC_SL1500_.jpg"
          />
          <Product
            id="4521786"
            title="Willful Smart Watch for Android Phones and iOS Phones Compatible iPhone Samsung, IP68 Swimming Waterproof Smartwatch Fitness Tracker Fitness Watch Heart Rate Monitor Smart Watches for Men Women Green"
            price={28.79}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61CAmyJBxBL._AC_SL1000_.jpg"
          />
          <Product
            id="9638521"
            title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode"
            price={364.99}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
          />
          <Product
            id="8521478"
            title="
            OMEN X 2S by HP 2019 15-inch Gaming Laptop With Secondary Touchscreen Display, Intel i7-9750H, NVIDIA RTX 2070 With Max-Q 8 GB, 16 GB RAM, 512 GB SSD, VR/MR"
            price={2660.06}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/715-zfPfltL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="7854963 "
            title="
            Acer Predator Galea 310 True Harmony Sound Gaming Headset: 40mm Drivers - Rotatable Omni-Directional Mic - Black, One size"
            price={43.08}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61%2BvOAW%2BUPL._AC_SL1200_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
