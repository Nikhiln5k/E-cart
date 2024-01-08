import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/slices/cartSlice'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Cart() {

  const cartArray = useSelector((state)=> state.cartReducer)

  const dispatch = useDispatch()
  return (
    <>
      <div style={{marginTop: '150px'}}>
      <Row className='ms-5 d-flex justify-content-center align-items-center mb-5'>
        {cartArray?.length>0?
         cartArray.map((item)=>(
          <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
        <Card style={{ width: '15rem',   boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
          <Card.Img height={'150px'} variant="top" src={item.thumbnail} />
          <Card.Body>
            <Card.Title>{item.title.slice(0,20)}...</Card.Title>
            <Card.Text>
              <p>{item.description.slice(0,40)}...</p>
              <p className='fw-bolder'>price : &#8377; {item.price}</p>
              
            </Card.Text>
            <div className='d-flex align-items-center justify-content-between'>
              <Button onClick={()=> dispatch(removeFromCart(item.id))} variant="outline-danger"><i class="fa-solid fa-trash"></i></Button>
              <Button onClick={()=> dispatch(addToWishlist(item))} variant="outline-success"><i class="fa-solid fa-heart"></i></Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
        ))
        : <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column'>
          <img style={{width:'500px'}} src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="" />
          <h3>Your cart is Empty</h3>
          <button className='btn btn-success mt-2'><Link style={{textDecoration:'none', color:'white'}} to={'/'}>Back To Home</Link></button>
        </div>
        }
      </Row>
    </div>
    </>
  )
}

export default Cart