import { createGlobalStyle } from 'styled-components';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

const GlobalStyle = createGlobalStyle`  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  
  html, body, #root {
    height: 100%;
  }
  
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #fff;
    font-family: 'Helvetica', sans-serif;
    color: #333;
  }
  
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
