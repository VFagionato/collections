import { useState, useEffect } from "react";
import { CardContainer, Card } from "./styles";
import Favorite from "@material-ui/icons/Favorite";

const CardList = ({ list, typeOfList }) => {
  const [FavList, setFavList] = useState(
    JSON.parse(window.localStorage.getItem("collections"))
  );

  const isInCollectionList = (obj) => {
    const found = FavList.find((element) => obj.name === element.name);
    if (found) {
      return true;
    }
    return false;
  };

  const addOrRemoveColletionList = (obj) => {
    if (isInCollectionList(obj)) {
      const newList = FavList.filter((element) => element.name !== obj.name);
      setFavList(newList);
    } else {
      setFavList([...FavList, obj]);
    }
  };

  useEffect(() => {
    window.localStorage.setItem("collections", JSON.stringify(FavList));
  }, [FavList]);

  return (
    <CardContainer>
      {list.map((character, index) => {
        const collectionObj = {};

        if (typeOfList === "rick-and-morty") {
          collectionObj.name = character.name;
          collectionObj.imagem = character.image;
          collectionObj.type = "rickAndMorty";
        } else if (typeOfList === "pokemon") {
          const id = index;
          const pokeUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
            id + 1
          }.png`;
          const urlImg = pokeUrl;
          collectionObj.name = character.name;
          collectionObj.imagem = urlImg;
          collectionObj.type = "pokemon";
        } else {
          collectionObj.name = character.name;
          collectionObj.imagem = character.imagem;
          collectionObj.type = character.type;
        }
        return (
          <Card
            key={index}
            onClick={() => addOrRemoveColletionList(collectionObj)}
          >
            <img src={collectionObj.imagem} alt={collectionObj.name} />
            <h2>{collectionObj.name}</h2>
            <Favorite
              fontSize="large"
              color={isInCollectionList(collectionObj) ? "secondary" : ""}
            />
          </Card>
        );
      })}
    </CardContainer>
  );
};

export default CardList;
