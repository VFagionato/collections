import Axios from "axios";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import List from "../../components/List";

const Pokemon = () => {
  const [favList, setFavList] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
  );
  const [prevPage, setPrevPage] = useState("");

  const getPokemons = async (page) => {
    const response = await Axios.get(page).catch((error) => {
      console.log(error);
    });

    if (response) {
      setPokemons([]);
      setPokemons([...response.data.results]);
      setNextPage(response.data.next);
      setPrevPage(response.data.previous);
    }
  };

  const goToNextPage = () => {
    getPokemons(nextPage);
    setPage(page + 1);
  };

  const goToPrevPage = () => {
    getPokemons(prevPage);
    setPage(page - 1);
  };

  const addToFav = (item, image) => {
    const objFav = {
      name: item.name,
      ImageUrl: image,
      type: 1,
    };

    if (favList === null) {
      setFavList([objFav]);
    } else {
      const itemAlredyAdded = favList.find(
        (element) => element.name === objFav.name
      );
      console.log(itemAlredyAdded);
      if (!itemAlredyAdded) {
        setFavList([...favList, objFav]);
      }
    }
  };

  useEffect(() => {
    window.localStorage.setItem("PokeCollection", JSON.stringify(favList));
  }, [favList]);

  useEffect(() => {
    getPokemons(nextPage);
  }, []);

  return (
    <>
      <Header />
      <button onClick={() => prevPage && goToPrevPage()}>PrevPage</button>
      <span>{page}</span>
      <button onClick={() => nextPage && goToNextPage()}>NextPage</button>
      <List list={pokemons} addToFavoriteList={addToFav} />
    </>
  );
};

export default Pokemon;
