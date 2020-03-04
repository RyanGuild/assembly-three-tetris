import React, { forwardRef, Ref, memo } from "react";
import { createPortal } from "react-dom";

let canvasRoot =
  document.getElementById("canvasRoot") ||
  (() => {
    let el = document.createElement("div");
    el.id = "canvasRoot";
    document.body.appendChild(el);
    return el;
  })();

export type GridCanvasProps = {
  width: number;
  height: number;
  id: string;
};

export default memo(
  forwardRef(function(
    { width, height, id }: GridCanvasProps,
    ref: Ref<HTMLCanvasElement>
  ) {
    return createPortal(
      <div id={id}>
        <canvas ref={ref} width={width} height={height} />
      </div>,
      canvasRoot
    );
  })
);
