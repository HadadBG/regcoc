import styled from 'styled-components'
export const Div = styled.div`
   height: ${props => props.height};
   width: ${props => props.width};
   border: 1px solid black;
   background: #453D3F;
   overflow:hidden;
   & .ct-chart{
       height:100%;
   }
   & .ct-series-a, .ct-series-b,.ct-series-c{
       & .ct-bar{
           stroke-width:${props => props.barStroke};;
       }
   }
   & .ct-grid{
       stroke: #53494B;
   }
   & .ct-label{
       color: white;
       &.ct-vertical{
       margin-left:${props => props.ctVerticalMargin};;
       }
   }
`
