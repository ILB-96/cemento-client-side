import React from "react";

import { TableMenuProps } from "./table-menu";
import { Icons } from "../icons";
import Dropdown from "../dropdown";
import ExportButtons from "../export-buttons";

const MenuLG: React.FC<TableMenuProps> = ({
  tableData,
  visibleColumns,
  handleAddNewRow,
  handleColumnToggle,
  handleFormVisible,
}) => {
  return (
    <div className="table-buttons__group max-md:hidden">
      <div className="space-x__sm">
        <button
          disabled={visibleColumns.length === 0}
          className="table-add__button"
          onClick={handleAddNewRow}
        >
          Add Row <Icons.ArrowDown />
        </button>
        <button className="table-add__button" onClick={handleFormVisible}>
          Add Column <Icons.ArrowRight />
        </button>
        <Dropdown
          fields={tableData.columns}
          visibleFields={visibleColumns}
          handleFieldToggle={handleColumnToggle}
          dropDownTitle="Columns"
        />
      </div>
      <ExportButtons tableData={tableData} />
    </div>
  );
};

export default MenuLG;
