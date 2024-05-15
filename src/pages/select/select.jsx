import { useState } from "react";
import { useForm } from "react-hook-form";

const Select = () => {
  const form = useForm({
    defaultValues: {
      select: "",
    },
  });
  const [toggle, setToggle] = useState(false);

  const handleSelect = (value) => {
    form.setValue("select", value);
  };

  console.log(form.formState.isValid);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div
        style={{
          position: "relative",
        }}
      >
        <button onClick={() => setToggle((prev) => !prev)}>
          {form.watch("select") || "선택하세요"}
        </button>
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            display: toggle ? "flex" : "none",
            flexDirection: "column",
          }}
        >
          <button onClick={() => handleSelect("선택1")}>선택1</button>
          <button onClick={() => handleSelect("선택2")}>선택2</button>
          <button onClick={() => handleSelect("선택3")}>선택3</button>
        </div>
      </div>

      <button>확인</button>
    </div>
  );
};

export default Select;
