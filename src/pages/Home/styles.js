import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #222831;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-family: "Anton", sans-serif;
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 8px;
`;
