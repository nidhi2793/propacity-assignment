import { Link } from "react-router-dom";
import { CATEGORIES } from "../../constant";

export const Accordian = ({ category: selectedCategory }) => {
  return (
    <div className="accordian">
      {Object.values(CATEGORIES).map((category) => {
        const isSelected = selectedCategory === category;
        return (
          <Link
            to={`/categories/${category}`}
            style={{ textDecoration: "none" }}
            className={`accordian-item accordian-item-primary font-primary ${
              isSelected ? "accordian-item-highlighted" : ""
            }`}
            key={category}
          >
            <span style={{ width: "100%", display: "flex" }}>
              <img
                src="/icons/FolderSimple.svg"
                alt=""
                style={{ paddingRight: 8 }}
              />
              <span className="capitalize-first-letter">{category}</span>
            </span>
            {/* Change CaretRight to left one when selected */}
            <img
              src={`/icons/${isSelected ? "CaretUp.svg" : "CaretRight.svg"}`}
              alt=""
            />
          </Link>
        );
      })}
    </div>
  );
};
