import React from "react";
import styled from "styled-components";
import Section from "./Section";
import { data } from "../data/data";
const Home = () => {
  return (
    <>
      <Container>
        {data.map((item, index) => {
          return (
            <Section
              key={index}
              image={item.image}
              title={item.title}
              desc={item.description}
              flag={item.button}
            />
          );
        })}
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
