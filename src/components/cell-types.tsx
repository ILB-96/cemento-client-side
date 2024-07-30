import React from "react";
import { styled } from "styled-components";

const FullContainer = styled.input`
  width: 100%;
`;

interface CellTypeProps {
  cellData: any;
  handleInputChange: (value: any) => void;
}
type CellType = {
  [key: string]: React.FC<CellTypeProps>;
};

const cellTypes: CellType = {
  string: ({ cellData, handleInputChange }: CellTypeProps) => (
    <FullContainer
      type="text"
      value={cellData}
      onChange={(e) => handleInputChange(e.target.value)}
    />
  ),
  number: ({ cellData, handleInputChange }: CellTypeProps) => (
    <FullContainer
      type="number"
      value={cellData}
      onChange={(e) => handleInputChange(e.target.value)}
    />
  ),
  boolean: ({ cellData, handleInputChange }: CellTypeProps) => (
    <input
      type="checkbox"
      checked={cellData === true}
      onChange={(e) => handleInputChange(e.target.checked)}
    />
  ),
  color: ({ cellData, handleInputChange }: CellTypeProps) => (
    <input
      type="color"
      value={cellData}
      onChange={(e) => handleInputChange(e.target.value)}
    />
  ),
  date: ({ cellData, handleInputChange }: CellTypeProps) => (
    <input
      type="date"
      value={cellData}
      onChange={(e) => handleInputChange(e.target.value)}
    />
  ),
  datetime: ({ cellData, handleInputChange }: CellTypeProps) => (
    <input
      type="datetime-local"
      value={cellData}
      onChange={(e) => handleInputChange(e.target.value)}
    />
  ),
  file: ({ handleInputChange }: CellTypeProps) => (
    <input
      type="file"
      onChange={(e) =>
        handleInputChange(e.target.files ? e.target.files[0].name : "")
      }
    />
  ),
  month: ({ cellData, handleInputChange }: CellTypeProps) => (
    <input
      type="month"
      value={cellData}
      onChange={(e) => handleInputChange(e.target.value)}
    />
  ),
  range: ({ cellData, handleInputChange }: CellTypeProps) => (
    <input
      type="range"
      value={cellData}
      onChange={(e) => handleInputChange(parseInt(e.target.value))}
    />
  ),
  time: ({ cellData, handleInputChange }: CellTypeProps) => (
    <input
      type="time"
      value={cellData}
      onChange={(e) => handleInputChange(e.target.value)}
    />
  ),
  week: ({ cellData, handleInputChange }: CellTypeProps) => (
    <input
      type="week"
      value={cellData}
      onChange={(e) => handleInputChange(e.target.value)}
    />
  ),
  select: ({ cellData, handleInputChange }: CellTypeProps) => {
    const data = cellData || [];

    return (
      <select
        value={cellData[0]}
        style={{ width: "100%" }}
        onChange={(e) => handleInputChange(e.target.value)}
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

export default cellTypes;
