import React from "react";
import { IconContext } from "react-icons/lib";
function Iconlink({ href, target, component, desc, size, fsize }) {
  return (
    <div style={{ marginLeft: "5px", marginRight: "5px" }}>
      <IconContext.Provider value={{ color: "white" }}>
        <a href={href} target={target} style={{ fontSize: size }}>
          {component}
        </a>
        <p style={{ fontSize: fsize }}>{desc}</p>
      </IconContext.Provider>
    </div>
  );
}

export default Iconlink;
