import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

function CartItem({item, value}) {
    const {id, img, title, price, total, count } = item
    const {increment, decrement, removeItem } = value
    return (
        <div className='row my-1 text-capitalize text-center' >

            <div className='col-10 col-lg-2 mx-auto'>
                <CartProductImg src={img} className='img-fluid' alt='product' />
            </div>
            
            <div className='col-10 col-lg-2 mx-auto'>
                <span className='d-lg-none' > product : </span>
                {title}
            </div>
            
            <div className='col-10 col-lg-2 mx-auto'>
                <span className='d-lg-none' > price : </span>
                {price}
            </div>

            <div className='mx-auto col-10 col-lg-2 my-2 mg-lg-0' >
                <div className='d-flex justify-content-center' >
                    <span className='btn btn-black mx-1' onClick={()=>decrement(id)}> - </span>
                    <span className='btn btn-black mx-1'> {count} </span>
                    <span className='btn btn-black mx-1' onClick={()=>increment(id)}> + </span>
                </div>

            </div>

            <div className='col-10 col-lg-2 mx-auto'>
                <div className='cart-icon' onClick={()=>removeItem(id) } >
                    <FontAwesomeIcon icon={faTrash} />
                </div>
            </div>

            <div className='col-10 col-lg-2 mx-auto'>
                <strong> item total: ${total} </strong>
                
            </div>
      
        </div>
      
    )
}

const CartProductImg = styled.img`
    width: 5rem;
    height: 5rem
`

export default CartItem
