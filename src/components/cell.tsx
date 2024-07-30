import React from "react";

import { ColumnType } from "../../types/table";
import cellTypes from "./cell-types";
interface CellProps {
  rowId: string;
  cellData?: any;
  column: ColumnType;
  handleCellChange: (rowId: string, columnId: string, value: any) => void;
}
const Cell: React.FC<CellProps> = ({
  rowId,
  cellData = "",
  column,
  handleCellChange,
}) => {
  const { id, type, width } = column;
  const CellComponent = cellTypes[type] || cellTypes.string;
  
  const handleChange = (value: any) => {
    handleCellChange(rowId, id, value);
  };

  return (
    <td style={{ maxWidth: `${width}ch` }} className="item">
      <CellComponent cellData={cellData} handleInputChange={handleChange} />
    </td>
  );
};

export default Cell;
