import React from 'react'
import ProductCard from './ProductCard'



const ProductsData = [
    {
        img : "/watch2.jpeg",
        title: "Golden Watch",
        desc: "ladies thin belt watch",
        rating : 3,
        price: "Rs:999"
    },
    {
        img : "/heels2.jpeg",
        title: "High Heels",
        desc: "Red High Heels ",
        rating : 4,
        price: "Rs:4999"
    },
    {
        img : "/jeans1.jpeg",
        title: "bell-bottom",
        desc: "Denim flared bottom jeans",
        rating : 3,
        price: "Rs:1199"
    },
    {
        img : "/jacket2.jpeg",
        title: "Long Coat",
        desc: "Woolen ladies coat",
        rating : 5,
        price: "Rs:2499"
    },
    {
        img : "/top2.jpeg",
        title: "short top",
        desc: "In cotton fabric",
        rating : 5,
        price: "Rs:1200"
    },
    {
        img : "/purse1.jpeg",
        title: "Handbag",
        desc: "black & white",
        rating : 4,
        price: "Rs:2500"
    },
    {
        img : "/top1.jpeg",
        title: "short top & pants",
        desc: "In different color-combinations",
        rating : 6,
        price: "Rs:3599"
    },
    {
        img : "/sneakers2.webp",
        title: "Sneakers ",
        desc: "In jeans fabric",
        rating : 5,
        price: "Rs:4500"
    },
    
]
const NewProducts = () => {
  return (
    <div>
    <div className='container pt-16'>
      <h2 className='font-bold  text-4xl pb-4'>Our New Products:</h2>


<div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10 '>

{ProductsData.map((item , index) => (
<ProductCard key = {index}
img = {item.img}
title = {item.title}
desc = {item.desc}
rating = {item.rating}
price = {item.price}
/>))}

</div>

    </div>
    </div>
  )
}

export default NewProducts
