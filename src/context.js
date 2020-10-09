import React, { Component } from 'react'
 
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext()


class ProductProvider extends Component {

    state = {
        products: [],
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal:0,
        detailProduct,
    }

    // UTIL FUNCTIONS
    getItem = (id) =>{
        const product = this.state.products.find( item => item.id===id )
        return product
    } 

    handleDetail = (id) =>{
        // show the details of product
        const product = this.getItem(id)
        this.setState( ()=>{
            return {detailProduct: product}
        })
    }
    addTotals = () =>{
        let subTotal = 0
        this.state.cart.map(item =>(subTotal+=item.total))
        const tempTax = subTotal * 0.1 
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subTotal + tax
         
        this.setState(()=>{
            return {
                cartSubTotal: subTotal,
                cartTax:tax,
                cartTotal:total }
            }
        )
    }
    addToCart = (id) =>{
        // get item
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]

        // add to cart 
        product.inCart = true
        product.count = 1
        const price = product.price
        product.total = price
        
        // set state
        this.setState(  ()=>{
            return {products:[...tempProducts], cart:[...this.state.cart, product ] }
        },()=> {this.addTotals() }
        )

    }
    
    
    openModal = id =>{
        // open the modal gui
        const product = this.getItem(id)
        this.setState(()=>{
            return {modalProduct: product, modalOpen:true}
        }  )
        
    }

    closeModal = () =>{
        this.setState({modalOpen:false, })
    }
    increment = id =>{
        let tempCart = [...this.state.cart]
        const product = tempCart.find(item=>item.id===id)
        // const selectedProduct = tempCart.find(item=>item.id===id)
        // console.log('selectedProduct',selectedProduct)

        // const index = tempCart.indexOf(selectedProduct)
        // let product =  tempCart[index]
        // console.log('product',product)
        
        product.count += 1
        product.total = product.price * product.count

        this.setState(()=>{
            return {cart:[...tempCart]}
        },()=>{
            this.addTotals()
        })

    }
    
    decrement = id =>{
        let tempCart = [...this.state.cart]
        const product = tempCart.find(item=>item.id===id)

        
        product.count -= 1
        if(product.count <= 0){
            return this.removeItem(id)
        }else{
            product.total = product.price * product.count
            this.setState(()=>{
                return {cart:[...tempCart]}
            },()=>{
                this.addTotals()
            })
        }


    }
    
    removeItem = id =>{
        let tempCart = [...this.state.cart]
        tempCart = tempCart.filter( item => item.id !== id )
        
        let tempProduct =  [...this.state.products]
        const index = tempProduct.indexOf(this.getItem(id))
        let removedProduct = tempProduct[index]
        removedProduct.inCart = false
        removedProduct.total = 0
        removedProduct.count = 0
        
        this.setState(()=>{ 
            console.log(tempCart)
            return {cart:[...tempCart], products:[...tempProduct]}
        },()=>{
            this.addTotals()
        }) 
    }

    clearCart = () =>{
        this.setState(
            ()=>{
                return {cart:[]}
            },
            ()=>{
                this.setProducts()
                this.addTotals()
            }
        )
    }
   
    setProducts = () =>{
        // set the products to the state
        let tempProducts= []
        storeProducts.forEach(
            item =>{
                const singleItem = {...item}
                tempProducts = [...tempProducts, singleItem]
            }
        )
        this.setState(()=>{
            return {products:tempProducts}
        })
    }




    // COMPONENT FUNCTIONS
    componentDidMount(){
        // insted of refrecing the objects copy them into the state
        // using the spread operator will not help thus use the complex method
        this.setProducts()
    }
   
    render() {
        return (
            <ProductContext.Provider 
                value={
                    { ...this.state,
                      addToCart: this.addToCart, 
                      handleDetail: this.handleDetail,
                      openModal: this.openModal ,
                      closeModal: this.closeModal,
                      increment: this.increment,
                      decrement: this.decrement,
                      removeItem: this.removeItem,
                      clearCart: this.clearCart,}} >
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer }