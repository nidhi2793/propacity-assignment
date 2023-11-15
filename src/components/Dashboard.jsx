import { useParams } from "react-router-dom";
import { Accordian } from "./Accordian";
import { MainContent } from "./MainContent";
import { CATEGORIES } from "../constant";
import { useEffect, useState } from "react";
import { SideBar } from "./SideBar";

export const Dashboard = () => {
  // Get category form url and validate it.
  const { category: paramCategory } = useParams();
  const category = Object.values(CATEGORIES).includes(
    paramCategory?.toLowerCase()
  )
    ? paramCategory?.toLowerCase()
    : null;

  const [showSideBar, setShowSideBar] = useState(false);
  const [sideBarData, setSideBarData] = useState(null);

  const handleOnResourceClick = (data) => {
    if (data) {
      setSideBarData(data);
      setShowSideBar(true);
    }
  };

  useEffect(() => {
    setShowSideBar(false);
    setSideBarData(null);
  }, [category]);

  return (
    <div style={{ display: "flex" }}>
      <Accordian category={category} />
      <MainContent
        category={category}
        onResourceClick={handleOnResourceClick}
      />
      <SideBar
        resourceData={sideBarData}
        show={showSideBar}
        category={category}
        onClose={() => setShowSideBar(false)}
      />
    </div>
  );
};
