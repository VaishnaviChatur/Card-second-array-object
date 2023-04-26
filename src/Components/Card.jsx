import React from 'react'
import ProfileCard from './ProfileCard'

export default function () {


const   productDetailsOne = {
        productId : 'd234shoose',
        productPic :'./download.jpg',
        productName : 'shose',
        Brand : 'nykee',
        productDescription : ' heel attached to it and an upper part that covers part or all of the top of your foot.',
        Price : 'Price 1000/- Rs',
        Rating : 'Rating 4'
     }
     const   productDetailsTwo = {
        productId : '344jtshir',
        productPic :'./downloadd.jpg',
        productName : 'T-shirt',
        Brand : 'dressberry',
        productDescription : 'a style of fabric shirt named after the T shape of its body and sleeves. Traditionally',
        Price : 'Price 500/- Rs',
        Rating : 'Rating 4'
         }
     const   productDetailsThree = {
        productId : '123wat',
        productPic :'./downloada.jpg',
        productName : 'Watch',
        Brand : 'titen',
        productDescription : ' It is designed to keep a consistent movement despite the motions caused by the person activities.',
        Price : 'Price 8000/- Rs',
        Rating : 'Rating 4'
     }
     const   productDetailsFour = {
        productId : '123alp',
        productPic :'./laptop.jpg',
        productName : 'Laptop',
        Brand : 'HP',
        productDescription : ' It is new version designed to keep a movement despite the motions caused by the person activities.',
        Price : 'Price 88000/- Rs',
        Rating : 'Rating 4'
     }
     const   productDetailsFive = {
        productId : '123tv',
        productPic :'./tv.jpg',
        productName : 'Television',
        Brand : 'MI',
        productDescription : 'This Is a Tilivision set to keep family happy, with great wall size',
        Price : 'Price 48000/- Rs',
        Rating : 'Rating 4'
     }

     
  return (
    <div>
        <ProfileCard userdetail={productDetailsOne}/>
       
        <ProfileCard userdetail={productDetailsTwo}/>
     
        <ProfileCard userdetail={productDetailsThree}/>
        <ProfileCard userdetail={productDetailsFour}/>
     
     <ProfileCard userdetail={productDetailsFive}/>
     
    </div>
  )
}
