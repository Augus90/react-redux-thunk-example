import { applyMiddleware, compose, createStore } from "redux";
import DriversReducer from './reducers/DriversReducer'
import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);

export const store = createStore(DriversReducer, enhancer)
// export const store = createStore(DriversReducer,applyMiddleware(thunk));