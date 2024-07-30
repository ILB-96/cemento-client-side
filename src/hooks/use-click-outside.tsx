import React, { useEffect } from "react";

const useClickOutside = (
  ref: React.RefObject<HTMLDivElement>,
  handleClickOutside: () => void
) => {
  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handleClickOutside();
      }
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [ref, handleClickOutside]);
};

export default useClickOutside;
