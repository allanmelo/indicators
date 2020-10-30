import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500;600&display=swap');

    * {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }
    body {
        box-sizing: border-box;
    }
`

export const Theme = {
    colors: {
      primary: '#eee',
    },
  }