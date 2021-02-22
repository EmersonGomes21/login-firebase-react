import styled from 'styled-components';
import backgroundLogin from '../../assets/images/shutterstock.jpg';
export const Container = styled.div`
   width: 100%;
   height: 100%;
  .container {
    display: flex;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.background};
    max-width: 1366px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  .col {
    display: flex;
    flex: 1;
    align-items: center;
    margin:  0 auto;
    height: 100%;
    width: 50%;
 
  }

  .main {
    display: flex;
    height: 100%;
    flex-direction: column;
    margin: auto;

  .content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    width: 256px;
    transform: translateX(-50px);
  }

  }

  .heading-title {
    font-weight: 60px;
    font-size: 60px;
    font-weight: 40px;
    color: #383E71;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 48px;
   
  }

  .heading-subtitle {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #989FDB;
    margin-top: 16px;
  }

  .form-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 100%;

    .social-logins{
      display: flex;
      justify-content: space-around;

    }

    a.login-google,  a.login-facebook{
     display: flex;
     align-items: center;
     margin-top: 15px;
     padding: 5px 10px;
     width: max-content;
     border-radius: 8px;
     box-shadow: 1px 7px 10px 1px #ccc;
     min-width: 109px;
     font-size: 12px;
    }
   a.login-google{
    color: #333;
    background: #fff;
    

    img {
      margin-right: 10px;
    }

    }
    a.login-facebook{
    color: #fff;
    background: #3b5999;
    opacity: 0.5;
   
    img {
      margin-right: 10px;
    }
  }

    .title {
      font-size: 30px;
      line-height: 38px;
      font-weight: normal;
    }

    .input-group {
      display: flex;
      flex-direction: column;
      width: 100%;
      outline:none;
      margin-top: 16px;
      position: relative;

      label.input-title{
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        color: #383E71;
        text-align: initial;
        width: max-content;
        margin: 8px 20px;
        text-transform: uppercase;
        border: none;
       
      }
      input {
        background: none;
        border-radius: 8px;
        width: 100%;
        height: 48px;
        font-size: 10px;
        border: 1px solid #989FDB;
        padding: 17px;
        color: #383E71;
      }
      .iconx{
        bottom: 15px;
        right: 17px;
        width: 14.33px;
        position: absolute;
      }
      .hide{
        display: none;
      }
      
    }

    .input-group:first-child {
      margin-top: 43px;
    }
    .input-top{
      margin-top: 36px;
      }

    .error {
        border: 1px solid ${(props) => props.theme.colors.error} !important;
    }

    .text-error {
      width: 100%;
      margin-top: 28px;
      position: absolute;
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      color: ${(props) => props.theme.colors.error}
    }
     .erro-email{
      bottom: -25px;
      font-size: 10px;
      text-align: initial;
      margin-left: 30px;
      
     }
    .text-success {
      width: 100%;
      margin-top: 28px;
      position: absolute;
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      color: ${(props) => props.theme.colors.success}
    }

    button {
      width: 100%;
      height: 48px;
      border-radius: 8px;
      font-size: 18px;
      font-weight: bold;
      background: ${(props) => props.theme.colors.buttonBackground};
      box-shadow: 0px 10px 25px #CF99DB;
      margin-top: 38px;
      
    }
  }

  input::-webkit-input-placeholder{
    color: #989FDB;
   }

  .background-login {
     width: 100%;
     height: 100%;
     background-image: url(${backgroundLogin});
     background-position: center;
     background-size: cover ;
     background-repeat: no-repeat;
    .background-img{
     background: linear-gradient(180deg, #130525 0%, rgba(105, 57, 153, 0) 100%);
     transform: rotate(180deg);
     width:  100%;
     height: 100%;
    }
  }
    .recovery{
      margin-top: 18px;
      color: #989FDB;
      text-align: center;
      font-size: 14px;
      line-height: 20px;

      a{
        color: #9D25B0;
        text-decoration: underline;
       
      }
    }

    a:hover.login-facebook.disable::before, a:focus.login-facebook.disable::before{
    position: absolute;
    content: 'x';
    color: red;
    background: #3b5999;
    display:flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    font-size: 20px;
    background: #ddd;
    border-radius: 50%;
    font-weight: bold;
  }

    @media (min-width: 701px) and (max-width: 900px){
      .main .content{
      transform: translateX(0);
     }
     .background-login{
      max-width: 327px;
     }
    }


    @media  (max-width: 700px){
      .container, body{
        background: #130525;
      }
      .main .content{
      width: 100%;
      height: 100%;
      max-width: 311px;
      max-height: 357px;
      transform: translateX(0);
      background: #FAF5FF;
      padding: 28px;

     }
     .background-login{
      width: 100%;
      position: absolute;
      top: 0;
      height: 408px;
     }

     .heading-title{
      font-size: 24px;
       line-height: 32px;
       text-align: center;
     }

     .heading-subtitle{
      font-weight: 600;
      font-size: 12px;
      line-height: 20px;
      width: max-content;
     }
     .br{
       display: none;
     }

     .form-container .input-group:first-child {
       margin-top: 15px;
       }

       .mobile-layout{
         position: absolute; 
       }

       .form-container button {
        margin-top: 17px;
         width: 168px;
         position: relative;
         left: 20%;
         box-shadow: none !important;
         font-size: 16px;
         
        }

        a.login-google,  a.login-facebook{
        box-shadow: none !important;
     
    }

   a.login-google{
    color: #333;
    background: #fff;
 

    img {
      margin-right: 10px;
    }

    }
    a.login-facebook{
    color: #fff;
    background: #3b5999;
    transform: translateX(35px);
    
   
    img {
      margin-right: 10px;
    }
  }
  .recovery{
    color: #fff ;
    transform: translate(25px, 3px);

    a{
      color: #fff ;
    }
  }

    }
`;
