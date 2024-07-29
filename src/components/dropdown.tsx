import React, { useEffect, useState } from "react";
import { Icons } from "./icons";

interface DropdownProps {
  fields: any[];
  visibleFields: string[];
  handleFieldToggle: (id: string) => void;
  dropDownTitle?: string;
  className?: string;
  size?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  fields,
  visibleFields,
  handleFieldToggle,
  dropDownTitle = "",
  className = "",
  size = "1.3rem",
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className={`dropdown ${className}`}>
      <button
        className="dropbtn"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        {dropDownTitle}
        {fields.length === visibleFields.length ? (
          <Icons.Filter height={size} width={size} className="dropdown" />
        ) : (
          <Icons.FilterX height={size} width={size} className="dropdown" />
        )}
      </button>
      {isDropdownOpen && (
        <div className="dropdown-content">
          {fields.map((field) => (
            <label key={field.id}>
              <input
                type="checkbox"
                checked={visibleFields.includes(field.id)}
                onChange={() => handleFieldToggle(field.id)}
              />
              {field.title}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
