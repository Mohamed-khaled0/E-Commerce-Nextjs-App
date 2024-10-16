import React from 'react'
import './header.css'
export default function Header() {
  return (
    <div>
       <header id="headerElement" className="flex">
        <div className="logo">
          <i className="fa-solid fa-bag-shopping" />
          <span style={{ fontWeight: "bold" }}>AWU</span>
          <p style={{ letterSpacing: "0.5px" }}>Shopping</p>
        </div>
        <div className="links">
          <a
            style={{ position: "relative" }}
            className="cart"
            href="./pages/cart.html"
          >
            <i className="fa-solid fa-cart-shopping" />
            $0.00
            <span className="products-number">2</span>
          </a>
          <a className="sign-in" href="./pages/signin.html">
            <i className="fa-solid fa-right-to-bracket" />
            Sign in
          </a>
          <a className="register" href="./pages/register.html">
            <i className="fa-solid fa-user-plus" />
            Register
          </a>
        </div>
      </header>
    </div>
  )
}
