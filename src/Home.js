import React from 'react';
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
           <div className="home__container">
               <img className="home__image"
         src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="" />
           


           <div className="home__row">
              <Product 
              id="12429332"
              title="Marvel's Spider-Man: Miles Morales Ultimate Launch Edition – PlayStation 5"
              price={69.88}
              image="https://images-na.ssl-images-amazon.com/images/I/71bqboqDUiL._AC_UL320_SR266,320_.jpg"
              rating={3}
              />
               <Product
               id="12429334"
               title="Apple 16' MacBook Pro with Touch Bar, 9th-Gen 8-Core Intel i9 2.4GHz, 32GB RAM, 512GB SSD, AMD Radeon Pro 5300M 4GB, Space Gray, Late 2019 "
               image="https://images-na.ssl-images-amazon.com/images/I/61qNHbx9LDL._AC_SX425_.jpg"
               price={3099}
               rating={4}
              />

             
           </div>

           <div className="home__row">
           <Product
               id="12429333"
               title="PlayStation 5 Console"
               image="https://m.media-amazon.com/images/I/619BkvKW35L._AC_UY218_.jpg"
               price={800}
               rating={3}
              />
            <Product
               id="12429335"
               title="New Apple iPhone 12 Pro Max (128GB, Graphite) [Locked] + Carrier Subscription"
               image="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro-max-.jpg"
               price={999}
               rating={4}
              />

<Product
             id="12429336"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
           </div>
           
           
           <div className="home__row">
           <Product
             id="12429337"
            title="SAMSUNG QN32Q50RAFXZA Flat 32' QLED 4K 32Q50 Series Smart TV"
            price={497.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51NKhnjhpGL._AC_SX569_.jpg"
          />
           </div>
           
           </div>
        </div>
    );
}

export default Home
