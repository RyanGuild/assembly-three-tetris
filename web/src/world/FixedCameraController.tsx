import React, { useEffect, memo } from "react";
import { useThree } from "react-three-fiber";
import * as THREE from "three";
import WorldOffset from "./WorldOffset";

function FreeCameraController() {
  const { setDefaultCamera } = useThree();
  useEffect(() => {
    //camera setup
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.setZ(18);
    camera.position.setY(WorldOffset.y - 3);
    camera.position.setX(WorldOffset.x);
    camera.rotateX(0.1);
    setDefaultCamera(camera);
  }, [setDefaultCamera]);

  return <></>;
}

export default memo(FreeCameraController, () => true);
