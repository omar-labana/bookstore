const createBook = (book) => ({
  type: 'createBook',
  payload: book,
});

const removeBook = (book) => ({
  type: 'removeBook',
  payload: book,
});

const updateFilter = (filter) => ({
  type: 'updateFilter',
  payload: {
    filter,
  },
});

export { createBook, removeBook, updateFilter };
