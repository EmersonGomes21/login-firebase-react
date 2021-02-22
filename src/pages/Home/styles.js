import styled from 'styled-components';
export const Container = styled.div`
width: 100%;
background-color: ${props => props.theme.colors.white};
`;

export const Modal = styled.div`
position: absolute;
width: max-content;
top: 70px;
right: 5px;
background: #333;
padding: 10px;
opacity: 0.8;
display: flex;
flex-direction: column;
line-height: 20px;
display:none;
transition: all 2s linear;
`;


export const Content = styled.div`
display: flex;
width: max-content;
height: 70px;
border-bottom: 1px solid #ddd;
align-items: center;
background: red;
position: absolute;
right: 0;
transition: all linear 2s;

&:hover .modal { 
  display: flex;
  }

img{
  width: 50px;
  height: 50px;
  position: absolute;
  right: 10px;
  border-radius: 50%;
  padding: 5px;
  background: #ddd;

  &:hover{
  box-shadow: 0 0 1px 1px #ddd; 

  }
}
`;







