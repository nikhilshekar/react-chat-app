import { createStore } from "redux";
import rootreducer from "../reducers";

let store;
export function configureStore() {
  store = createStore(rootreducer);
  return store;
}
