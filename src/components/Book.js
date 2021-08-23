import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book, event } = props;
  const { id, title, category } = book;
  return (
    <>
      <tr key={id}>
        <td>{id}</td>
        <td>{title}</td>
        <td>{category}</td>
        <td>
          <button type="button" name="button" onClick={() => event(id)}>X</button>
        </td>
      </tr>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  event: PropTypes.func.isRequired,
};

export default Book;
