import { useState } from "react";

export const DropDown = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleOn3DotsClick = (e) => {
    e.stopPropagation();
    setIsVisible((prev) => !prev);
  };

  const handleOnBlur = () => {
    console.log("Running onBlur");
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

  // TODO: Check if free space is available on right side, if not open in left side.

  return (
    <div>
      <div tabIndex={0} onClick={handleOn3DotsClick} onBlur={handleOnBlur}>
        ...
      </div>
      {isVisible ? (
        <div className="dropdown dropdown-text">
          {dropDownOptions.map(({ name, iconPath = "", customStyle = {} }) => (
            <div style={customStyle} className="dropdown-items">
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
