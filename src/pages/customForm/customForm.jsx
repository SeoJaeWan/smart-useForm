import useCustomForm from "../../hooks/useForm";

const CustomForm = () => {
  const form = useCustomForm({
    defaultValues: {
      value: 1,
    },
  });

  const handleUpdate = () => {
    form.setValue("value", "10");
  };

  const handleGetValue = () => {
    console.log(form.getValues());
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <input {...form.register("value")} />

      <button onClick={handleUpdate}>업데이트</button>
      <button onClick={handleGetValue}>조회</button>
    </div>
  );
};

export default CustomForm;
