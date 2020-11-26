import { ListContainer } from "./styles";

const List = ({ list, addToFavoriteList }) => {
  return (
    <>
      {list.map((itemList, index) => {
        let urlImg = null;
        if (!itemList.id) {
          const brokenUrl = itemList.url.split("/");
          const id = brokenUrl[brokenUrl.length - 2];
          urlImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        } else {
          urlImg = itemList.image;
        }

        return (
          <ListContainer
            onClick={() => addToFavoriteList(itemList, urlImg)}
            key={index}
          >
            <div>
              <img src={urlImg} alt="" />
            </div>
            <div>
              <h2>{itemList.name}</h2>
            </div>
          </ListContainer>
        );
      })}
    </>
  );
};

export default List;
