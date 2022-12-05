import {persistReducer,persistStore} from "redux-persist";
import {AuthReducer} from "./reducers/AuthReducer";
import {createStore, combineReducers,applyMiddleware,compose} from "redux";
// sessionStorage 사용
import sessionStorage from "redux-persist/es/storage/session";
import { composeWithDevTools } from "redux-devtools-extension";
import { coinReducer, coinSaga } from "./reducers/coinReducer";
import { loadingReducer } from "./reducers/loadingReducer";
import { all } from "redux-saga/effects";
import ReduxThunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";




const rootReducer = combineReducers({
  Auth: AuthReducer,
  Coin: coinReducer,
  Loading: loadingReducer,
  
});

const persistConfig = {
  key: "root",
  // localStorage에 저장합니다.
  storage,
  // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
  whitelist: ["Auth"]
  // blacklist -> 그것만 제외합니다
};

function* rootSaga() {
  yield all([coinSaga()]);
};

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  composeWithDevTools(
      applyMiddleware(ReduxThunk, sagaMiddleware),
  )
);
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { persistor, store };
export {rootReducer, rootSaga}
// const store = createStore(rootReducer,
// composeWithDevTools(applyMiddleware(ReduxThunk, sagaMiddleware)));






