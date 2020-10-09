import React, { Component } from 'react'

 class Default extends Component {
    render() {
        console.log(this.props)
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-10 mx-auto text-uppercase text-center text-title'>
                        <h1 className='display-3' > 404 </h1>
                        <h1>error</h1>
                        <h3> page not found</h3>
                        <h3> the requested URL <span className='text-danger'> {this.props.location.pathname} </span> is not found </h3>
                    </div>
                </div>
            </div>
        )
    }
}


export default  Default 