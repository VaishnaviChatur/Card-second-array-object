import React from 'react'
import './Profilecard.css'
import Button from './Button'
export default function ProfileCard({userdetail}) {
    

    const{
        productId,
        productPic,
        productName,
        Brand,
        productDescription,
        Price ,
        Rating
    }=userdetail
  return (
    <div class="column">
      <p  className='wrapper'> 
      <img className='imgs' src={productPic}></img>
<h1  className='hh'>{productName}</h1>
<h3  className='hh'>{Brand}</h3>
<h2  className='hh'>{productId}</h2>
<p>{productDescription}</p>
<h5  className='hh'>{Price}</h5>
<h6>{Rating}</h6>

<Button name={Brand} price={Price} no='1' Buttontext='Add to cart'/> 

</p>
    </div>
  )
}
