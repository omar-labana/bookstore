const createBook = (book) => ({
  type: 'createBook',
  payload: book,
});

const removeBook = (book) => ({
  type: 'removeBook',
  payload: book,
});

export { createBook, removeBook };
