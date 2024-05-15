import { useState } from "react";
import Form from "./pages/realUpdate/realUpdate";
import Select from "./pages/select/select";
import Effect from "./pages/effect/effect";
import CustomForm from "./pages/customForm/customForm";

function App() {
  const [state, setState] = useState("");
  const [data, setData] = useState({
    value: 1,
  });

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "10px",
        }}
      >
        <button
          onClick={() => {
            setState("real");
          }}
        >
          실시간 업데이트
        </button>
        <button
          onClick={() => {
            setState("select");
          }}
        >
          커스텀
        </button>
        <button
          onClick={() => {
            setState("useEffect");
          }}
        >
          초기화
        </button>
        <button
          onClick={() => {
            setState("custom");
          }}
        >
          커스텀 Input
        </button>
      </div>

      {state === "real" && <Form />}
      {state === "select" && <Select />}
      {state === "useEffect" && <Effect data={data} />}
      {state === "useEffect" && (
        <button
          onClick={() =>
            setData((prev) => ({ ...prev, value: prev.value + 1 }))
          }
        >
          업데이트
        </button>
      )}
      {state === "custom" && <CustomForm />}
    </div>
  );
}

export default App;
