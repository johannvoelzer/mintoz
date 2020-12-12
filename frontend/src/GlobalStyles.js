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
h3 {
    color: var(--white-main);
}
h4 {
    margin: 0;
    color: var(--white-75);
}
h5 {
    margin: 0;
    color: var(--darkgrey-main);
}
h6 {
    margin: 20px;
    font-size: 24px;
    color: var(--white-10);
}
p {
    color: var(--white-75);
}

hr {
    height: 2px;
    border: none;
    background-color: var(--darkgrey-25);
}

:root {
    --darkblue-main: #132F3E;
  
    --white-main: #EEEEEE;
    --white-85: rgb(246, 246, 246, 0.85);
    --white-75: rgb(246, 246, 246, 0.75);
    --white-50: rgb(246, 246, 246, 0.5);
    --white-25: rgb(246, 246, 246, 0.25);
    --white-10: rgb(246, 246, 246, 0.1);

    --green-main: #00B49F;
    --green-50: rgb(0, 180, 159, 0.5);

    --grey-main: #8B9499;

    --darkgrey-main: #4D616D;
    --darkgrey-25: rgb(77, 97, 109, 0.25);

    --red-main: #DD3B66;

    --yellow-main: #E0A431;

    --blue-main: #0067A7;
    
    --lightblue-main: #009EFF;

    --shadow-navigation: 0 -10px 20px #102835;

    --lightshadow-darkblue: -6px -6px 12px #17384a;
    --darkshadow-darkblue: 6px 6px 12px #0f2632;
    
    --lightshadow-white: -6px -6px 12px #FFFFFF;
    --darkshadow-white: 6px 6px 12px rgb(0, 0, 0, 0.08);

    --lightshadow-button: -6px -6px 12px #1B4257;
    --darkshadow-button: 6px 6px 12px #0B1C26;

    --lightshadow-input: inset -3px -3px 6px white;
    --darkshadow-input: inset 3px 3px 6px #888888;
}
`