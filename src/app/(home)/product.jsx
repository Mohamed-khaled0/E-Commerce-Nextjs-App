import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

// const arr = [
//     {productImg:'./images/1.png'},
//    { productImg:'./images/2.webp'},
//    { productImg:'./images/3.webp'},
//    { productImg:'./images/4.webp'},
//    { productImg:'./images/5.webp'},
//    { productImg:'./images/6.webp'},
//    { productImg:'./images/7.webp'},
//    { productImg:'./images/8.png'},
// ]

async function getData() {
    const res = await fetch('https://fakestoreapi.com/products')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json() ;
  }
export default async function Product() {

    const data = await getData()
    
  return (
<section className="products flex">
          {data.map( (item)=> {
              return(
                <article title={item.title} key={data.id} className="card">
                <a href="/pages/product-details.html">
                  <img width={266} height={255} src={item.image} alt=""  />
                </a>
                <div style={{ width: 266 }} className="content">
                  <h1 className="title">{item.title.slice(0,15)}...</h1>
                  <p className="description">
                   {item.description.slice(0,120)}...
                  </p>
                  <div
                    className="flex"
                    style={{
                      justifyContent: "space-between",
                      paddingBottom: "0.7rem",
                    }}
                  >
                    <div className="price">{item.price}</div>
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
  )
}
