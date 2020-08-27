import store from '../store';
// import { useHistory } from "react-router-dom";
/**
 * Define possible states, transitions, handlers, helpers.
 *
 * @note Context for guards and business state is handled with redux store.
 * @todo Consider wether to integrate with redux store or just track context
 *       in redux store.
 */
const configMachine = {
  current: ['version'],
  states: {
    version: {
      select: function (version) {
        // const state = store.getState();
        // console.log('state : ', state);
        store.dispatch({
          type: 'UPDATE_CONFIG',
          config: { version: [version] },
        });
        store.dispatch({ type: 'SET_STEP', step: 'color' });
        /** Check wether correct option is submitted here. */
        this.set(['settings']);
        // const history = useHistory();
      },
    },
    settings: {
      next: function (items) {
        const context = store.getState();

        store.dispatch({
          type: 'UPDATE_CONFIG',
          config: { [context.step]: [items] },
        });
        store.dispatch({ type: 'SET_STEP', step: 'rims' });
        /** Display next empty option screen or summary if all done. */
        if (isConfigDone(context.config)) {
          this.set(['summary']);
        }
      },
      reset: function () {
        this.set(['reset']);
      },
      down: function () {
        this.set([...this.current, 'test']);
      },
    },
    summary: {
      submit: function () {
        /** Send config by email. */
        this.set(['done']);
      },
      reset: function (origin) {
        /** Store origin somewhere. */
        // console.log(origin);
        this.set(['reset']);
      },
    },
    reset: {
      confirm: function () {
        store.dispatch({ type: 'RESET_CONFIG' });
        this.set(['version']);
      },
      cancel: function () {
        /** Figure out how to retrieve origin and go back there. */
        this.set(['summary']);
      },
    },
    done: {
      reset: function (origin) {
        /** Store origin somewhere. */
        // console.log(origin);
        this.set(['reset']);
      },
    },
  },
  send(event, ...payload) {
    const depth = this.current.length;
    let state = this.states[this.current[0]];
    // console.log('send : payload', payload);
    // console.log('before : available transitions', state);
    // console.log('event sent : ' + event);
    for (let i = 1; i < depth; i++) {
      state = state.states[this.current[i]];
    }
    if (state) {
      const handler = state[event];
      // console.log('handler', handler);

      if (handler) {
        // console.log('handler apply : ', ...payload);
        handler.apply(configMachine, payload);
      }
    }
    // console.log('after : available transitions', this.states[this.current[0]]);
  },

  set(state) {
    this.current = state;
  },
};

function isConfigDone(config) {
  let isDone = false;
  if (config === Object(config)) {
    isDone = true;
    Object.keys(config).forEach(function (key) {
      isDone = isDone && Array.isArray(config[key]) && config[key].length;
      console.log(isDone);
    });
  }
  console.log('isConfigDone ? : ', config, isDone);
  return isDone;
}

function * stepSequencer(steps) {
  const length = steps.length;
  for(let i = 0;;) {
    if (i >= length) {
      i = 0;
    } else if (i < 0) {
      i = length - 1;
    }
    const requested = steps.indexOf(yield steps[i]);
    i = (requested !== -1) ? requested : i + 1;
  }
}

export default configMachine;

// let isDone = true;
// Object.keys(config).forEach(function (key) {
//   isDone = isDone && Array.isArray(config[key]) && config[key].length;
// });

// let isDone = true;

// for ( const key in Object.keys(config)) {
//   isDone = isDone && Array.isArray(config[key]) && config[key].length;
// }

// let isDone = (Array.isArray(config.version) && config.version.length)
//   && (Array.isArray(config.version) && config.version.length)
//   && (Array.isArray(config.color) && config.version.color)
//   && (Array.isArray(config.rims) && config.version.rims)
//   && (Array.isArray(config.upholstery) && config.version.upholstery)
//   && (Array.isArray(config.equipment) && config.version.equipment)
//   && (Array.isArray(config.accessories) && config.version.accessories);

// let isDone = true;
// for (const [key, value] of config){
//   isDone = isDone && Array.isArray(value) && value.length;
// }

// states: {
//   test: {
//     down: function () {
//       this.set([...this.current, 'test']);
//     },
//     up: function () {
//       this.set(this.current.splice(0, this.current.length - 1));
//     },
//     states: {
//       test: {
//         down: function () {
//           this.set([...this.current, 'test']);
//         },
//         up: function () {
//           this.set(this.current.splice(0, this.current.length - 1));
//         },
//         states: {
//           test: {
//             // down: function(){
//             //   this.set([...this.current, 'test']);
//             // },
//             up: function () {
//               this.set(this.current.splice(0, this.current.length - 1));
//             },
//           },
//         },
//       },
//     },
//   },
// },
