import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import '../home.css'

import Product from "./product";



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
      <Product/>
      </main>
                <Footer/>
    </>
  );
}
