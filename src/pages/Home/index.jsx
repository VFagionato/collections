import {
  MainContainer,
  CardList,
  CardsContainer,
  ImageContainer,
} from "./styled";
import { motion } from "framer-motion";
import { Link, useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  return (
    <MainContainer>
      <motion.h1 animate={{ y: 0 }} transition={{ duration: 1 }}>
        Colections
      </motion.h1>
      <CardsContainer>
        <CardList>
          <h2>Rick And Morty List</h2>
          <ImageContainer onClick={() => history.push("/rick-morty")} />
        </CardList>
        <CardList>
          <h2>Pokemon's List</h2>
          <ImageContainer pokemon onClick={() => history.push("/pokemon")} />
        </CardList>
      </CardsContainer>
    </MainContainer>
  );
};

export default Home;
