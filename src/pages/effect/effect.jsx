import { useForm } from "react-hook-form";

const Effect = ({ data }) => {
  const form = useForm({
    defaultValues: {
      value: data.value,
    },
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {form.watch("value")}
    </div>
  );
};

export default Effect;
