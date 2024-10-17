import React from 'react'
import './sign-in.css'
import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';

export const metadata = {
  title: "SignIn Page",
  description:'SignIn Page',
};
export default function page() {
  return (
    <div style={{
      height: "100vh",
      display: "grid",
      alignItems: "center",
      gridTemplateRows: "auto 1fr auto",
    }}>
      <Header/>

      <main className="px-3">
  <form style={{ textAlign: "left" }}>
    <div className="mb-4">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Email address
      </label>
      <input
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="exampleInputPassword1" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="form-control"
        id="exampleInputPassword1"
      />
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" htmlFor="exampleCheck1">
        Check me out
      </label>
    </div>
    <button type="submit" className="btn btn-primary">
      Sign in
    </button>
  </form>
</main>

<Footer/>
    </div>
  )
}
