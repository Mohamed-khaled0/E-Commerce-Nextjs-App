import React from 'react'
import './cart.css'
import Header from '../../components/footer/Footer.jsx';
import Footer from '../../components/footer/Footer.jsx';

export const metadata = {
    title: "Cart Page",
    description:'Cart Page',
  };
export default function Page() {
  return (
    <div style={{
        height: "100vh",
        display: "grid",
        alignItems: "center",
        gridTemplateRows: "auto 1fr auto",
      }}>
        <Header/>
        <main style={{ textAlign: "center" }} className="">
  <section className="cart">
    <article className="product flex">
      <button>
        <i className="fa-solid fa-trash-can"> </i>
      </button>
      <p className="price">$133</p>
      <div className="flex" style={{ marginRight: "1rem" }}>
        <button className="decrease">-</button>
        <div className="quantity flex">3</div>
        <button className="increase">+</button>
      </div>
      <p className="title">Product Title</p>
      <img
        style={{ borderRadius: "0.22rem" }}
        width={70}
        height={70}
        alt=""
        src="../images/4.webp"
      />
    </article>
    <article className="product flex">
      <button>
        <i className="fa-solid fa-trash-can"> </i>
      </button>
      <p className="price">$133</p>
      <div className="flex" style={{ marginRight: "1rem" }}>
        <button className="decrease">-</button>
        <div className="quantity flex">3</div>
        <button className="increase">+</button>
      </div>
      <p className="title">Product Title</p>
      <img
        style={{ borderRadius: "0.22rem" }}
        width={70}
        height={70}
        alt=""
        src="../images/6.webp"
      />
    </article>
    <article className="product flex">
      <button>
        <i className="fa-solid fa-trash-can"> </i>
      </button>
      <p className="price">$133</p>
      <div className="flex" style={{ marginRight: "1rem" }}>
        <button className="decrease">-</button>
        <div className="quantity flex">3</div>
        <button className="increase">+</button>
      </div>
      <p className="title">Product Title</p>
      <img
        style={{ borderRadius: "0.22rem" }}
        width={70}
        height={70}
        alt=""
        src="../images/5.webp"
      />
    </article>
  </section>
  <button className="clear">
    <i
      style={{ color: "#fff", marginRight: "0.2rem" }}
      className="fa-solid fa-trash-can icon"
    ></i>
    Clear Cart
  </button>
  <section className="summary">
    <h1>Cart Summary</h1>
    <div className="flex">
      <p className="Subtotal">Subtotal</p>
      <p>$1999</p>
    </div>
    <button disabled="" className="checkout">
      CHECKOUT
    </button>
    <a href="./signin.html"> Please Sign in to continue. </a>
  </section>
</main>
<Footer/>
    </div>
  )
}
