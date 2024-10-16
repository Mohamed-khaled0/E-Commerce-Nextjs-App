import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import '../home.css'

import Product from "./product";
import { Suspense } from "react";
import Loading from "./loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";



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
        <h1 className="recommended flex">
          <FontAwesomeIcon
          className="fa-solid fa-check"
          style={{ width: "1.9rem", marginRight: "1.2rem" }}
          icon={faCheck}
        />
          Recommended for you
        </h1>
       <Suspense fallback={<Loading/>}>
       <Product/>

       </Suspense>
      </main>
                <Footer/>
    </>
  );
}
