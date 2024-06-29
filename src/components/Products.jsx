import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow } from "./NextArrow";
import { PrevArrow } from "./PrevArrow";
import { ModalProduct } from "./ModalProduct";
import ModalCart from "./ModalCart";
import { products } from "../Data/Products";

export const Products = ({ producsSearch }) => {
  const [producModal,setProductModal]=useState([])
  let search = [];
  let papeleria = [];
  let piñateria = [];
  if (producsSearch != null) {
    search = producsSearch;
  }
const a=()=>{
  for (let index = 0; index < products.length; index++) {
    const element = products[index].tienda;
    if (element === "papeleria") {
      papeleria.push(products[index]);
    } else if (element === "piñateria") {
      piñateria.push(products[index]);
    }
  }

}
    
  const onClickCard=(produc)=>{
    setProductModal(produc)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
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
    {a()}
      <ModalProduct product={producModal}/>
      <ModalCart />
      <div className="w-100 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {search.map((produc) => (
          <div className="col">
            <Card
              produc={produc}
              onClick={onClickCard}
            />
          </div>
        ))}
      </div>
      <h2 className="text-center mt-3 misCompras">Ofertas</h2>
      <div className="w-100">
        <Slider {...settings} className="slider">
          {products.map((produc) => (
            <Card
            produc={produc}
            onClick={onClickCard}
            />
          ))}
        </Slider>
      </div>
      <h2 className="text-center mt-3 misCompras">Mas vendidos</h2>
      <div className="w-100">
        <Slider {...settings} className="slider">
          {products.map((produc) => (
            <Card
            produc={produc}
            onClick={onClickCard}
            />
          ))}
        </Slider>
      </div>
      <h2 className="text-center mt-3 misCompras">Papelería</h2>
      <div className="w-100">
        <Slider {...settings} className="slider">
          {papeleria.map((produc) => (
            <Card
            produc={produc}
            onClick={onClickCard}
            />
          ))}
        </Slider>
      </div>
      <h2 className="text-center mt-3 misCompras">Piñatería</h2>
      <div className="w-100">
        <Slider {...settings} className="slider">
          {piñateria.map((produc) => (
            <Card
            produc={produc}
            onClick={onClickCard}
            />
          ))}
        </Slider>
      </div>
    </>
  );
};
