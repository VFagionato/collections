import { useState, useEffect } from "react";
import { CardContainer, Card } from "./styles";
import Favorite from "@material-ui/icons/Favorite";

const CardList = ({ list }) => {
  return (
    <CardContainer>
      {list.map((character, index) => {
        let urlImg = null;
        if (character.id) {
          urlImg = character.image;
        } else {
          const brokenUrl = character.url.split("/");
          const id = brokenUrl[brokenUrl.length - 2];
          const pokeUrlImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
          urlImg = pokeUrlImg;
        }

        return (
          <Card key={index}>
            <img src={urlImg} alt={character.name} />
            <h2>{character.name}</h2>
            <Favorite fontSize="large" />
          </Card>
        );
      })}
    </CardContainer>
  );
};

export default CardList;
