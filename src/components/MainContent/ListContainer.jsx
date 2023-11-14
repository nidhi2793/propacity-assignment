import { useEffect, useState } from "react";
import { CATEGORIES_CONFIGS } from "../../constant";

export const ListContainer = ({ data, category }) => {
  const [headerItems, setHeaderItems] = useState([]);
  const [rowKeys, setRowKeys] = useState([]);

  useEffect(() => {
    const headerEntries = [];
    const rowEntries = [];
    (CATEGORIES_CONFIGS[category]?.listCells || []).forEach(({ name, key }) => {
      headerEntries.push(name);
      rowEntries.push(key);
    });
    headerEntries.push("");
    rowEntries.push("options");
    setHeaderItems(headerEntries);
    setRowKeys(rowEntries);
  }, [category]);

  return (
    <div style={{ padding: "10px 20px 20px 20px" }}>
      {/* Header */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead style={{ backgroundColor: "#4D5875" }}>
          <tr>
            {headerItems.map((item) => (
              <th
                style={{ textAlign: "left", backgroundColor: "#4D5875" }}
                className="list-cell"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              {rowKeys.map((key) => {
                return key === "options" ? (
                  <span>DropDown</span>
                ) : (
                  <td className="list-cell" style={{ height: 54 }}>
                    {item[key]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div>
        {headerItems.map((item) => (
          <span>{item}</span>
        ))}
      </div>
      <div>
        {data.map((item) => (
          <div>
            {rowKeys.map((key) => (
              <span>{item[key]}</span>
            ))}
          </div>
        ))}
      </div> */}
    </div>
  );
};
