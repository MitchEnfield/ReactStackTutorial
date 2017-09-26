import { createSelector } from 'reselect'

export default function user(state={}, action={}){
  switch(action.type){
    default:
      return state;
  }
}

// Selectors

export const booksSelecter = state => state.books;

export const allBooksSelector = createSelector(booksSelecter, booksHash =>
  Object.values(booksHash)
);
