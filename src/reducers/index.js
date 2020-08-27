// import routes from '../config/routes';
// import configMachine from '../machines/Configurator';

const initialState = {
  step: 'Version',
  config: {
    version: [],
    color: [],
    rims: [],
    upholstery: [],
    equipment: [],
    accessories: [],
  },
  // steps: routes,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_STEP':
      console.log('action.step : ', action.step);
      return {
        ...state,
        step: action.step,
      };
    case 'UPDATE_CONFIG':
      return {
        ...state,
        config: { ...state.config, ...action.config },
      };
    case 'RESET_CONFIG':
      return {
        ...state,
        config: {
          version: [],
          color: [],
          rims: [],
          upholstery: [],
          equipment: [],
          accessories: [],
        },
      };
    default:
      return state;
  }
}

export default rootReducer;
