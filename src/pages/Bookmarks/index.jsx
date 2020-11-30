import { useState, useEffect } from "react";
import Header from "../../components/Header";
import CardList from "../../components/CardLists";

const Bookmarks = () => {
  const [favoriteList, setFavoriteList] = useState([]);

  useEffect(() => {
    const localList = JSON.parse(window.localStorage.getItem("collections"));
    setFavoriteList(localList);
  }, [favoriteList]);

  return (
    <>
      <Header />
      <CardList list={favoriteList} typeOfList="null" />
    </>
  );
};

export default Bookmarks;
