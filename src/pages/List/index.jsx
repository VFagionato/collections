import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

const List = () => {
  const { typeOfList } = useParams();
  const [characterList, setCharacterList] = useState([]);
  const [nextPage, setNextPage] = useState(
    "https://rickandmortyapi.com/api/character/?page=1"
  );

  const getRickAndMortyList = async () => {
    const response = await Axios.get(nextPage).catch((error) =>
      alert("Error na api, verifique a aba network")
    );

    setCharacterList([...characterList, ...response.data.results]);

    if (response.data.next !== null) {
      setNextPage(response.data.next);
    }
  };

  const getPokemonsList = async () => {
    const response = await Axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=150"
    ).catch((error) =>
      alert("Erro na resposta da Api, verifique a aba networks")
    );

    setCharacterList([...response.data.results]);
  };

  const getCharacters = () => {
    if (typeOfList === "rick-and-morty") {
      getRickAndMortyList();
      return;
    }

    getPokemonsList();
  };

  useEffect(() => {
    getCharacters();
  }, [typeOfList, nextPage]);

  return <>List</>;
};

export default List;
