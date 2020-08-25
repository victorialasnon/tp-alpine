import routes from '../routes';

/**
 * Define possible states, transitions, handlers, helpers.
 * 
 * @todo Consider wether to integrate with redux store or just track context
 *       in redux store.
 */
const configMachine = {
    current: 'version',
    states: {
      version: {
        submit: function() { 
          /** Check wether correct option is submitted here. */
          this.set('settings');
        },
      },
      settings: {
        submit:  function() {
          /** Display next empty option screen or summary if all done. */
          this.set('summary');
        },
        reset:  function(origin) {
          /** Store origin somewhere. */
          console.log(origin);
          this.set('reset');
        },
      },
      summary: {
        submit:  function() {
          /** Send config by email. */
          this.set('summary');
        },
        reset:  function(origin) {
          /** Store origin somewhere. */
          console.log(origin);
          this.set('reset');
        },
      reset: {
        confirm:  function() { 
          /** Reset the store here. */
          this.set('version');
        },
        cancel: function() {
          /** Figure out how to retrieve origin and go back there. */
          this.set('summary');
        }
      }
      }
    },
    run(transition, ...payload) {
      const handler = this.states[this.current][transition];
      if(handler) {
        handler.apply(configMachine, ...payload);
      }
    },

    set(state) {
      this.current = state;
    }
};


const initialState = {
  test: 'plumbing ok',
  currentStep: 0,
  steps: routes,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "FSM_SET":
      console.log(action.type + " : " + action.transition);
      console.log(configMachine.current);
      configMachine.run(action.transition);
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
