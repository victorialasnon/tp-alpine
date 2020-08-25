import routes from '../routes';

const initialState = {
  fsm: {
    current: 'version',
    states: {
      version: {
        color: 'color',
        submit: 'color',
      },
      color: {
        version: 'version',
        rims: 'rims',
        submit: 'rims',
      },
      rims: {
        reset: 'version',
        navToColor: 'color',
        submit: 'version',
      },
    },
  },
  test: 'plumbing ok',
  currentStep: 0,
  steps: routes,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "FSM_SET":
      console.log(action.type + " : " + action.transition);
      return {
        ...state, 
        fsm : {...state.fsm, current : action.transition}
      }
    default:
      return state;
  }
}

export default rootReducer;
