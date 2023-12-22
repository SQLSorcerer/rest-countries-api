

import { createStore, applyMiddleware, Store, Middleware, Dispatch, Action } from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import rootReducer, { RootState } from './reducers';

const store: Store<RootState, any, ThunkDispatch<RootState, any, ThunkAction<void, RootState, Action<string>, Action<string>>>> = createStore(
  rootReducer,
  applyMiddleware(thunk as Middleware<Dispatch, RootState, Dispatch>)
);

export type AppDispatch = ThunkDispatch<RootState, any, ThunkAction<void, RootState, Action<string>, Action<string>>>;

export default store;
