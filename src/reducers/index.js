import { createStore, combineReducers } from 'redux';
import booksReducer from './books';

const reducers = {
  books: booksReducer,
};

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer);

export default store;
