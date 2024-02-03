import React from "react";
import { IoIosOpen } from "react-icons/io";

export const NavBoard = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <h1 style={{ marginRight: "8px", marginBottom: "0" }}>TemanCurhat</h1>
      <IoIosOpen
        color="#003d33"
        size={30}
        style={{ alignSelf: "center", marginTop: "0" }}
      />
    </div>
  );
};
