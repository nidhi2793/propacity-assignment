import { Accordian } from "./Accordian";
import { Header } from "./Header";
import { MainContent } from "./MainContent";

export const Dashboard = () => {
  return (
    <div className="font-primary">
      <Header />
      <div style={{ display: "flex" }}>
        <Accordian />
        <MainContent />
      </div>
    </div>
  );
};
