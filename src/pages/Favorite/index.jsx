import { useState } from "react";
import Header from "../../components/Header";
import List from "../../components/List";

const Favorite = () => {
  const [theFavoriteList, setTheFavoriteList] = useState([]);
  return (
    <>
      <Header />
      <List list={theFavoriteList} />
    </>
  );
};

export default Favorite;
