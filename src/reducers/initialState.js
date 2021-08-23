import { v4 as uuidv4 } from 'uuid';

const initialState = {
  books: [
    {
      id: uuidv4(),
      title: 'Weird!',
      category: 'Horror',
    },
    {
      id: uuidv4(),
      title: 'Salt',
      category: 'History',
    },
    {
      id: uuidv4(),
      title: 'Kill',
      category: 'Action',
    },
    {
      id: uuidv4(),
      title: 'Animals',
      category: 'Kids',
    },
    {
      id: uuidv4(),
      title: 'Chickens',
      category: 'Learning',
    },
  ],
};

export default initialState;
