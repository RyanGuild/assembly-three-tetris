import React, { Fragment } from "react";
import * as THREE from "three";
import { I32toColor } from "../utils/color";
import { useSelector } from "react-redux";
import { TrisState } from "../@types/tris-types";

export default function ActiveBlock() {
  const activeBlock = useSelector(
    (state: TrisState) => state.gameState.activeBlock
  );
  if (!activeBlock) return null;
  let { shape, width, height, x, y } = activeBlock;
  return (
    <Fragment>
      {Array.from(shape).map((_, index) => {
        let rowIndex = Math.floor(index / height);
        if (rowIndex > height) return null;
        let colIndex = index % height;
        if (colIndex > width) return null;
        let color = I32toColor(shape, index);
        if (!color) return null;
        return (
          <mesh
            key={`${rowIndex},${colIndex}`}
            position={new THREE.Vector3(x + rowIndex, y + colIndex, 1)}
          >
            <boxBufferGeometry attach="geometry" args={[0.9, 0.9, 0.9]} />
            <meshStandardMaterial attach="material" color={color} />
          </mesh>
        );
      })}
    </Fragment>
  );
}
