import { Input } from "@nextui-org/react";

const InputSearch = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="max-w-[300px] mt-10 ml-4">
          <Input type="email" placeholder="Search Product..." />
        </div>
      </div>
    </>
  );
};

export default InputSearch;
