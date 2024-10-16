import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";
import "./product-details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { notFound } from "next/navigation";
async function getData(id) {
  // await new Promise(resolve => setTimeout(resolve,3000))
  const res = await fetch(`http://localhost:4000/products/${id}`, {
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) {
    notFound()
  }

  return res.json();
}

export default async function Page({ params }) {
  const product = await getData(params.id);

  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        alignItems: "center",
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <Header />
      <main style={{ textAlign: "center" }} className="flex">
        <img alt="product-img" src={`.${product.productImg}`} />
        <div className="product-details">
          <div style={{ justifyContent: "space-between" }} className="flex">
            <h2>{product.title}</h2>
            <p className="price">{product.price}$</p>
          </div>
          <p className="description">{product.description}</p>
          <button className="flex add-to-cart">
            <FontAwesomeIcon
          className="fa-solid faCartPlus" 
          style={{ width: "1rem", marginRight: "0.3rem" }}
          icon={faCartPlus}
        />
            Add To Cart
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
