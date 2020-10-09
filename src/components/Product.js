import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

import {ProductConsumer} from '../context'

class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product
        
        return (
            <ProductWrapper className= 'col-9 col-md-6 col-lg-3 mx-auto my-3' >
                <div className='card' >

                    {/* card content */}
                    <ProductConsumer>
                        {value =>(
                                <div className='img-container p-5 ' 
                                     onClick={() => value.handleDetail(id) } >

                                    {/* Product Image */}
                                    <Link to='/details'>
                                        <img src={img} alt='Product' className='card-img-top' />
                                    </Link>

                                    {/* Add to cart */}
                                    <button className='cart-btn' 
                                            disabled={inCart}
                                            onClick={ ()=> {
                                                value.addToCart(id)
                                                value.openModal(id)
                                                } }>
                                            
                                        {inCart?(<p className='text-capitalize mb-0' disabled  > in cart</p> ):
                                                ( <FontAwesomeIcon icon={faCartPlus}/> ) } 

                                    </button>

                                </div>
                        ) }

                    </ProductConsumer>

                    
                    {/* card footer */}
                    <div className='card-footer d-flex justify-content-between' >
                        <p className='align-self-center mb-0'> {title} </p>
                        <h5 className='text-blue font-italic mb-0 '> <span className='mr-1'> $ </span> {price} </h5>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}


// handle for wrong type of data
Product.propType = {
    product: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string, 
        img: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool,
    }).isRequired
}


const ProductWrapper = styled.div`
    .card{
        border-color: transparent;
        transition: all 0.25s linear;
    }

    .card-footer{
        background: transparent;
        border-top: transparent;
        transition: all 0.25s linear;
    }

    &:hover{
        .card{
            border: 0.04rem solid rgba(0,0,0,0.2);
            box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
        }
        .card-footer{
            background: rgba(247, 247, 247)
        }
    }

    .img-container{
        position: relative;
        overflow: hidden;
    }

    .card-img-top{
        transition: all 0.5s linear;
    }
    

    .img-container:hover .card-img-top{
        transform: scale(1.2);
    }
   
    .cart-btn{
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.2rem 0.4rem;
        background: var(--lightBlue);
        color: var(--mainWhite); 
        font-size:1.4rem;
        border: none;
        border-radius: 0.5rem 0 0 0;
        transform: translate(100%, 100%); 
        transition: all 0.5s linear;   
    }
    

    .img-container:hover .cart-btn{
        transform: translate(0, 0);
    }

    .cart-btn:hover{
        color: var(--mainBlue);
        cosor: pointer;
    }
`



export default  Product