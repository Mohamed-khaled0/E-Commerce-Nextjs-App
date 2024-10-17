import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';
import React from "react";

export default function notFound() {
  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        alignItems: "center",
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <Header />
      <main style={{ textAlign: "center" }}>
        <h1>Error 404</h1>
        <h1>Sorry , we could not find the page you were looking for :( </h1>
      </main>
      <Footer />
    </div>
  );
}
