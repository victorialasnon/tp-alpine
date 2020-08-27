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
  // machine : configMachine,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    // case 'CONFIG_SEND':
    //   console.log(action.type + ' : ' + action.transition);
    //   console.log('state.config', state.config);
    //   configMachine.send(action.transition, state.config);
    //   console.log(configMachine.current);
    //   console.log('--------------------------------');

    //   if (action.step) {
    //     console.log('action.step : ' + action.step);
    //     return {
    //       ...state,
    //       step: action.step,
    //     };
    //   }
    //   return state;
    case 'SET_STEP':
      console.log('action.step : ',  action.step);
      return {
        ...state,
        step: action.step,
      };
    case 'UPDATE_CONFIG':
      console.log('action.config : ', action.config);
      return {
        ...state,
        config: {...state.config, ...action.config},
      };
    default:
      return state;
  }
}

export default rootReducer;
