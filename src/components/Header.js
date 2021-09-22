import React, { useState } from "react";
import styled from "styled-components";
import { data } from "../data/data";
const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <>
      <Container>
        <a href="/">
          <img src="/images/logo.svg" alt="" />
        </a>

        <Menu>
          {data.map((item, index) => (
            <a key={index} href="/">
              {item.title}
            </a>
          ))}
        </Menu>

        <RightMenu>
          <a href="/">Shop</a>
          <a href="/">Tesla Account</a>
          <Image
            onClick={() => {
              setBurgerStatus(!burgerStatus);
            }}
            src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"
          />
        </RightMenu>

        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <CustomClose
              onClick={() => {
                setBurgerStatus(!burgerStatus);
              }}
              src="https://img.icons8.com/material-outlined/24/000000/multiply--v1.png"
            />
          </CloseWrapper>

          {data.map((item, index) => (
            <li key={index}>
              <a href="/">{item.title}</a>
            </li>
          ))}

          <li>
            <a href="/">Existing Inventory</a>
          </li>
          <li>
            <a href="/">Used Inventory</a>
          </li>
          <li>
            <a href="/">Trade-in Inventory</a>
          </li>
          <li>
            <a href="/">Cyber Truck</a>
          </li>
          <li>
            <a href="/">Roadaster</a>
          </li>
        </BurgerNav>
      </Container>
    </>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const Image = styled.img`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
