import { useEffect, useState } from "react";

export const ListViewSwitch = ({
  defaultView = "list",
  onSwitch = () => {},
}) => {
  const [selectedView, setSelectedView] = useState(defaultView);

  const handleOnSwitch = (view) => {
    setSelectedView(view);
    onSwitch(view);
  };

  useEffect(() => {
    setSelectedView(defaultView);
  }, [defaultView]);

  const expandedPill = (view, position) => (
    <div
      style={{
        width: 68,
        padding: 4,
        borderRadius: position === 0 ? "4px 0px 0px 4px" : "0px 4px 4px 0px",
        backgroundColor: "#f1f1f5",
        border: "1px solid #dedede",
        display: "flex",
        alignItems: "center",
        justifyContent: "flext-start",
        color: "#696974",
      }}
      onClick={() => handleOnSwitch(view)}
    >
      <img
        src={
          view === "grid"
            ? "/icons/GridViewDark.svg"
            : "/icons/ListViewDark.svg"
        }
        alt={view}
      />
      <span className="capitalize-first-letter">{view}</span>
    </div>
  );

  const collapsedPill = (view, position) => (
    <div
      style={{
        width: 32,
        padding: 4,
        borderRadius: position === 0 ? "4px 0px 0px 4px" : "0px 4px 4px 0px",
        border: "1px solid #f1f1f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#dedede",
      }}
      onClick={() => handleOnSwitch(view)}
    >
      <img
        src={
          view === "grid"
            ? "/icons/GridViewLight.svg"
            : "/icons/ListViewLight.svg"
        }
        alt={view}
      />
    </div>
  );

  return (
    <div style={{ width: 100, height: 32, display: "flex", cursor: "pointer" }}>
      {selectedView === "grid"
        ? expandedPill("grid", 0)
        : collapsedPill("grid", 0)}
      {selectedView === "list"
        ? expandedPill("list", 1)
        : collapsedPill("list", 1)}
    </div>
  );
};
