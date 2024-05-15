import { useState } from "react";
import Form from "./pages/realUpdate/realUpdate";
import CheckBox from "./pages/checkbox/checkbox";
import Callback from "./pages/callback/callback";
import Effect from "./pages/effect/effect";

function App() {
  const [state, setState] = useState("");

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
            setState("checkbox");
          }}
        >
          체크박스
        </button>
        <button
          onClick={() => {
            setState("callback");
          }}
        >
          데이터 호출
        </button>
        <button
          onClick={() => {
            setState("useEffect");
          }}
        >
          초기화
        </button>
      </div>

      {state === "real" && <Form />}
      {state === "checkbox" && <CheckBox />}
      {state === "callback" && <Callback />}
      {state === "useEffect" && <Effect />}
    </div>
  );
}

export default App;
