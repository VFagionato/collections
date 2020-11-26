import { ListContainer } from "./styles";

const List = ({ list }) => {
  return (
    <>
      {list.map((itemList, index) => {
        let urlImg = null;
        if (!itemList.id) {
          const brokenUrl = itemList.url.split("/");
          const id = brokenUrl[brokenUrl.length - 1];
          urlImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        } else {
          urlImg = itemList.image;
        }

        return (
          <ListContainer onClick={(e) => console.log(e.target)} key={index}>
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
