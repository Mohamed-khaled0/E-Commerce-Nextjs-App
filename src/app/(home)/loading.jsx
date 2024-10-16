import React from 'react'
import  './loading.css'

export default function Loading() {

  return (
    <div style={{display:'flex' , justifyContent:'center' , marginBlock:'9rem'}}>Loading...
        <span className="loader"></span>
    </div>
  )
}
