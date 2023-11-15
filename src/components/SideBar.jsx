import { useEffect, useMemo, useState } from "react";
import { CATEGORIES_CONFIGS } from "../constant";

export const SideBar = ({
  resourceData,
  category,
  show = false,
  onClose = () => {},
}) => {
  console.log("show: ", show);
  const [isVisible, setIsVisible] = useState(show);
  const sideBarConfig = useMemo(
    () => CATEGORIES_CONFIGS[category]?.sideBarConfig,
    [category]
  );

  const handleOnClose = () => {
    setIsVisible(false);
    onClose();
  };

  useEffect(() => setIsVisible(show), [show]);

  console.log("isVisible: ", isVisible);

  return isVisible ? (
    <div style={{ width: 400 }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "16px 20px",
        }}
      >
        <span>{sideBarConfig.headerName}</span>
        <span onClick={handleOnClose}>
          <img src="/icons/Close.svg" width={24} height={24} alt="close" />
        </span>
      </div>
      {/* Content */}
      <div
        style={{
          padding: "20px 30px",
          borderTop: "1px solid #fff",
          borderBottom: "1px solid #fff",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {resourceData ? (
          sideBarConfig.items.map((item) => (
            <div>
              <div style={{ marginBottom: 8 }}>{item.name}</div>
              <div>
                {item.type === "img" ? (
                  <div
                    style={{
                      overflow: "hidden",
                      border: "1px solid #fff",
                      borderRadius: 8,
                      backgroundImage: `url(${
                        resourceData[item.key] || item.default
                      })`,
                      height: 244,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                ) : (
                  <div className="sidebar-item-values">
                    {resourceData[item.key] || item.default}
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="loader-container">
            Loading{" "}
            <img
              src="/icons/Loader.svg"
              alt="loading..."
              width={24}
              height={24}
              style={{ marginLeft: 8 }}
            />
          </div>
        )}
      </div>
      <div style={{ padding: "20px 10px 10px 24px" }}>
        <div className="sidebar-close-btn" onClick={handleOnClose}>
          Close
        </div>
      </div>
    </div>
  ) : null;
};
