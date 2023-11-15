export const SearchBar = ({ onInput = () => {} }) => {
  return (
    <div
      style={{
        width: 216,
        height: 32,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        border: "1px solid #fff",
        padding: "4px 8px",
        borderRadius: 4,
      }}
    >
      <img src="/icons/Search.svg" alt="" width={20} height={20} />
      <input onInput={onInput} className="search-input" placeholder="Search" />
    </div>
  );
};
