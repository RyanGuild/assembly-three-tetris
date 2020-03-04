import React, { Fragment } from "react";
import * as THREE from "three";
import WorldOffset from "./WorldOffset";
import {
  BOARD_WIDTH,
  BOARD_HEIGHT,
  BOARD_BORDER_Y_WIDTH,
  BOARD_BORDER_X_WIDTH,
  GAME_DEPTH
} from "../Constants";

const vOffset = (BOARD_HEIGHT + BOARD_BORDER_Y_WIDTH) / 2;
const hOffset = (BOARD_WIDTH + BOARD_BORDER_X_WIDTH) / 2;
const fieldWidth = BOARD_WIDTH + BOARD_BORDER_X_WIDTH * 2;

export default function BoardBase() {
  return (
    <Fragment>
      <mesh
        position={WorldOffset.clone().add(
          new THREE.Vector3(hOffset, 0, GAME_DEPTH)
        )}
      >
        <boxBufferGeometry
          attach="geometry"
          args={[BOARD_BORDER_X_WIDTH, BOARD_HEIGHT, 1]}
        />
        <meshStandardMaterial attach="material" color={"grey"} />
      </mesh>
      <mesh
        position={WorldOffset.clone().add(
          new THREE.Vector3(-1 * hOffset, 0, GAME_DEPTH)
        )}
      >
        <boxBufferGeometry
          attach="geometry"
          args={[BOARD_BORDER_X_WIDTH, BOARD_HEIGHT, 1]}
        />
        <meshStandardMaterial attach="material" color={"grey"} />
      </mesh>
      <mesh
        position={WorldOffset.clone().add(
          new THREE.Vector3(0, vOffset, GAME_DEPTH)
        )}
      >
        <boxBufferGeometry
          attach="geometry"
          args={[fieldWidth, BOARD_BORDER_Y_WIDTH, 1]}
        />
        <meshStandardMaterial attach="material" color={"grey"} />
      </mesh>
      <mesh
        position={WorldOffset.clone().add(
          new THREE.Vector3(0, -1 * vOffset, GAME_DEPTH)
        )}
      >
        <boxBufferGeometry
          attach="geometry"
          args={[fieldWidth, BOARD_BORDER_Y_WIDTH, 1]}
        />
        <meshStandardMaterial attach="material" color={"grey"} />
      </mesh>
      <mesh position={WorldOffset}>
        <boxBufferGeometry
          attach="geometry"
          args={[BOARD_WIDTH, BOARD_HEIGHT, 1]}
        />
        <meshStandardMaterial attach="material" color={"grey"} />
      </mesh>
    </Fragment>
  );
}
