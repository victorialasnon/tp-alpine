const initialState = {
  test: 'plumbing ok'
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default rootReducer;