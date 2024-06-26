import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
        <div className="container">
        <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-blackish'>
<Link className='navbar_link relative' href="#">HOME</Link>
<Link className='navbar_link relative' href="#">CATOGORIES</Link>
<Link className='navbar_link relative' href="#">WOMEN&apos;S</Link>
<Link className='navbar_link relative' href="#">PERFUME</Link>
<Link className='navbar_link relative' href="#">JEWELLERY</Link>
<Link className='navbar_link relative' href="#">BLOG</Link>
<Link className='navbar_link relative' href="#">HOT OFFERS</Link>

        </div>
        </div>
    </div>
  )
}

export default Navbar
