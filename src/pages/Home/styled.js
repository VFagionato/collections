import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  box-sizing: border-box;
  width: 98vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  h1 {
    max-width: 99%;
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1rem;
  }
`;

export const CardsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const CardList = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (min-width: 1024px) {
    margin: 20px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 80%;
  background-image: ${(props) =>
    props.pokemon
      ? "url('https://i.pinimg.com/originals/ce/54/45/ce5445fdfa0adc66ff02da67a9fbae48.jpg');"
      : "url('https://i.pinimg.com/originals/33/07/80/33078018848445421f41b8f71f074b91.jpg');"};
  background-size: cover;
  background-position-y: -120px;
  background-repeat: no-repeat;
  cursor: pointer;
  border-radius: 30px;
  box-shadow: -3px 5px 5px 0px black;

  &:hover {
    box-shadow: -5px 10px 10px 0px black;
  }

  @media (min-width: 1024px) {
    background-position-y: -200px;
  }
`;
