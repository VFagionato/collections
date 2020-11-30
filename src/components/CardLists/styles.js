import styled from "styled-components";

export const CardContainer = styled.div`
  width: 99vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

export const Card = styled.div`
  width: 250px;
  height: 350px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 5px 5px 5px 0px black;
  margin: 10px;
  padding: 10px;
  border-radius: 15px;
  box-sizing: border-box;

  &:hover {
    box-shadow: 5px 5px 15px 0px black;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }

  h2 {
    text-transform: capitalize;
    font-weight: 400;
    font-size: 1.2rem;
    width: 100%;
    text-align: center;
    margin: 0px;
  }
`;
