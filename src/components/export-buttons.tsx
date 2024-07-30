import React from "react";

import { TableType } from "../../types/table";
import { Icons } from "./icons";

interface ExportButtonsProps {
  tableData: TableType;
}

const ExportButtons: React.FC<ExportButtonsProps> = ({ tableData }) => {
  const handleJSONExport = () => {
    const jsonData = JSON.stringify(tableData, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "tableData.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCSVExport = () => {
    const csvHeader = tableData.columns.map((column) => column.title).join(",");
    const csvRows = tableData.data.map((row) =>
      tableData.columns
        .map((column) => {
          if (row[column.id] && row[column.id] instanceof Array) {
            return row[column.id].join(" ");
          }
          return row[column.id];
        })
        .join(",")
    );
    const csvContent = [csvHeader, ...csvRows].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "tableData.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-x__sm max-lg:space-y-5">
      <button className="table-export__button" onClick={handleJSONExport}>
        Export JSON <Icons.JSON />
      </button>
      <button className="table-export__button" onClick={handleCSVExport}>
        Export CSV <Icons.CSV />
      </button>
    </div>
  );
};

export default ExportButtons;
