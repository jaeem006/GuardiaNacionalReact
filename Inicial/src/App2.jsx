import React, { useState } from "react";

function App2() {
  const [text, setText] = useState("");

  const changeHandler = (event) => setText(event.target.value);

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <input
        type="text"
        placeholder="Title"
        value={text}
        onChange={changeHandler}
      />
    </React.Fragment>
  );
}

export default App2;