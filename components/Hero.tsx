"use client";

import React from 'react'
import Slider from "react-slick"
import { FaTruckArrowRight } from 'react-icons/fa6'
import { TbRulerMeasure } from 'react-icons/tb'
import Slide from './Slide'

const Hero = () => {

const settings = {
    dots : true,
    infinite : true,
    slidesToShow : 1,
    slidesToScroll: 1,
    autoplay : true ,
    pauseOnHover : false,
};

const slideData = [
    {
        id:0,
        img : "/png3.jpeg",
        title: "Trending Item",
        mainTitle : "FASHIONISTA'S Delight Sale",
        price : "$50",
    },
    {
        id : 1,
        img : "/png6.png",
        title : "Trending Accesories",
        mainTitle : "Cutting-Egde Accesories",
        price: "$40", 
    },
    {
        id: 2,
        img: "/png4.jpeg",
        title: "Sale Offer",
        mainTitle : "SIZZLING SUMMER FASHION DEALS",
        price : "$45",
    }
]

  return (
    <div>
      <div className='container pt-6 lg:pt-0'>
        <Slider {...settings}>
            {slideData.map((item) => (
                <Slide
                key = {item.id}
                img = {item.img}
                title = {item.title}
                mainTitle = {item.mainTitle }
                price = {item.price}
                />
            ))}
        </Slider>
      </div>
    </div>
  )
}

export default Hero
