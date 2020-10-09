import styled from 'styled-components'


export const ButtonContainer = styled.button`
    text-transform: capitalize;
    text-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid ;
    border-radius: 0.5rem; 
    border-color: ${ props=> props.cart?'var(--mainYellow) ':' var(--lightBlue)' } ;
    color: ${ props=> props.cart?'var(--mainYellow) ':' var(--lightBlue)' } ;
    cosor: pointer;
    padding: 0.2rem 0.5rem;
    margin: 0.2rem 0.5rem 0.2rem 0rem;
    transition: all 0.5s ease-in-out;
    &:hover{
        background:${ props=> props.cart?'var(--mainYellow) ':' var(--lightBlue)' } ;
        color: var(--mainBlue); 
    }
    &:focus{
        outline: none;
    }
` 





