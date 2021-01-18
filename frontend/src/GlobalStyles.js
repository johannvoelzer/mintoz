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
    button:focus,
    a:focus,
    h1:focus,
    h2:focus,
    h3:focus,
    h4:focus,
    h5:focus,
    h6:focus {
        outline: none;
    };
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

h2 {
    margin: 40px;
    color: var(--white-main);
}
h3 {
    margin-bottom: 0;
    color: var(--white-85);
}
h4 {
    margin: 0;
    color: var(--white-85);
}
h5 {
    margin: 2px 0 0;
    height: 22px;
    color: var(--darkgrey-main);
}
h6 {
    margin: 30px;
    font-size: 24px;
    color: var(--white-main);
}
p {
    color: var(--white-75);
}

hr {
    height: 2px;
    border: none;
    border-radius: 6px;
    background-color: var(--darkgrey-25);
    box-shadow: inset -2px -2px 4px #1B4257,
                inset 2px 2px 4px #0B1C26;
}

:root {
    --darkblue-main: #132F3E;
    --darkblue-dark: #122936;
  
    --white-main: #EEEEEE;
    --white-85: rgb(246, 246, 246, 0.85);
    --white-75: rgb(246, 246, 246, 0.75);
    --white-50: rgb(246, 246, 246, 0.5);
    --white-25: rgb(246, 246, 246, 0.25);
    --white-10: rgb(246, 246, 246, 0.1);

    --green-main: #00B49F;
    --green-90: rgb(0, 180, 159, 0.9);
    --green-50: #14726E;
    --green-10: rgb(0, 180, 159, 0.1);

    --grey-main: #8B9499;
    --grey-50: rgb(232, 232, 232 , 0.25);

    --darkgrey-main: #4D616D;
    --darkgrey-25: rgb(77, 97, 109, 0.25);
    --darkgrey-50: rgb(77, 97, 109, 0.5);
    --darkgrey-85: rgb(77, 97, 109, 0.85);

    --red-main: #DD3B66;
    --red-50: #89374F;
    --red-12: rgb(221, 59, 102, 0.12);

    --yellow-main: #E0A431;

    --blue-main: #0067A7;
    --blue-60: rgb(0, 103, 167, 0.6);
    
    --lightblue-main: #009EFF;

    --shadow-header: 0 8px 16px #0D202B;

    --shadow-navigation: 0 -10px 16px rgb(26, 36, 41, 0.8);

    --lightshadow-darkblue: -6px -6px 12px #17384a;
    --darkshadow-darkblue: 6px 6px 12px #0f2632;

    --lightshadow-tag: -2px -2px 4px #17384a;
    --darkshadow-tag: 2px 2px 4px #0f2632;

    --lightshadow-tag: -2px -2px 4px rgb(23, 56, 74, 0.8);
    --darkshadow-tag: 2px 2px 4px rgb(15, 38, 50, 0.8);
    
    --lightshadow-white: -6px -6px 10px #FFFFFF;
    --darkshadow-white: 6px 6px 12px rgb(0, 0, 0, 0.08);

    --lightshadow-button: -6px -6px 12px #1B4257;
    --darkshadow-button: 6px 6px 12px #0B1C26;

    --lightshadow-small: -3px -3px 6px #17384a;
    --darkshadow-small: 3px 3px 6px #0f2632;

    --lightshadow-flat: inset -6px -6px 12px #17384a;
    --darkshadow-flat: inset 6px 6px 12px #0f2632;

    --lightshadow-input: inset -3px -3px 6px white;
    --darkshadow-input: inset 3px 3px 6px #888888;

    --lightshadow-rating: -6px -6px 12px #0B1C26;
    --darkshadow-rating: 6px 6px 12px #1B4257;
}
`