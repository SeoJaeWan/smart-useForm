import { useForm } from "react-hook-form";

const Form = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      password: "",
    },
  });

  const isActive = Object.values(form.watch()).every((value) => value);

  console.log("update", form.formState.isDirty);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <input
        style={{
          padding: "10px",
        }}
        {...form.register("name", {
          required: true,
        })}
      />
      <input
        style={{
          padding: "10px",
        }}
        {...form.register("password", {
          required: true,
        })}
      />

      <button
        style={{
          background: isActive ? "red" : "white",
        }}
      >
        확인
      </button>
    </div>
  );
};

export default Form;
