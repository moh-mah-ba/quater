import { createStore, combineReducers, compose , applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {userSigninReducer} from "./reducsers/userReducers";
import { propertyReducer , addPropertyReducers, propertyDetailsReducer} from "./reducsers/propertyReducers";

const initialState = {
    userSigninReducer: {
        userInformation: localStorage.getItem("userInformation")?
        JSON.parse(localStorage.getItem("userInformation"))
        : null ,
    }
};

const reducer = combineReducers({
    userSigninReducer: userSigninReducer,
    addPropertyReducers: addPropertyReducers,
    propertyReducer: propertyReducer,
    propertyDetailsReducer: propertyDetailsReducer,
});

const enhancer = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;


const store = createStore(
    reducer,
    initialState,
    enhancer(applyMiddleware(thunk))
  );
  
  export default store;