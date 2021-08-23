const filterReducer = (state = 'All', action) => {
  let target = state;
  switch (action.type) {
    case 'updateFilter':
      target = action.payload;
      return target.filter;
    default:
      return target;
  }
};

export default filterReducer;
