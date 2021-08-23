import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book, event } = props;
  const { id, title, category } = book;
  return (
    <>
      <tr key={id} className="flex bg-white px-5 py-7 rounded border my-4 justify-between">
        <div>
          <span className="flex flex-col">
            <td className="text-gray-800 text-sm">{category}</td>
            <td className="text-xl">{title}</td>
            <td className="text-sm text-blue-300">Author Name</td>
          </span>
          <span className="text-sm text-blue-300 flex mt-5">
            <td className="mr-2 pr-2 border-r">
              <button type="button" name="button">Comments</button>
            </td>
            <td className="mr-2 pr-2 border-r">
              <button type="button" name="button" onClick={() => event(id)}>Remove</button>
            </td>
            <td>
              <button type="button" name="button">Edit</button>
            </td>
          </span>
        </div>
        <div className="flex items-center">
          <div>
            <i className="fas fa-circle-notch text-7xl text-blue-500" />
          </div>
          <div className="flex flex-col mx-4">
            <span className="text-3xl">99%</span>
            <span>Completed</span>
          </div>
          <hr className="border-l border-gray-300 h-32" />
          <div className="flex flex-col mx-4">
            <span className="text-sm text-gray-400">Current chapter</span>
            <span>Chapter 17</span>
            <button type="button" className="text-sm bg-blue-500 p-2 text-white rounded mt-9">UPDATE PROGRESS</button>
          </div>
        </div>
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
