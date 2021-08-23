import { createStore, combineReducers } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';

const reducers = {
  books: booksReducer,
  filter: filterReducer,
};

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer);

export default store;
