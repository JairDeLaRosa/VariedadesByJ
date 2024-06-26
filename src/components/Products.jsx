import React from "react";
import { Card } from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow } from "./NextArrow";
import { PrevArrow } from "./PrevArrow";
import { ModalProduct } from "./ModalProduct";
import ModalCart from "./ModalCart";
import { products } from "../Data/Products";

export const Products = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <ModalProduct />
      <ModalCart />
      <h2 className="text-center mt-3 variedadesByJ">Ofertas</h2>
      <div className="w-100">
        <Slider {...settings} className="slider">
          {products.map((produc) => (
            <Card
              img={produc.img}
              name={produc.nombre}
              precio={produc.precio}
              unidades={produc.unidades}
            />
          ))}
        </Slider>
      </div>
      <h2 className="text-center mt-3 variedadesByJ">Mas vendidos</h2>
      <div className="w-100">
        <Slider {...settings} className="slider">
          <Card />
        </Slider>
      </div>
      <h2 className="text-center mt-3 variedadesByJ">Papelería</h2>
      <div className="w-100">
        <Slider {...settings} className="slider">
          <Card />
        </Slider>
      </div>
      <h2 className="text-center mt-3 variedadesByJ">Piñatería</h2>
      <div className="w-100">
        <Slider {...settings} className="slider">
          <Card />
        </Slider>
      </div>
      <h2 className="text-center mt-3 variedadesByJ">Moda</h2>
      <div className="w-100">
        <Slider {...settings} className="slider">
          <Card />
          <Card />
        </Slider>
      </div>
    </>
  );
};
