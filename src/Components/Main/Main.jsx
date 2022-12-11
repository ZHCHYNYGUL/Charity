import React from 'react';
import styled from 'styled-components';
import Cards from '../Cards/Cards';
const Content = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  border: 1px solid #000;
  background-image: url("https://c0.wallpaperflare.com/preview/134/372/59/abstract-background-copyspace-brainstorm.jpg");
  width: 100%;
  height:100vh;
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
`
const Info = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const Infotitle = styled.h1`
font-size: 60px;
font-style: normal;
    font-stretch: normal;
    line-height: 60px;
    letter-spacing: -0.4px;
    text-align: center;
    text-transform: uppercase;
    margin-top: 20px;
    color: #fff`
const Infodescr = styled.p`
font-size: 20px;
font-style: normal;
text-align: center;
font-weight: normal;
line-height: 26px;
letter-spacing: 0.015em;
margin-top: 10px;
max-width: 905px;
color: #fff;
`
const InfoBtns = styled.div`
margin-top:10px;
justify-content:center;
align-items:center;
`
const InfoBtn = styled.button`
padding: 10px 20px;
margin-right:10px ;
text-align: center;
font-size: 16px;
background-color: white; 
color: black; 
border: 2px solid #008CBA;
cursor: pointer;
&:hover{
    background-color: #008CBA;
    color: white;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
`
const Text = styled.div`
    max-width: 100%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background:#ffff;
`
const CardWrapper = styled.div`
gap:2rem;
background-color:#ffff;`
const Main = () => {
    return (
        <>
            <Content>
                <Info>
                    <Infotitle>Платформа для добрых дел</Infotitle>
                    <Infodescr>Вместе мы можем сделать наш Мир лучше. Каждое,совершенное доброе дело является лучиком света в нашем Мире</Infodescr>
                    <InfoBtns>
                        <InfoBtn>Присоединиться к сообществу</InfoBtn>
                        <InfoBtn>Остались вопросы? </InfoBtn>
                    </InfoBtns>
                </Info>
            </Content>
            <Text>
                
            </Text>
            <CardWrapper>
                <Cards />
            </CardWrapper>


        </>
    );
};

export default Main;