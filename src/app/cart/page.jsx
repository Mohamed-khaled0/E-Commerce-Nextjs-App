// src/app/cart/page.jsx

"use client"; // Add this line to make the component a Client Component

import React, { useState } from 'react';
import './cart.css';
import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';
import Image from 'next/image';
import Link from 'next/link';

 const metadata = {
  title: "Cart Page",
  description: 'Cart Page',
};

export default function Page() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Product Title 1",
      price: 133,
      quantity: 3,
      image: "/images/4.webp",
    },
    {
      id: 2,
      title: "Product Title 2",
      price: 133,
      quantity: 3,
      image: "/images/6.webp",
    },
    {
      id: 3,
      title: "Product Title 3",
      price: 133,
      quantity: 3,
      image: "/images/5.webp",
    },
  ]);

  const handleIncrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();

  return (
    <div style={{
      height: "100vh",
      display: "grid",
      alignItems: "center",
      gridTemplateRows: "auto 1fr auto",
    }}>
      <Header />
      <main style={{ textAlign: "center" }}>
        <section className="cart">
          {cartItems.map((item) => (
            <article key={item.id} className="product flex">
              <button onClick={() => handleRemove(item.id)}>
                <i className="fa-solid fa-trash-can"></i>
              </button>
              <p className="price">${item.price}</p>
              <div className="flex" style={{ marginRight: "1rem" }}>
                <button className="decrease" onClick={() => handleDecrease(item.id)}>-</button>
                <div className="quantity flex">{item.quantity}</div>
                <button className="increase" onClick={() => handleIncrease(item.id)}>+</button>
              </div>
              <p className="title">{item.title}</p>
              <Image
                style={{ borderRadius: "0.22rem" }}
                width={70}
                height={70}
                quality={100}
                alt={item.title}
                src={item.image}
              />
            </article>
          ))}
        </section>
        <button className="clear" onClick={handleClearCart}>
          <i style={{ color: "#fff", marginRight: "0.2rem" }} className="fa-solid fa-trash-can icon"></i>
          Clear Cart
        </button>
        <section className="summary">
          <h1>Cart Summary</h1>
          <div className="flex">
            <p className="Subtotal">Subtotal</p>
            <p>${subtotal}</p>
          </div>
          <button disabled={cartItems.length === 0} className="checkout">
            CHECKOUT
          </button>
          <Link href="/signin"> Please Sign in to continue. </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
