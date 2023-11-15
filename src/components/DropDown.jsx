import { useState } from "react";

export const DropDown = ({ dropDownIconStyles = {}, position = "list" }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleOn3DotsClick = (e) => {
    e.stopPropagation();
    setIsVisible((prev) => !prev);
  };

  const handleOnBlur = () => {
    setIsVisible(false);
  };

  const dropDownOptions = [
    { name: "View", iconPath: "/icons/View.svg" },
    { name: "Download", iconPath: "/icons/Download.svg" },
    { name: "Rename", iconPath: "/icons/Edit.svg" },
    { name: "Share Link", iconPath: "/icons/Share.svg" },
    { name: "Move", iconPath: "/icons/FoldersStack.svg" },
    { name: "Mark Private", iconPath: "/icons/LockSimple.svg" },
    {
      name: "Delete",
      iconPath: "/icons/Dustbin.svg",
      customStyle: { color: "#f15454" },
    },
  ];

  return (
    <div>
      <div
        tabIndex={0}
        onClick={handleOn3DotsClick}
        onBlur={handleOnBlur}
        style={dropDownIconStyles}
      >
        <img src="/icons/ThreeDots.svg" width={24} height={24} alt="Options" />
      </div>
      {isVisible ? (
        <div
          className="dropdown dropdown-text"
          style={position === "left" ? { translate: "-152px 0px" } : {}}
        >
          {dropDownOptions.map(({ name, iconPath = "", customStyle = {} }) => (
            <div style={customStyle} className="dropdown-items" key={name}>
              <img
                src={iconPath}
                style={{ marginRight: 8 }}
                width={16}
                height={16}
                alt=""
              />
              {name}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};
