import React, { useEffect, useRef, useState } from "react";

import { Icons } from "../icons";
import { TableMenuProps } from "./table-menu";
import Dropdown from "../dropdown";
import ExportButtons from "../export-buttons";

const MenuSM: React.FC<TableMenuProps> = ({
  tableData,
  visibleColumns,
  handleAddNewRow,
  handleColumnToggle,
  handleFormVisible,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div
      className="sticky top-0 left-0 md:hidden z-[200] flex w-[80vw]"
      ref={menuRef}
    >
      <button
        className={`z-50 m-0 size-full rounded-lg bg-transparent p-0 transition-transform duration-300 focus:bg-transparent ${
          menuOpen ? "-translate-y-10" : "translate-y-0"
        }`}
        onClick={() => setMenuOpen((prevState) => !prevState)}
        aria-expanded={menuOpen}
        aria-controls="sidebar-menu"
        aria-label="Toggle menu"
      >
        {menuOpen ? <Icons.Exit /> : <Icons.Menu />}
      </button>
      <div
        id="sidebar-menu"
        className={`fixed left-0 top-0 z-40 flex h-screen w-1/2 flex-col space-y-4 rounded-r-lg bg-gradient-to-br pl-2 pt-16 font-medium shadow-sm transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
        role="menu"
      >
        <div className="space-y-5">
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
          <ExportButtons tableData={tableData} />
        </div>
      </div>
      <Dropdown
        fields={tableData.columns}
        visibleFields={visibleColumns}
        handleFieldToggle={handleColumnToggle}
        dropDownTitle="Columns"
      />
    </div>
  );
};

export default MenuSM;
