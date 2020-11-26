import Axios from "axios";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import List from "../../components/List";

const RickMorty = () => {
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextPage] = useState(
    "https://rickandmortyapi.com/api/character/?page=1"
  );
  const [prevPage, setPrevPage] = useState("");
  const [page, setPage] = useState(1);

  const getCharactersList = async (page) => {
    const response = await Axios.get(page).catch((error) => console.log(error));

    if (response) {
      setCharacters([]);
      setCharacters([...response.data.results]);
      setPrevPage(response.data.info.prev);
      setNextPage(response.data.info.next);
    }
  };

  const goToNextPage = () => {
    getCharactersList(nextPage);
    setPage(page + 1);
  };

  const goToPrevPage = () => {
    getCharactersList(prevPage);
    if (page === 1) {
      setPage(1);
      return;
    }
    setPage(page - 1);
  };

  useEffect(() => {
    getCharactersList(nextPage);
  }, []);

  return (
    <>
      <Header />
      <div>
        <button onClick={() => page !== 0 && goToPrevPage()}>PrevPage</button>
        <span>{page}</span>
        <button onClick={goToNextPage}>NextPage</button>
      </div>
      <List list={characters} />
    </>
  );
};

export default RickMorty;
