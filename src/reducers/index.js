import routes from '../routes';
import configMachine from '../machines/Configurator';

const initialState = {
  currentStep: 0,
  config: {
    version: [1],
    color: [1],
    rims: [1],
    upholstery: [0],
    equipment: [1],
    accessories: [1],
  },
  steps: routes,
  // machine : configMachine,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'FSM_SET':
      console.log(action.type + ' : ' + action.transition);
      console.log('state.config', state.config);
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
