import React from "react";
import { GridBoard } from "./GridBoard";

export const CreateBoard = ({ data }) => {
  return (
    <div class="max-w-5xl m-auto grid grid-cols-3 gap-2">
      {data.map((item) => {
        return <GridBoard key={item._id} item={item} />;
      })}
    </div>
  );
};
