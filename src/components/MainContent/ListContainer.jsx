import { useMemo } from "react";
import { CATEGORIES_CONFIGS } from "../../constant";

export const ListContainer = ({ data, category, onItemClick = () => {} }) => {
  const headers = useMemo(
    () =>
      (CATEGORIES_CONFIGS[category]?.listCells || []).map(({ name }) => name),
    [category]
  );

  const rows = useMemo(
    () =>
      data.map((item) => {
        const cells = (CATEGORIES_CONFIGS[category]?.listCells || []).map(
          ({ key, formatter }) => {
            let value = item[key];
            if (formatter) {
              value = formatter({ key, data: item });
            }
            return value;
          }
        );
        return { cells, rowData: item };
      }),
    [data, category]
  );

  return (
    <div style={{ padding: "10px 20px 20px 20px" }}>
      {/* Header */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead style={{ backgroundColor: "#4D5875" }}>
          <tr>
            {headers.map((item) => (
              <th
                style={{ textAlign: "left", backgroundColor: "#4D5875" }}
                className="list-cell"
                key={item}
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(({ cells, rowData }, index) => (
            <tr
              onClick={() => onItemClick(rowData)}
              style={{ cursor: "pointer" }}
              className="list-row"
              key={index}
            >
              {cells.map((cell, index) => (
                <td className="list-cell" style={{ height: 54 }} key={index}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
