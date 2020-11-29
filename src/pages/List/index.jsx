import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import Header from "../../components/Header";
import CardList from "../../components/CardLists";
import { MainPage } from "./style";

const List = () => {
  const { typeOfList } = useParams();
  const [nextPage, setNextPage] = useState(
    "https://rickandmortyapi.com/api/character/?page=1"
  );

  const [RickAndMortyList, setRickAndMortyList] = useState([]);
  const [PokemonList, setPokemonList] = useState([]);
  const [characterList, setCharacterList] = useState([RickAndMortyList]);

  const getRickAndMortyList = async () => {
    const response = await Axios.get(nextPage).catch((error) =>
      console.log(error)
    );

    setRickAndMortyList([...RickAndMortyList, ...response.data.results]);

    if (response.data.info.next !== null) {
      setNextPage(response.data.info.next);
    }
  };

  const getPokemonsList = async () => {
    const response = await Axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=150"
    ).catch((error) => console.log(error));

    setPokemonList([...response.data.results]);
  };

  useEffect(() => {
    getRickAndMortyList();
  }, [nextPage]);

  useEffect(() => {
    getPokemonsList();
  }, []);

  useEffect(() => {
    typeOfList === "rick-and-morty"
      ? setCharacterList([...RickAndMortyList])
      : setCharacterList([...PokemonList]);
    console.log(characterList);
  }, [typeOfList, RickAndMortyList, PokemonList]);

  return (
    <MainPage>
      <Header typeOfList={typeOfList} />
      {characterList.length !== 0 && <CardList list={characterList} />}
    </MainPage>
  );
};

export default List;
