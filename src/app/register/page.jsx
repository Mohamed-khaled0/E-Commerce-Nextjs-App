import React from 'react'
import Header from '../../components/footer/Footer.jsx';
import Footer from '../../components/footer/Footer.jsx';


export const metadata = {
  title: "Register Page",
  description:'Register Page',
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
    <div className="mb-4 ">
      <label htmlFor="username" className="form-label ">
        Username
      </label>
      <input
        type="email"
        className="form-control"
        id="username"
        aria-describedby="emailHelp"
      />
    </div>
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
      Create Account
    </button>
  </form>
</main>

<Footer/>

    </div>
  )
}
