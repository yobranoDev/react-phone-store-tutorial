import React, { Component } from 'react'

import Product from './Product'
import Title from './Title'
import {ProductConsumer} from '../context'

class ProductList extends Component {

    RenderProducts = value =>{
        return value.products.map(product =>{
                return <Product product={product} key={product.id} />
        })
    }


    render() {
        return (
            <>
                <div className= 'py-5' >
                    <div className='container'>
                        <Title name='our' title='products' />

                        {/* product row */}
                        <div className='row'>
                            <ProductConsumer>
                                { value => this.RenderProducts(value) }
                            </ProductConsumer>
                        </div>
                    </div>

                </div>
                {/* <Product/>: */}
            </>
        )
    }
}


export default  ProductList