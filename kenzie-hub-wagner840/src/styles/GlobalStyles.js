import { createGlobalStyle } from "styled-components";
const media = {
  desktop: "@media(min-width: 1023px)",
};
export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
      position: absolute;
        width: 100vw;
        height: 100vh;
        background:#000000;
    }

    button{
        cursor: pointer;

    }
    :root{
        --color-primary:#FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-Negative:#59323F;


        --grey-color-4: #121214;
        --grey-color-3: #212529;
        --grey-color-2:  #343B41;
        --grey-color-1: #868E96;
        --grey-color-0: #F8F9FA;

        //toastify colors


        --negative-color:#E83F5B;
       
        --sucess-color: #3FE864;
       




    }
    
    
   .title-1{
    font-family: 'Inter';
font-style: bold;
font-weight: 700;
font-size: 18.273px;
line-height: 28px;
   }
   .title-2{
    font-family: 'Inter';
font-style: bold;
font-weight: 600;
font-size: 16.2426px;
line-height: 26px;
}
   .title-3{
    font-family: 'Inter';
font-style: bold;
font-weight: 700;
font-size: 14.2123px;
line-height: 24px;
}

.headline{
    font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12.182px;
line-height: 22px;
}



`;
