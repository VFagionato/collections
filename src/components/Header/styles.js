import styled from "styled-components";

export const HeaderDiv = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) =>
    props.pathname === "/rick-morty"
      ? "purple"
      : props.pathname === "/pokemon"
      ? "orange"
      : "blue"};

  a {
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
  }

  a &:hover {
    font-size: 1.5rem;
    cursor: pointer;
  }
`;
