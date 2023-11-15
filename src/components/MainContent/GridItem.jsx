import { CATEGORIES_CONFIGS } from "../../constant";
import { DropDown } from "../DropDown";

export const GridItem = ({
  imageUrl,
  name,
  category,
  data,
  onClick = () => {},
}) => {
  return (
    <div style={{ width: 354, cursor: "pointer" }} onClick={onClick}>
      <div style={{ height: 160, overflow: "hidden", borderRadius: 8 }}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className="grid-item-title-container">
        <span style={{ display: "flex", alignItems: "center" }}>
          <img
            src={`/icons/${CATEGORIES_CONFIGS[category]?.gridTitleIcon}`}
            alt=""
            style={{ marginRight: 12 }}
          />
          {name}
        </span>
        <DropDown data={data} />
      </div>
    </div>
  );
};
