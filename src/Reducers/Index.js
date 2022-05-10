import text from "./Text";
import counter from "./Counter";
import { combineReducers } from "redux";
const rootReducer=combineReducers({
    counter,
    text
})
export default rootReducer;