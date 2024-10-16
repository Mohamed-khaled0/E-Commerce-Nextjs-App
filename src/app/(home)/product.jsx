import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import next from "next";

// const arr = [
//     {productImg:'./images/1.png'},
//    { productImg:'./images/2.webp'},
//    { productImg:'./images/3.webp'},
//    { productImg:'./images/4.webp'},
//    { productImg:'./images/5.webp'},
//    { productImg:'./images/6.webp'},
//    { productImg:'./images/7.webp'},
//    { productImg:'./images/8.png'},
// ]

async function getData() {
    await new Promise(resolve => setTimeout(resolve, 2000))
  const res = await fetch("http://localhost:4000/products", {
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Product() {
  const data = await getData();

  return (
    <section className="products flex">
      {data.map((item) => {
        return (
          <article title={item.title} key={data.id} className="card">
            <a href="/pages/product-details.html">
              <img width={266} height={255} src={item.productImg} alt="" />
            </a>
            <div style={{ width: 266 }} className="content">
              <h1 className="title">{item.title.slice(0, 30)}</h1>
              <p className="description">{item.description.slice(0, 120)}...</p>
              <div
                className="flex"
                style={{
                  justifyContent: "space-between",
                  paddingBottom: "0.7rem",
                }}
              >
                <div className="price">{item.price}$</div>
                <button className="add-to-cart flex">
                  <FontAwesomeIcon
                    className="fa-solid fa-cart-plus"
                    icon={faCartPlus}
                    style={{ width: ".8rem" }}
                  />
                  Add To Cart
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
