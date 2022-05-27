import styled from 'styled-components'
export const Flex = styled.div`
    display:flex;
    height: 8%;
    gap: 8%;
    align-items:flex-end;
    justify-content:center;
`
export const Button = styled.button`
    height:100%;
    width:20%;
    color: white;
    border: 2px solid gray;
    border-bottom:none;
    background: #797165;
    border-top-left-radius:0.3rem;
    border-top-right-radius:0.3rem;
   font-size:1.2rem; 
    ${({ active }) => active && `
    background: #E8E8E0;
  `}
`
