import { createGlobalStyle } from 'styled-components/macro';

export default createGlobalStyle`

* {
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
}

body {
    margin: 30px 0;
    @media (min-height: 800px) {
        margin-top: 40px;
    };
    background: #132F3E;
    color: #EEEEEE;
    font-family: 'Roboto';
    font-size: 112.5%;
    text-align: center;
    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
        outline: none;
    }
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

h2 {
    color: var(--white-50);
}

:root {
    --darkblue-main: #132F3E;
  
    --white-main: #EEEEEE;
    --white-75: rgb(246, 246, 246, 0.75);
    --white-50: rgb(246, 246, 246, 0.5);
    --white-25: rgb(246, 246, 246, 0.25);

    --green-main: #00B49F;
    --green-50: rgb(0, 180, 159, 0.5);

    --grey-main: #8B9499;

    --darkgrey-main: #414F56;

    --red-main: #E3436E;

    --yellow-main: #E0A431;

    --blue-main: #0067A7;
    
    --lightblue-main: #009EFF;

    --shadow-navigation: 0 -10px 20px #102835;

    --lightshadow-darkblue: -10px -10px 20px rgb(27, 66, 87, 0.7);
    --darkshadow-darkblue: 10px 10px 20px #0C1E29;
    
    --lightshadow-white: -6px -6px 12px #FFFFFF;
    --darkshadow-white: 6px 6px 12px rgb(0, 0, 0, 0.08);

    --lightshadow-grey: -6px -6px 12px #FFFFFF;
    --darkshadow-grey: 6px 6px 12px #545D64;

    --lightshadow-button: -10px -10px 20px #1B4257;
    --darkshadow-button: 10px 10px 20px #0B1C26;
}
`