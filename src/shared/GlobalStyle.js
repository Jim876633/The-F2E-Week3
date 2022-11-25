import { createGlobalStyle } from "styled-components";

import globalfont from "../assets/fonts/GenJyuuGothicX-Medium.ttf";

const GlobalStyle = createGlobalStyle`

:root{
    /*================================================================ */
    /*Color */
    /*================================================================ */

    --clr-primary: rgb(0,255,224);
    --clr-primary-0: rgba(0,255,224,0);
    --clr-primary-10: rgba(0,255,224,0.1);
    --clr-primary-20: rgba(0,255,224,0.2);
    --clr-primary-30: rgba(0,255,224,0.3);
    --clr-primary-70: rgba(0,255,224,0.7);
    --clr-primary-80: rgba(0,255,224,0.8);
    --clr-primary-95: rgba(0,255,224,0.95);
    --clr-primary-dark: rgb(0,141,150);
    --clr-primary-dark-80: rgba(0,141,150,0.8);
    --clr-primary-deepDark:rgb(0,86,86);

    --clr-text-white:rgb(255,255,255);
    --clr-text-dark:rgb(28,50,69);
    --clr-text-tint: rgb(0,255,224);

    --clr-role-sm:rgb(211,85,255);
    --clr-role-sm-80:rgb(211,85,255,0.8);
    --clr-role-sm-95:rgb(211,85,255,0.95);
    --clr-role-sm-dark:rgb(76,0,113);
    --clr-role-sm-tint:rgb(255,0,245);
    --clr-role-team1:rgb(255,199,0);
    --clr-role-team2:rgb(147,53,0);

    --clr-bg-dark:rgb(10,13,20);
    --clr-bg-dark-80:rgba(10,13,20,0.8);
    --clr-bg-dark-60: rgba(10,13,20,0.6);
    --clr-bg-transition: rgba(28,50,69,0.6);
    --clr-danger: rgb(255,0,0);
    --clr-disabled: #BBBBBB;

    --clr-point-13: #ff7a00;
    --clr-point-21:#FF0000;



    /*================================================================ */
    /*Linear gradient */
    /*================================================================ */

    --linear-role-sm:   linear-gradient(180deg,
            rgba(211, 85, 255, 0) 0%,
          rgba(211, 85, 255, 0.05) 60%,
          rgba(211, 85, 255, 0.2) 80%,
          rgba(211, 85, 255, 0.6) 100%);
    --linear-role-team1: linear-gradient(180deg,
           rgba(255, 199, 0, 0) 0%,
        rgba(255, 199, 0, 0.05) 60%,
        rgba(255, 199, 0, 0.2) 80%,
        rgba(255, 199, 0, 0.6) 100%);
    --linear-role-team2: linear-gradient(180deg,
           rgba(255, 122, 0, 0) 0%,
        rgba(255, 122, 0, 0.05) 60%,
        rgba(255, 122, 0, 0.2) 80%,
        rgba(255, 122, 0, 0.6) 100%);
    

    /*================================================================ */
    /*Font Size */
    /*================================================================ */
    
    --fz-h2: 3.2rem;
    --fz-h3: 2.4rem;
    --fz-body: 2rem;
    --fz-light: 2rem;
    --fz-talk-lg: 2.4rem;
    --fz-capation: 1.6rem;
    --fz-footer: 1.4rem;
    
    /*================================================================ */
    /*Component Size */
    /*================================================================ */


}


html{
    font-size: 62.5%;
}
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: globalfont;
    font-size: var(--fz-body);
    font-weight: 400;
    color: var(--clr-text-white);
    letter-spacing: 0.05em;
    user-select:none;
}
button{
    cursor: pointer;
    border: none;
    background: transparent;
}
a{
    text-decoration:none;
}
li{
    list-style: none;
}
img{
    width: 100%;
    height:100%;
    vertical-align: middle;

}

h2{
    font-size: var(--fz-h2);
}
h3{
    font-size: var(--fz-h3);
}
p{
    font-size: var(--fz-body);
    line-height: 1.8;
}
body{
    overflow: hidden;
}
main{
    position: relative;
    width:max(100vw,100rem);
    height:max(100vh,60rem);
}
section{
    position: relative;
    width:100%;
    height:100%;
}
@font-face {
        font-family: globalfont;
        src: url(${globalfont});
    }

`;

export default GlobalStyle;
