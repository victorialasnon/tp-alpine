import routes from '../routes';
import configMachine from '../machines/Configurator';

const initialState = {
  test: 'plumbing ok',
  currentStep: 0,
  steps: routes,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "FSM_SET":
      console.log(action.type + " : " + action.transition);
      configMachine.send(action.transition);
      console.log(configMachine.current);
      console.log('----------------------------------------------------------');
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
