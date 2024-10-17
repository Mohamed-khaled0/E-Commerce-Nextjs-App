import Header from '../components/header/Header.jsx'; // Ensure the correct import
import Footer from '../components/footer/Footer.jsx';
import React from "react";

export default function NotFound() {
  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        alignItems: "center",
        gridTemplateRows: "auto 1fr auto",
        backgroundColor: "#f8f9fa", // Light background for better visibility
      }}
    >
      <Header />
      <main style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", color: "#dc3545" }}>Error 404</h1>
        <p style={{ fontSize: "1.5rem", color: "#6c757d" }}>
          Sorry, we could not find the page you were looking for.
        </p>
        
        <p>
          <a href="/" style={{ color: "#007bff", textDecoration: "underline" }}>
            Go back to the homepage
          </a>
        </p>
      </main>
      <Footer />
    </div>
  );
}
