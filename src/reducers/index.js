import routes from '../routes';
import configMachine from '../machines/Configurator';

const initialState = {
  currentStep: 0,
  config: {
    version: [],
    color: [],
    rims: [],
    upholstery: [],
    equipment: [],
    accessories: [],
  },
  steps: routes,
  // machine : configMachine,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'FSM_SET':
      console.log(action.type + ' : ' + action.transition);
      configMachine.send(action.transition, state.config);
      console.log(configMachine.current);
      console.log('--------------------------------');
      return state;
    // return {
    //   ...state,
    //   fsm : {...state.fsm, current : action.transition}
    // }
    default:
      return state;
  }
}

export default rootReducer;
