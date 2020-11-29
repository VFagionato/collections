import { Link } from "react-router-dom";
import { MainContainer, StyledLink } from "./styles";
import { motion } from "framer-motion";

const BounceTranstion = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeOut",
  },
};

const Home = () => {
  return (
    <MainContainer>
      <motion.div
        transition={BounceTranstion}
        animate={{ y: ["100%", "-100%"] }}
        whileHover={{ y: { yoyo: "stopAnimation" } }}
      >
        <StyledLink to="/list/rick-and-morty">Collections</StyledLink>
      </motion.div>
    </MainContainer>
  );
};

export default Home;
