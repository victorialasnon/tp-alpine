const initialState = {
  test: 'plumbing ok',
  currentStep : 0,
  steps : [
    'version',
    'color',
    'rims',
    'upholstery',
    'equipment',
    'accessories',
    'summary',
  ]
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default rootReducer;