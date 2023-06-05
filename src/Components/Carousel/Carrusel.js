import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carrusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
      <Slider className="slider" {...settings}>
        <div className="img2">
          <img
            className="img"
            src="https://images.dunelm.com/30791857.jpg?$standardplayerdefault$&img404=noimagedefault"
            alt="cafetera francesa con aza "
          />
        </div>
        <div className="img2">
          <img
            className="img"
            src="https://img.freepik.com/vector-premium/cafetera-italiana_47649-210.jpg"
            alt="cafetera italiana"
          />
        </div>
        <div className="img2">
          <img
            className="img"
            src="https://i.ebayimg.com/images/g/gsIAAOSwnR5j~2nk/s-l500.jpg"
            alt="cafetera doble"
          />
        </div>
        <div className="img2">
          <img
            className="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhcaGp-BK6ncBrJl_Wk-cNd5qNYsHCWqhssaWq2Lm8czu0vG1oyHcLaKeryaTw2DeCcnU&usqp=CAU"
            alt="cafetera vidrio"
          />
        </div>
        <div className="img2">
          <img
            className="img"
            src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/130/674/products/cafe-360-granos1-3e1953a309fbef0e2016370020666710-640-0.webp"
            alt="cafe verde"
          />
        </div>
        <div className="img2">
          <img
            className="img"
            src="https://www.ikea.com/gb/en/images/products/gladelig-mug-grey__0800258_pe767830_s5.jpg?f=xl"
            alt="taza"
          />
        </div>
        <div className="img2">
          <img
            className="img"
            src="https://www.modobarista.com/product_images/o/534/combo_delter_y_catuai__97659_zoom.jpg"
            alt="cafetera filtro"
          />
        </div>
        <div className="img2">
          <img
            className="img"
            src="https://www.jugarijugar.com/23405-large_default/molinillo-para-cafe.jpg"
            alt="molinillo de café"
          />
        </div>
        <div className="img2">
          <img
            className="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyEeftIngxnKyQYXY2kBnNcl95zdb7LEULQA&usqp=CAU"
            alt="cafetera negra"
          />
        </div>
        <div className="img2">
          <img
            className="img"
            src="https://ruffocoffee.com/wp-content/uploads/2023/04/Mas-fotos-productos-web-2023-04-11T154151.566.png"
            alt="cafe ruffo"
          />
        </div>
      </Slider>
  );
};

export default Carrusel;