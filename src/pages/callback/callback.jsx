import { useForm } from "react-hook-form";

const Callback = () => {
  const form = useForm();

  const isActive = form.watch();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <input {...form.register("name")} />
      <input {...form.register("password")} />

      <button>확인</button>
    </div>
  );
};

export default Callback;
