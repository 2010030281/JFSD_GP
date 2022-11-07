import React from "react";
import "./Home.css";
import Product from "./Product";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LineStyle } from "@material-ui/icons";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <video autoPlay loop muted id='video'>
          <source src='sls.mp4' type='video/mp4'/>
        </video>
        
        <div className="home__row">
          
        </div>
        <div className="home__row">
          
          <Product
            id="12321341"
            title="Man Utd Home Kit"
            price={11.96}
            rating={5}
            image="https://images.footballfanatics.com/manchester-united/manchester-united-home-shirt-2022-23_ss4_p-13307715+u-5muuro76i0kukjj2r392+v-a22955b33acc4d29b6e5e72c3d4821c1.jpg?_hv=2&w=340"
          />
          
          <Product
            id="49538094"
            title="Man Utd Away Kit"
            price={23.0}
            rating={4}
            image="https://images.footballfanatics.com/manchester-united/manchester-united-away-authentic-shirt-2022-23_ss4_p-13307707+u-vtowsabcbujun2vbhc5x+v-56a1e81954f14f90a3f866183014b04d.jpg?_hv=2&w=340"
          />
        </div>

        <div className="home__row" >
            <Product
              id="4903850"
              title="FitBit"
              price={199.99}
              rating={3}
              image="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f823631c5efa4f0d8a33ae9b011662f4_9366/X_Speedportal.3_Laceless_Firm_Ground_Boots_Blue_GW8470_06_standard.jpg"
          />
          
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/aea90a72-d19c-45fa-9751-61c11593ee1d/liverpool-fc-2021-22-stadium-home-football-shirt-gcNpBV.png"
          />
          <Product
            id="3254354345"
            title="Nike Zoom Mercurial Vapor 15 Academy KM TF"
            price={5.99}
            rating={5}
            image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ce64f335-a4e1-4444-a436-7a02226dc4ba/zoom-mercurial-vapor-15-academy-km-tf-football-shoes-jQPhDm.png"
          />
        </div>

        <div className="home__row" >
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8df43bb4-e9a8-41d8-84d1-326202d2eecb/zoom-mercurial-superfly-9-elite-cr7-fg-football-boot-NBx17c.png"
          />
          <Product
            id="90829352"
            title="FIFA 22
             
            Best Way to waste your money"
            price={40.98}
            rating={4}
            image="https://media.contentapi.ea.com/content/dam/gin/images/2022/07/eas-fifa22-gen5-ue-keyart-horz-f23logo.jpg.adapt.crop1x1.767w.jpg"
          />
          <Product
            id="90829654"
            title="FIFA 23
            Another  Best Way to waste your money"
            price={49.99}
            rating={3}
            image="https://media.contentapi.ea.com/content/dam/gin/images/2021/07/fifa22-key-art.jpg.adapt.crop1x1.767w.jpg"
          />
        </div>
      
          
      </div>
    </div>
  );
}
const running = () => {
  return (
    <div className="home">
      <div className="home__container">
        <video autoPlay loop muted id='video'>
          <source src='bsd.mp4' type='video/mp4'/>
        </video>

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

        <div className="home__row" >
            <Product
              id="4903850"
              title="FitBit"
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
            title="SEWY"
            price={5.99}
            rating={5}
            image="https://media.tenor.com/TM0Xkja0docAAAAi/cr7-si.gif"
          />
        </div>

        <div className="home__row" >
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          <Product
            id="90829352"
            title="FIFA 22
             
            Best Way to waste your money"
            price={40.98}
            rating={4}
            image="https://media.contentapi.ea.com/content/dam/gin/images/2022/07/eas-fifa22-gen5-ue-keyart-horz-f23logo.jpg.adapt.crop1x1.767w.jpg"
          />
          <Product
            id="90829654"
            title="FIFA 23
            Another  Best Way to waste your money"
            price={49.99}
            rating={3}
            image="https://media.contentapi.ea.com/content/dam/gin/images/2021/07/fifa22-key-art.jpg.adapt.crop1x1.767w.jpg"
          />
        </div>
      
          
      </div>
    </div>
  );
};
export default Home;
