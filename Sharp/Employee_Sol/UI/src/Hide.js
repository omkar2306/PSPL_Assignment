import React from "react";
import { useState } from "react";
import Add from "./Add";
import Hid from "./Hid.css";
const Hide = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="demo">
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "Cancel" : "Add"}
      </button>
      {show && <Add />}
    </div>
  );
};
export default Hide;
