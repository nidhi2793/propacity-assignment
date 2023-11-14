import { useParams } from "react-router-dom";
import { Accordian } from "./Accordian";
import { MainContent } from "./MainContent";
import { CATEGORIES } from "../constant";

export const Dashboard = () => {
  // Get category form url and validate it.
  const { category: paramCategory } = useParams();
  const category = Object.values(CATEGORIES).includes(
    paramCategory?.toLowerCase()
  )
    ? paramCategory?.toLowerCase()
    : null;

  return (
    <div style={{ display: "flex" }}>
      <Accordian category={category} />
      <MainContent category={category} />
    </div>
  );
};
