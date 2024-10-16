import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import next from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getData() {
    // await new Promise(resolve => setTimeout(resolve,3000))
  const res = await fetch("http://localhost:4000/products", {
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) {
    notFound()
  }

  return res.json();
}
export default async function Product() {
  const arrData = await getData();

  return (
    <section className="products flex">
      {arrData.map((item) => {
        return (
          <article title={item.title} key={arrData.id} className="card">
            <Link href={`/product-details/${item.id}`}>
              <img width={266} height={255} src={item.productImg} alt="" />
            </Link>
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
