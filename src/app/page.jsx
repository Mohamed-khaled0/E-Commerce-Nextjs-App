import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import './home.css'
export default function Home() {
  return (
    <>
      <div className="top-img">
        <Header />
        <section className="content">
          <p className="lifestyle">Lifestyle collection</p>
          <p className="men">MEN</p>
          <p className="sale">
            SALE UP TO <span>30% OFF</span>
          </p>
          <p className="free-shipping">
            Get Free Shipping on orders over $99.00
          </p>
          <button>Shop Now</button>
        </section>
      </div>
      <main className="">
        <h1 className="recommended">
          <i className="fa-solid fa-check" />
          Recommended for you
        </h1>
        <section className="products flex">
          <article className="card">
            <a href="/pages/product-details.html">
              <img width={266} src="./images/1.png" alt="" srcSet="" />
            </a>
            <div style={{ width: 266 }} className="content">
              <h1 className="title">Product Title</h1>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                tempore dolor in, accusantium laudantium accusamus.
              </p>
              <div
                className="flex"
                style={{
                  justifyContent: "space-between",
                  paddingBottom: "0.7rem",
                }}
              >
                <div className="price">$100</div>
                <button className="add-to-cart flex">
                  <i className="fa-solid fa-cart-plus" />
                  Add To Cart
                </button>
              </div>
            </div>
          </article>
          <article className="card">
            <a href="/pages/product-details.html">
              <img width={266} src="./images/2.webp" alt="" srcSet="" />
            </a>
            <div style={{ width: 266 }} className="content">
              <h1 className="title">Product Title</h1>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                tempore dolor in, accusantium laudantium accusamus.
              </p>
              <div
                className="flex"
                style={{
                  justifyContent: "space-between",
                  paddingBottom: "0.7rem",
                }}
              >
                <div className="price">$100</div>
                <button className="add-to-cart flex">
                  <i className="fa-solid fa-cart-plus" />
                  Add To Cart
                </button>
              </div>
            </div>
          </article>
          <article className="card">
            <a href="/pages/product-details.html">
              <img width={266} src="./images/3.webp" alt="" srcSet="" />
            </a>
            <div style={{ width: 266 }} className="content">
              <h1 className="title">Product Title</h1>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                tempore dolor in, accusantium laudantium accusamus.
              </p>
              <div
                className="flex"
                style={{
                  justifyContent: "space-between",
                  paddingBottom: "0.7rem",
                }}
              >
                <div className="price">$100</div>
                <button className="add-to-cart flex">
                  <i className="fa-solid fa-cart-plus" />
                  Add To Cart
                </button>
              </div>
            </div>
          </article>
          <article className="card">
            <a href="/pages/product-details.html">
              <img width={266} src="./images/4.webp" alt="" srcSet="" />
            </a>
            <div style={{ width: 266 }} className="content">
              <h1 className="title">Product Title</h1>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                tempore dolor in, accusantium laudantium accusamus.
              </p>
              <div
                className="flex"
                style={{
                  justifyContent: "space-between",
                  paddingBottom: "0.7rem",
                }}
              >
                <div className="price">$100</div>
                <button className="add-to-cart flex">
                  <i className="fa-solid fa-cart-plus" />
                  Add To Cart
                </button>
              </div>
            </div>
          </article>
          <article className="card">
            <a href="/pages/product-details.html">
              <img width={266} src="./images/5.webp" alt="" srcSet="" />
            </a>
            <div style={{ width: 266 }} className="content">
              <h1 className="title">Product Title</h1>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                tempore dolor in, accusantium laudantium accusamus.
              </p>
              <div
                className="flex"
                style={{
                  justifyContent: "space-between",
                  paddingBottom: "0.7rem",
                }}
              >
                <div className="price">$100</div>
                <button className="add-to-cart flex">
                  <i className="fa-solid fa-cart-plus" />
                  Add To Cart
                </button>
              </div>
            </div>
          </article>
          <article className="card">
            <a href="/pages/product-details.html">
              <img width={266} src="./images/6.webp" alt="" srcSet="" />
            </a>
            <div style={{ width: 266 }} className="content">
              <h1 className="title">Product Title</h1>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                tempore dolor in, accusantium laudantium accusamus.
              </p>
              <div
                className="flex"
                style={{
                  justifyContent: "space-between",
                  paddingBottom: "0.7rem",
                }}
              >
                <div className="price">$100</div>
                <button className="add-to-cart flex">
                  <i className="fa-solid fa-cart-plus" />
                  Add To Cart
                </button>
              </div>
            </div>
          </article>
          <article className="card">
            <a href="/pages/product-details.html">
              <img width={266} src="./images/7.webp" alt="" srcSet="" />
            </a>
            <div style={{ width: 266 }} className="content">
              <h1 className="title">Product Title</h1>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                tempore dolor in, accusantium laudantium accusamus.
              </p>
              <div
                className="flex"
                style={{
                  justifyContent: "space-between",
                  paddingBottom: "0.7rem",
                }}
              >
                <div className="price">$100</div>
                <button className="add-to-cart flex">
                  <i className="fa-solid fa-cart-plus" />
                  Add To Cart
                </button>
              </div>
            </div>
          </article>
          <article className="card">
            <a href="/pages/product-details.html">
              <img width={266} src="./images/8.png" alt="" srcSet="" />
            </a>
            <div style={{ width: 266 }} className="content">
              <h1 className="title">Product Title</h1>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                tempore dolor in, accusantium laudantium accusamus.
              </p>
              <div
                className="flex"
                style={{
                  justifyContent: "space-between",
                  paddingBottom: "0.7rem",
                }}
              >
                <div className="price">$100</div>
                <button className="add-to-cart flex">
                  <i className="fa-solid fa-cart-plus" />
                  Add To Cart
                </button>
              </div>
            </div>
          </article>
        </section>
      </main>
                <Footer/>
    </>
  );
}
