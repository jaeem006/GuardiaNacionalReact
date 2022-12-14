import React from "react";
import { useState } from "react";

function App(){
    const [text, setText] = useState("");

  const changeHandler = (event) => setText(event.target.value);

  return (
    <>
      <h1>{text}</h1>
      <input
        type="text"
        placeholder="Title"
        value={text}
        onChange={changeHandler}
      />
    </>
  );
}

export default App
