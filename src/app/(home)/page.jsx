"use client";

import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';
import "../home.css";
import Product from './product.jsx';
import { Suspense } from "react";
import Loading from "./loading.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Home() {

  const scrollToRecommended = () => {
    const section = document.getElementById("recommended");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <>
      <div className="top-img">
        <Header />
        <section className="content">
          <p className="lifestyle">Lifestyle collection</p>
          <p className="sale">
            SALE UP TO <span>30% OFF</span>
          </p>
          <button>Shop Now</button>
        </section>
      </div>
      <main>
        <h1 className="recommended flex">
          <FontAwesomeIcon className="fa-solid fa-check" icon={faCheck} style={{ width: "1.9rem", marginRight: "1.2rem" }} />
          Recommended for you
        </h1>
        <Suspense fallback={<Loading />}>
          <Product />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

