import React from "react";

export default function RowGrid(props) {
  return (
    <div className={`row${props.fluid ? "-fluid" : ""}`}>{props.children}</div>
  );
}
