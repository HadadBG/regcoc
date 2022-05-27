import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "CoCFont";
        src: url("/fonts/supercell-magic.woff2")format('woff2');
    }
    body{
        margin: 0;
        color:white;
        
    }
    body *{
        font-family:"CoCFont";
        box-sizing:border-box;
        color:white;
        -webkit-text-stroke: 1.5px black;
        margin:0;
    }
    button{
        &:hover{
            cursor:pointer;
        }
    }
   option{
     background-color:#3A3A3A ;
   }
   
    
`
