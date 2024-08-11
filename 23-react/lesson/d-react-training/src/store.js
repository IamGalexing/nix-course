import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./features/index.js";
import {thunk} from "redux-thunk";


const enhancers = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancers);
export default store;


