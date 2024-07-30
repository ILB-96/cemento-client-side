import React from "react";

import MenuSM from "./menu-sm";
import { TableType } from "../../../types/table";

import MenuLG from "./menu-lg";

export interface TableMenuProps {
  tableData: TableType;
  visibleColumns: string[];
  handleAddNewRow: () => void;
  handleColumnToggle: (columnId: string) => void;
  handleFormVisible: () => void;
}
const TableMenu: React.FC<TableMenuProps> = ({
  tableData,
  visibleColumns,
  handleAddNewRow,
  handleColumnToggle,
  handleFormVisible,
}) => {
  return (
    <div>
      <MenuLG
        tableData={tableData}
        visibleColumns={visibleColumns}
        handleFormVisible={handleFormVisible}
        handleAddNewRow={handleAddNewRow}
        handleColumnToggle={handleColumnToggle}
      />
      <MenuSM
        tableData={tableData}
        visibleColumns={visibleColumns}
        handleFormVisible={handleFormVisible}
        handleAddNewRow={handleAddNewRow}
        handleColumnToggle={handleColumnToggle}
      />
    </div>
  );
};

export default TableMenu;
