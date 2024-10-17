"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

export default function Product() {
  const [arrData, setArrData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:4000/products");
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setArrData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="products flex">
      {arrData.map((item) => (
        <article title={item.title} key={item.id} className="card">
          <Link href={`/product-details/${item.id}`}>
            <Image
              width={266}
              height={255}
              quality={100}
              src={item.productImg}
              alt={item.title}
            />
          </Link>
          <div style={{ width: 266 }} className="content">
            <h1 className="title">{item.title.slice(0, 30)}</h1>
            <p className="description">{item.description.slice(0, 120)}...</p>
            <div className="flex" style={{ justifyContent: "space-between", paddingBottom: "0.7rem" }}>
              <div className="price">{item.price}$</div>
              <button className="add-to-cart flex">
                <FontAwesomeIcon icon={faCartPlus} style={{ width: ".8rem" }} />
                Add To Cart
              </button>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
