import React from "react";

import { RowType, ColumnType } from "../../types/table";
import Cell from "./cell";

interface RowProps {
  rowData: RowType;
  columns: ColumnType[];
  handleCellChange: (rowId: string, columnId: string, value: any) => void;
}

const Row: React.FC<RowProps> = ({ rowData, columns, handleCellChange }) => {
  return (
    <tr>
      {columns.map((column) => (
        <Cell
          key={column.id + rowData.id}
          cellData={rowData[column.id]}
          rowId={rowData.id}
          column={column}
          handleCellChange={handleCellChange}
        />
      ))}
    </tr>
  );
};

export default Row;
