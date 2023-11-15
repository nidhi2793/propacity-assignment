import { GridItem } from "./GridItem";

const dataParser = (data, category) => {
  let parsedData = [];
  switch (category) {
    case "films":
      parsedData = data.map(({ title }) => ({ name: title }));
      break;
    case "people":
    case "planets":
    case "species":
    case "starships":
    case "vehicles":
      parsedData = data.map(({ name }) => ({ name }));
      break;
    default:
      break;
  }
  return parsedData;
};

export const GridContainer = ({ data, category, onItemClick = () => {} }) => {
  return (
    <div className="grid-container">
      {data && data.length ? (
        dataParser(data, category).map((parsedData, index) => (
          <GridItem
            imageUrl={parsedData.imageUrl || "https://picsum.photos/354/160"}
            name={parsedData.name || "Name Missing"}
            category={category}
            onClick={() => onItemClick(data[index])}
          />
        ))
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};
