import styled from 'styled-components'
export const Div = styled.div`
   height: ${props => props.height};
   width: ${props => props.width};
   border: 1px solid black;
   background: #453D3F;
   & .ct-chart{
       height:100%;
   }
   & path.ct-area{
      transform:  scale(0.5) ;
      fill:#d70206;
   }
   & .ct-series-a .ct-line{
       stroke:#0271d7;
   }
   & .ct-label{
       color: white;
       &.ct-horizontal{
           margin-top:0.2rem ;
       }
       &.ct-vertical{
           margin-left:-0.2rem ;
       }
   }
   & .ct-grid{
       stroke: #53494B;
   }
`
