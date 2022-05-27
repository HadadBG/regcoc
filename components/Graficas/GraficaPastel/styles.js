import styled from 'styled-components'
export const Div = styled.div`
   height: ${props => props.height};
   width: ${props => props.width};
   border: 1px solid black;
   background: #453D3F;
   & .ct-chart{
       height:100%;
   }
   & .ct-series-a .ct-slice-pie{
       fill:#4fe4f0;
   }
`
