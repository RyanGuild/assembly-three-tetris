import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/index";
import setInputKey from "./actions/setInputKey";
import keyUp from "./actions/keyUp";
import newGame from "./actions/newGame";
import GridCanvas from "./world/CanvasCreator";
import "./index.css";
import App from "./Game";

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

function KeyDownEventHandler(event: KeyboardEvent) {
  //@ts-ignore
  store.dispatch(setInputKey(event.keyCode));
}
function KeyUpEventHandler(event: KeyboardEvent) {
  //@ts-ignore
  store.dispatch(keyUp(event.keyCode));
}
window.addEventListener("keydown", KeyDownEventHandler);
window.addEventListener("keyup", KeyUpEventHandler);

//@ts-ignore
store.dispatch(newGame());

ReactDOM.render(
  <Provider store={store}>
    <App />
    <GridCanvas id={"gridRoot"} width={100} height={100} />
  </Provider>,
  document.getElementById("root")
);
