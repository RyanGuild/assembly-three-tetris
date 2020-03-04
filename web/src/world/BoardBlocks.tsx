import React, { Fragment } from "react";
import * as THREE from "three";
import { BOARD_HEIGHT } from "../Constants";
import { I32toColor } from "../utils/color";
import { useSelector } from "react-redux";
import { TrisState } from "../@types/tris-types";

export default function BoardBlocks() {
  const board = useSelector((state: TrisState) => state.gameState.board);
  if (!board) return null;

  return (
    <Fragment>
      {Array.from(board).map((_, index) => {
        let rowIndex = Math.floor(index / BOARD_HEIGHT);
        let colIndex = index % BOARD_HEIGHT;
        let color = I32toColor(board, index);
        if (!color) return null;
        console.log({ rowIndex, colIndex, color });
        return (
          <mesh
            key={`${rowIndex},${colIndex}`}
            position={new THREE.Vector3(rowIndex, colIndex + 1, 1)}
          >
            <boxBufferGeometry attach="geometry" args={[0.9, 0.9, 0.9]} />
            <meshStandardMaterial attach="material" color={color} />
          </mesh>
        );
      })}
    </Fragment>
  );
}
