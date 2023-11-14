import { useEffect, useState } from "react";
import { CATEGORIES_MAPPINGS, DATA_URL } from "../../constant";
import { GridContainer } from "./GridContainer";

const fetchCategoryData = async (category) => {
  const data = [];
  try {
    const url = `${DATA_URL}${category}/`;
    const response = await fetch(url);
    const { results } = (await response.json()) || {};
    data.push(...results);
  } catch (err) {
    console.log("Error: ", err);
  }
  console.log("Data: ", data);
  return data;
};

export const MainContent = ({ category }) => {
  const [categoryData, setCateoryData] = useState([]);
  const [viewType, setViewType] = useState(
    CATEGORIES_MAPPINGS[category]?.defaultListView
  );
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(true);
    if (category) {
      (async () => {
        const data = await fetchCategoryData(category);
        setCateoryData(data);
      })();
    }
    setIsloading(false);
  }, [category]);

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
      }}
    >
      {isLoading ? (
        <span>Loading...</span>
      ) : !category ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <div className="main-content-default-view">
            <div style={{ width: 647, height: 218, overflow: "hidden" }}>
              <img
                src="/images/defaultContentPoster.png"
                alt="default poster"
                style={{ width: "100%", translate: "0 -70px" }}
              ></img>
            </div>
            <div className="welcome-to-star-wars">
              Welcome to Star Wars Dashboard
            </div>
            <div className="welcome-to-star-wars-description">
              Star Wars is an American epic space opera multimedia franchise
              created by George Lucas, which began with the eponymous 1977 film
              and quickly became a worldwide pop culture phenomenon.
            </div>
          </div>
        </div>
      ) : (
        <div style={{ width: "100%" }}>
          <div
            style={{
              padding: "12px 20px",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <span className="capitalize-first-letter">{category}</span>
            <span>Selector</span>
          </div>
          <div>
            <GridContainer data={categoryData} category={category} />
          </div>
        </div>
      )}
    </div>
  );
};