import { Input } from "@nextui-org/react";

const InputForm = (props) => {
  const { name, type, placeholder, label } = props;

  return (
    <>
      <div className="mb-4 font-medium tracking-wide">
        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          label={label}
        />
      </div>
    </>
  );
};

export default InputForm;
