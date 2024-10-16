import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import '../home.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const arr = [
    {productImg:'./images/1.png'},
   { productImg:'./images/2.webp'},
   { productImg:'./images/3.webp'},
   { productImg:'./images/4.webp'},
   { productImg:'./images/5.webp'},
   { productImg:'./images/6.webp'},
   { productImg:'./images/7.webp'},
   { productImg:'./images/8.png'},
]

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

          <button>Shop Now</button>
        </section>
      </div>
      <main className="">
        <h1 className="recommended">
          <i className="fa-solid fa-check" />
          Recommended for you
        </h1>
        <section className="products flex">
          {arr.map( (item)=> {
              return(
                <article key={item.productImg} className="card">
                <a href="/pages/product-details.html">
                  <img width={266} src={item.productImg} alt=""  />
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
                      <FontAwesomeIcon 
                       className="fa-solid fa-cart-plus" 
                      icon={faCartPlus} 
                      style={{ width: '.8rem' }}/>
                      Add To Cart
                    </button>
                  </div>
                </div>
              </article>
              ) ;           
          })}
        </section>
      </main>
                <Footer/>
    </>
  );
}
