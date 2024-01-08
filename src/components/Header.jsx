import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from "react-redux";


function Header() {
  // to access state useSelector hook is used
  const wishlist = useSelector((state) => state.wishlistReducer) //here the state represent store
  // console.log(wishlist);
  const cart = useSelector((state)=>state.cartReducer)
  // console.log(cart);
  return (
    <div>
      <Navbar expand="lg" className="bg-primary position-fixed top-0 w-100" style={{zIndex:1, boxShadow: '0 10px 6px rgba(34, 34, 34, 0.548)'}}>
      <Container className='d-flex justify-content-between'>
        <Navbar.Brand  style={{color:'white'}}><Link style={{color:'white', textDecoration:'none'}} to={'/'}><i class="fa-solid fa-cart-shopping fa-bounce me-3"></i>E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link ><Link className='btn border me-2 w-100 rounded mt-3' style={{ textDecoration:'none',color:'white'}} to={'/wishlist'}><i class="fa-solid fa-heart text-danger me-2"></i>Wishlist <Badge bg="secondary">{wishlist.length}</Badge></Link></Nav.Link>
            <Nav.Link ><Link className='btn border me-2 w-100 rounded mt-3' style={{ textDecoration:'none',color:'yellow'}} to={'/cart'}><i class="fa-solid fa-cart-shopping me-2"></i>Cart <Badge bg="secondary">{cart.length}</Badge></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header