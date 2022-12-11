import React from "react";
import styled from 'styled-components';

 const Box = styled.div`
  padding: 80px 60px;
  background: #4D4D4D;
  position: bottom;
  bottom: 0;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
 const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`

 const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

 const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: #00BFFF;
      transition: 200ms ease-in;
  }
`;
 const Heading = styled.p`
  font-size: 18px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

const Footer=()=> {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>Главная</Heading>
            <FooterLink href="#">Что мы делаем?</FooterLink>
            <FooterLink href="#">Исследования и отчёты</FooterLink>
            <FooterLink href="#">Истории</FooterLink>
          </Column>
          <Column>
            <Heading>О нас</Heading>
            <FooterLink href="#">Наши партнёры</FooterLink>
            <FooterLink href="#">Где мы работаем?</FooterLink>
            <FooterLink href="#">Волонтёры Кыргызстана</FooterLink>
          </Column>
          <Column>
            <Heading>Где нас найти?</Heading>
            <FooterLink href="#">Бишкек</FooterLink>
            <FooterLink href="#">Ош</FooterLink>
            <FooterLink href="#">Жалал-Абад</FooterLink>
            <FooterLink href="#">Ысык-Кол</FooterLink>
          </Column>
          <Column>
            <Heading>Наши социальные сети</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
}

export default Footer;