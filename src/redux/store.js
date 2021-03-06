import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const middleWares = [thunk];

const enhancer = applyMiddleware(...middleWares);

const store = createStore(rootReducer, composeWithDevTools(enhancer));
export const persistor = persistStore(store);
export default store;
