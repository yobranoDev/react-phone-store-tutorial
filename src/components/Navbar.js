import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'

import logo from '../logo.svg'
import {ButtonContainer} from './Button'

 class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="nav navbar-dark  navbar-expands-sm px-sm-5">

                    <Link to='/' >
                        {/* 
                        https://www.iconfinder.com/icons/1243689/call_phone_icon
                        Creative Commons (Attribution 3.0 Unported);
                        https://www.iconfinder.com/Makoto_msk */}
                        <img src={logo} alt='store' className='navbar-brand' />
                    </Link>

                    <ul className='navbar-nav align-item-center' >
                        <li className='nav-item ml-5' >
                            <Link to='/' className='nav-link' > Products </Link>
                        </li>
                    </ul>

                    <Link to='/cart' className='ml-auto' >

                        <ButtonContainer>
                            <FontAwesomeIcon icon={faCartPlus} className='mr-2' />
                            my cart 
                        </ButtonContainer>
                    </Link>
               
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: carpitalize;
    }
`


export default  Navbar