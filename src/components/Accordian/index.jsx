export const Accordian = () => {
  // Fetch data and fill this.
  const items = ["Item1", "Item2", "Item3"];

  return (
    <div className="accordian">
      {items.map((item) => (
        <div className="accordian-item accordian-item-primary">
          <span style={{ width: "100%", display: "flex" }}>
            <img
              src="/icons/FolderSimple.svg"
              alt=""
              style={{ paddingRight: 8 }}
            />
            {item}
          </span>
          {/* Change CaretRight to left one when selected */}
          <img src="/icons/CaretRight.svg" alt="" />
        </div>
      ))}
    </div>
  );
};
