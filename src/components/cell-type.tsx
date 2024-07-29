import React from "react";
import { styled } from "styled-components";

const FullContainer = styled.input`
  width: 100%;
`;

interface CellTypeProps {
  columnId: string;
  rowId: string;
  cellData?: any;
  handleCellChange: (rowId: string, columnId: string, value: any) => void;
}
export type CellType = {
  [key: string]: React.FC<CellTypeProps>;
};

const cellType: CellType = {
  string: ({ columnId, rowId, cellData, handleCellChange }: CellTypeProps) => (
    <FullContainer
      type="text"
      value={cellData}
      onChange={(e) => handleCellChange(rowId, columnId, e.target.value)}
    />
  ),
  number: ({ columnId, rowId, cellData, handleCellChange }: CellTypeProps) => (
    <FullContainer
      type="number"
      value={cellData}
      onChange={(e) => handleCellChange(rowId, columnId, e.target.value)}
    />
  ),
  boolean: ({ columnId, rowId, cellData, handleCellChange }: CellTypeProps) => (
    <input
      type="checkbox"
      checked={cellData === true}
      onChange={(e) => handleCellChange(rowId, columnId, e.target.checked)}
    />
  ),
  color: ({ columnId, rowId, cellData, handleCellChange }: CellTypeProps) => (
    <input
      type="color"
      value={cellData}
      onChange={(e) => handleCellChange(rowId, columnId, e.target.value)}
    />
  ),
  date: ({ columnId, rowId, cellData, handleCellChange }: CellTypeProps) => (
    <input
      type="date"
      value={cellData}
      onChange={(e) => handleCellChange(rowId, columnId, e.target.value)}
    />
  ),
  datetime: ({
    columnId,
    rowId,
    cellData,
    handleCellChange,
  }: CellTypeProps) => (
    <input
      type="datetime-local"
      value={cellData}
      onChange={(e) => handleCellChange(rowId, columnId, e.target.value)}
    />
  ),
  file: ({ columnId, rowId, handleCellChange }: CellTypeProps) => (
    <input
      type="file"
      onChange={(e) =>
        handleCellChange(
          rowId,
          columnId,
          e.target.files ? e.target.files[0].name : ""
        )
      }
    />
  ),
  month: ({ columnId, rowId, cellData, handleCellChange }: CellTypeProps) => (
    <input
      type="month"
      value={cellData}
      onChange={(e) => handleCellChange(rowId, columnId, e.target.value)}
    />
  ),
  range: ({ columnId, rowId, cellData, handleCellChange }: CellTypeProps) => (
    <input
      type="range"
      value={cellData}
      onChange={(e) =>
        handleCellChange(rowId, columnId, parseInt(e.target.value))
      }
    />
  ),
  time: ({ columnId, rowId, cellData, handleCellChange }: CellTypeProps) => (
    <input
      type="time"
      value={cellData}
      onChange={(e) => handleCellChange(rowId, columnId, e.target.value)}
    />
  ),
  week: ({ columnId, rowId, cellData, handleCellChange }: CellTypeProps) => (
    <input
      type="week"
      value={cellData}
      onChange={(e) => handleCellChange(rowId, columnId, e.target.value)}
    />
  ),
  select: ({ columnId, rowId, cellData, handleCellChange }: CellTypeProps) => {
    const data = cellData || [];

    return (
      <select
        value={cellData[0]}
        style={{ width: "100%" }}
        onChange={(e) => handleCellChange(rowId, columnId, e.target.value)}
      >
        {data.map((option: any, index: number) => (
          <option key={index + option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  },
};

export default cellType;
