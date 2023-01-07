import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { userReducer } from "./Redux/reducer/userReducer"

const rootReducer = combineReducers({
    userList: userReducer
})

const initialState = {}  // initialstate is used for to show th inistailstate .

const middleware = [thunk]   // thunk ea peksha jast asu shaktat tya mule aapn tayla array amdhe gheun thevl ahe.

const Store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))   // ...middleware la Appan spred kel ahe we are creating copy.

export default Store