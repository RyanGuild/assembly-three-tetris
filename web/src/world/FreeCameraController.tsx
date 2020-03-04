import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useThree, useFrame } from "react-three-fiber";
import * as THREE from "three";

import { InputKeys, TrisState } from "../@types/tris-types.d";

const cameraSpeed = 0.1;
const cameraRotSpeed = 0.001;

export default function FreeCameraController() {
  const inputKey = useSelector((state: TrisState) => state.inputKey);
  const { setDefaultCamera } = useThree();
  const cameraRef = useRef<THREE.Camera>(null);
  useEffect(() => {
    //camera setup
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    //@ts-ignore
    cameraRef.current = camera;
    camera.position.setZ(17);
    camera.position.setY(-2);
    setDefaultCamera(camera);
  }, []);

  useFrame(() => {
    if (!cameraRef.current || !inputKey) return;
    let curCamera = cameraRef?.current;
    if (curCamera != null) {
      switch (inputKey) {
        case InputKeys.Left:
          curCamera.position.setX(curCamera.position.x - cameraSpeed);
          break;
        case InputKeys.Right:
          curCamera.position.setX(curCamera.position.x + cameraSpeed);
          break;
        case InputKeys.Up:
          curCamera.position.setY(curCamera.position.y + cameraSpeed);
          break;
        case InputKeys.Down:
          curCamera.position.setY(curCamera.position.y - cameraSpeed);
          break;
        case InputKeys.Shift:
          curCamera.position.setZ(curCamera.position.z - cameraSpeed);
          break;
        case InputKeys.Space:
          curCamera.position.setZ(curCamera.position.z + cameraSpeed);
          break;
        case InputKeys.D:
          curCamera.rotateY(cameraRotSpeed);
          break;
        case InputKeys.A:
          curCamera.rotateY(-1 * cameraRotSpeed);
          break;
        case InputKeys.S:
          curCamera.rotateX(-1 * cameraRotSpeed);
          break;
        case InputKeys.W:
          curCamera.rotateX(cameraRotSpeed);
          break;
        default:
          break;
      }
    }
  });

  return <></>;
}
