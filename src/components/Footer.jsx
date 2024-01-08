import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
        <div className='d-flex align-items-center justify-content-center flex-column bg-primary text-white' style={{width:"100%", height:"300px"}}>
      <div className='footer d-flex align-items-center justify-content-evenly w-100'>
        <div className="website" style={{width: "400px"}}>

          <h4><i class="fa-solid fa-cart-shopping"></i>E-Cart</h4>
          <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ducimus aliquam quis ad alias consequatur nobis. Quo quis tempora perferendis impedit labore. Facere culpa fuga, excepturi incidunt sint corrupti voluptatum.</h6>
        </div>

        <div className="links d-flex flex-column">

          <h4>Links</h4>
          <Link to={'/'} style={{textDecoration: "none", color: "white"}}>Home Page</Link>
          <Link to={'/cart'} style={{textDecoration: "none", color: "white"}}>Cart</Link>
          <Link to={'/wishlist'} style={{textDecoration: "none", color: "white"}}>Wishlist</Link>

        </div>
        <div className="guides d-flex flex-column">

          <h4>Guides</h4>
          <Link to={'/'} style={{textDecoration: "none", color: "white"}}>React</Link>
          <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration: "none", color: "white"}}>React Bootstrap</Link>
          <Link to={'https://bootswatch.com/'} style={{textDecoration: "none", color: "white"}}>Bootswatch</Link>
        </div>
        <div className="contact">
          <h4>Contact Us</h4>
          <div className='d-flex'>
            <input type="text" className='form-control' placeholder='Enter your EmailID' />
            <button className='btn btn-warning text-white ms-3'>Subscribe</button>
          </div>

          <div className='d-flex justify-content-evenly mt-3'>
            <Link to={'/'}><i class="fa-brands fa-facebook fa-2x" style={{textDecoration: "none", color: "white"}}></i></Link>
            <Link to={'/'}><i class="fa-brands fa-instagram fa-2x" style={{textDecoration: "none", color: "white"}}></i></Link>
            <Link to={'/'}><i class="fa-brands fa-twitter fa-2x" style={{textDecoration: "none", color: "white"}}></i></Link>
            <Link to={'/'}><i class="fa-brands fa-linkedin fa-2x" style={{textDecoration: "none", color: "white"}}></i></Link>
          </div>
        </div>
      </div>
      <p className='mt-5'>Copyrigt © 2023 Media player. Built with React.</p>
    </div>

    </>
  )
}

export default Footer