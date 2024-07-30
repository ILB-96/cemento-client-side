import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { TableType, RowType, ColumnType } from "../../types/table";
import Row from "./row";
import NewColumnForm from "./new-column-form";
import TableMenu from "./table-menu/table-menu";
interface TableProps {
  tableData: TableType;
}
const Table: React.FC<TableProps> = ({ tableData }) => {
  const [table, setTable] = useState<TableType>(() => ({
    columns: [...tableData.columns.sort((a, b) => a.ordinalNo - b.ordinalNo)],
    data: [...tableData.data],
  }));
  const [visibleColumns, setVisibleColumns] = useState<string[]>(() =>
    tableData.columns.map((column) => column.id)
  );
  const [newColumnFormVisible, setNewColumnFormVisible] = useState(false);

  const handleAddNewRow = () => {
    let newRow: RowType = { id: uuidv4() };

    table.columns.forEach((column) => {
      newRow[column.id] = "";
    });

    setTable((prevTable) => ({
      columns: prevTable.columns,
      data: [...prevTable.data, newRow],
    }));
  };

  const handleCellChange = (rowId: string, columnId: string, value: any) => {
    setTable((prevTable) => {
      const updatedData = prevTable.data.map((row) => {
        if (row.id === rowId) {
          if (row[columnId] instanceof Array) {
            return {
              ...row,
              [columnId]: [
                value,
                ...row[columnId].filter((v: any) => v.toString() !== value),
              ],
            };
          }
          return {
            ...row,
            [columnId]: value,
          };
        }
        return row;
      });
      return {
        columns: [...prevTable.columns],
        data: updatedData,
      };
    });
  };

  const handleColumnToggle = (columnId: string) => {
    setVisibleColumns((prev) =>
      prev.includes(columnId)
        ? prev.filter((id) => id !== columnId)
        : [...prev, columnId]
    );
  };

  const handleAddColumn = (newColumn: ColumnType) => {
    setTable((prevTable) => ({
      columns: [...prevTable.columns, newColumn],
      data: prevTable.data.map((row) => {
        return { ...row, [newColumn.id]: "" };
      }),
    }));
    setVisibleColumns((prev) => [...prev, newColumn.id]);
  };
  const handleFormVisible = () => {
    setNewColumnFormVisible((prev) => !prev);
  };

  return (
    <section id="data-table">
      {newColumnFormVisible && (
        <NewColumnForm
          onClose={() => setNewColumnFormVisible(false)}
          columns={table.columns}
          onAddColumn={handleAddColumn}
        />
      )}

      <TableMenu
        tableData={table}
        visibleColumns={visibleColumns}
        handleAddNewRow={handleAddNewRow}
        handleColumnToggle={handleColumnToggle}
        handleFormVisible={handleFormVisible}
      />

      <table className="grid__table">
        <thead>
          <tr>
            {table.columns
              .filter((column) => visibleColumns.includes(column.id))
              .map((column) => {
                return (
                  <th
                    className="column__title"
                    key={column.id}
                    id={`col-${column.id}`}
                    style={{
                      maxWidth: `${column.width}ch`,
                      minWidth: `${column.width}ch`,
                    }}
                  >
                    {column.title}{" "}
                  </th>
                );
              })}
          </tr>
        </thead>
        <tbody>
          {table.data.map((row) => (
            <Row
              key={row.id}
              rowData={row}
              columns={table.columns.filter((column) =>
                visibleColumns.includes(column.id)
              )}
              handleCellChange={handleCellChange}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
