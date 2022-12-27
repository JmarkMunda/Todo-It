import { useState, ChangeEvent } from "react";

export const useSearch = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleReset = () => {
    setSearchValue("");
  };

  return [searchValue, handleSearchChange, handleReset] as const;
};
