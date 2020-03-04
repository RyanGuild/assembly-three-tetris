import React, { useEffect } from "react";
import { Canvas } from "react-three-fiber";
import { ReactReduxContext, Provider } from "react-redux";
import BoardBase from "./world/BoardBase";
import CameraController from "./world/FixedCameraController";
import { useSelector, useDispatch } from "react-redux";
import { TrisState, InputKeys } from "./@types/tris-types.d";
import BoardBlocks from "./world/BoardBlocks";
import ActiveBlock from "./world/ActiveBlock";
import activeBlockDrop from "./actions/activeBlockDrop";
import activeBlockLeft from "./actions/activeBlockLeft";
import activeBlockRight from "./actions/activeBlockRight";
import activeBlockRotateCw from "./actions/activeBlockRotateCw";

function App() {
  const dispatch = useDispatch();

  //useEffect(() => {
  //  let timeout = setTimeout(() => dispatch(activeBlockDrop()), 1000);
  //  return () => clearTimeout(timeout);
  //});

  const inputKey: InputKeys | null = useSelector(
    (state: TrisState) => state.inputKey
  );
  useEffect(() => {
    switch (inputKey) {
      case InputKeys.Left:
        dispatch(activeBlockLeft());
        break;
      case InputKeys.Right:
        dispatch(activeBlockRight());
        break;
      case InputKeys.Down:
        dispatch(activeBlockDrop());
        break;
      case InputKeys.Up:
        dispatch(activeBlockRotateCw());
        break;
    }
  }, [inputKey, dispatch]);

  return (
    <ReactReduxContext.Consumer>
      {({ store }) => (
        <div id="App" onClick={() => {}}>
          <Canvas>
            <Provider store={store}>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <ActiveBlock />
              <BoardBlocks />
              <BoardBase />
              <CameraController />
            </Provider>
          </Canvas>
        </div>
      )}
    </ReactReduxContext.Consumer>
  );
}

export default App;
