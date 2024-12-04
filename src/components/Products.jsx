import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow } from "./NextArrow";
import { PrevArrow } from "./PrevArrow";
import { ModalProduct } from "./ModalProduct";
import ModalCart from "./ModalCart";
import Swal from "sweetalert2";

export const Products = ({ countCart, products, producsSearch, product, loandingSearch}) => {
  let search = [];
  const [productsCart, setProductsCart] = useState([]);
  const [cantidad, setCantidad] = useState(1);
  const [totalPrecio, setTotalPrecio] = useState(0);
  const onClickAgregarCarrito = (produc) => {
    setProductsCart([...productsCart, produc]);
    setCantidad(1);
    Swal.fire({
      title: "Agregado correctamente",
      icon: "success",
    });
  };
  useEffect(() => {
    console.log(productsCart)
    let total=0;
    for (let index = 0; index < productsCart.length; index++) {
      let element = productsCart[index];
      total=total+ element.precio
    }
    countCart(productsCart.length)
    setTotalPrecio(total);
  }, [productsCart]);
  const [producModal, setProductModal] = useState({"idProducto": null,
        "nombre": null,
        "cantidad": null,
        "costo": null,
        "descripcion": null,
        "costoOferta": null,
        "detalleCompras": [],
        "imagenes": [
            {
                "idImagen": null,
                "url": null
            }
        ],
        "calificaciones": []
      });

  let papeleria = [];
  let piñateria = [];
  search = producsSearch;

  const a = () => {
    for (let index = 0; index < products.length; index++) {
      const element = products[index].categoria;
      if (element.seccion === "Papeleria") {
        papeleria.push(products[index]);
      } else if (element.seccion === "Piñateria") {
        piñateria.push(products[index]);
      }
    }
  };

  const onClickCard = (produc) => {
    setProductModal(produc);
  };
  const settings = {
    centerMode: true,
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "40px",
        },
      },
    ],
  };
  return (
    <>
      {a()}
      <ModalProduct
        product={producModal}
        onClickAgregarCarrito={onClickAgregarCarrito}
        cantidad={cantidad}
        setCantidad={setCantidad}
      />
      <ModalCart productsCart={productsCart} precioTotal={totalPrecio} setProductsCart={setProductsCart}/>
      {loandingSearch?null: product==undefined?null:(<h2 className="text-center mt-3 misCompras">Search: {product}</h2>)}
      {loandingSearch?null: search.length==0?product==undefined?null:<h2>No encontrado</h2>:(
        <>
          {" "}
          
          <div className="w-100" style={{display: "flex", flexWrap: "wrap", gap: "10", justifyContent: "center", alignItems: "center"}}>
            {search.map((produc) => (
              <div>
                <Card produc={produc} onClick={onClickCard} />
              </div>
            ))}
          </div>
        </>
      )}
      <h2 className="text-center mt-3 misCompras">Ofertas</h2>
      <div className="w-100">
        <Slider {...settings} className="slider">
          {products.map((produc) => produc.costoOferta==null?null:(
            <Card produc={produc} onClick={onClickCard} />
          ))}
        </Slider>
      </div>
      <h2 className="text-center mt-3 misCompras">Papelería</h2>
      <div className="w-100">
        <Slider {...settings} className="slider">
          {papeleria.map((produc) => (
            <Card produc={produc} onClick={onClickCard} />
          ))}
        </Slider>
      </div>
      <h2 className="text-center mt-3 misCompras">Piñatería</h2>
      <div className="w-100">
        <Slider {...settings} className="slider">
          {piñateria.map((produc) => (
            <Card produc={produc} onClick={onClickCard} />
          ))}
        </Slider>
      </div>
    </>
  );
};
