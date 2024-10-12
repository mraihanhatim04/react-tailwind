import { Input } from "@nextui-org/react";
import React from "react";

const InputSearch = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="container mx-auto">
      <div className="max-w-[300px] mt-10 ml-28">
        <Input
          type="text"
          placeholder="Search Product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default InputSearch;
