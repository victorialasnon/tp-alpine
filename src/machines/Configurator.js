import store from '../store';
/**
 * Define possible states, transitions, handlers, helpers.
 *
 * @note Business state and context for guards are handled with redux store.
 */
const configMachine = {
  _current: ['version'],
  //---------------------------------------------------------- machine rules ---
  states: {
    version: {
      select(version) {
        store.dispatch({
          type: 'UPDATE_CONFIG',
          config: { version: [version] },
        });
        store.dispatch({ type: 'SET_STEP', step: 'color' });
        this._current = ['settings'];
      },
    },
    settings: {
      next(items) {
        const context = store.getState();

        store.dispatch({
          type: 'UPDATE_CONFIG',
          config: { [context.step]: [items] },
        });
        store.dispatch({ type: 'SET_STEP', step: 'rims' });
        
        if (this.isConfigDone(context.config)) {
          this._current = ['summary'];
        }
      },
      reset() {
        this._current = ['reset'];
      },
      down() {
        this._current = [...this._current, 'test'];
      },
    },
    summary: {
      submit() {
        /** Send config by email. */
        this._current = ['done'];
      },
      reset(origin) {
        this._current = ['reset'];
      },
    },
    reset: {
      confirm() {
        store.dispatch({ type: 'RESET_CONFIG' });
        this._current = ['version'];
      },
      cancel() {
        this._current = ['summary'];
      },
    },
    done: {
      reset(origin) {
        this._current = ['reset'];
      },
    },
  },
//---------------------------------------------------------------------- API ---
  send(event, ...payload) {
    const depth = this._current.length;
    let state = this.states[this._current[0]];
    for (let i = 1; i < depth; i++) {
      state = state.states[this._current[i]];
    }
    if (state) {
      const handler = state[event];

      if (handler) {
        handler.apply(configMachine, payload);
      }
    }
  },
  getState() {
    return this._current;
  },

  isConfigDone(config) {
    let isDone = false;
    if (config === Object(config)) {
      isDone = true;
      Object.keys(config).forEach(function (key) {
        isDone = isDone && Array.isArray(config[key]) && config[key].length;
      });
    }
    return isDone;
  },
  /**
   * Return a generator that wraps around a given array of steps.
   *
   * Created generator will move its internal cursor to optional given step on
   * next() call if given step exists.
   *   i.e.: generator.next('stepValue');
   *
   * @todo Consider making 'previous' a reserved keyword used to go backward.
   */
  *stepSequencer(steps) {
    const length = steps.length;
    for (let i = 0; ; ) {
      if (i >= length) {
        i = 0;
      } else if (i < 0) {
        i = length - 1;
      }
      const requested = steps.indexOf(yield steps[i]);
      i = requested !== -1 ? requested : i + 1;
    }
  },
};

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
//     down() {
//       this._current = [...this._current, 'test']);
//     },
//     up() {
//       this._current = this._current.splice(0, this._current.length - 1));
//     },
//     states: {
//       test: {
//         down() {
//           this._current = [...this._current, 'test']);
//         },
//         up() {
//           this._current = this._current.splice(0, this._current.length - 1));
//         },
//         states: {
//           test: {
//             // down: function(){
//             //   this._current = [...this._current, 'test']);
//             // },
//             up() {
//               this._current = this._current.splice(0, this._current.length - 1));
//             },
//           },
//         },
//       },
//     },
//   },
// },

// function isConfigDone(config) {
//   let isDone = false;
//   if (config === Object(config)) {
//     isDone = true;
//     Object.keys(config).forEach(function (key) {
//       isDone = isDone && Array.isArray(config[key]) && config[key].length;
//     });
//   }
//   return isDone;
// }

// /**
//  * Return a generator that wraps around a given array of steps.
//  *
//  * Created generator will move its internal cursor to optional given step on
//  * next() call if given step exists.
//  *   i.e.: generator.next('stepValue');
//  *
//  * @todo Consider making 'previous' a reserved keyword used to go backward.
//  */
// function* stepSequencer(steps) {
//   const length = steps.length;
//   for (let i = 0; ; ) {
//     if (i >= length) {
//       i = 0;
//     } else if (i < 0) {
//       i = length - 1;
//     }
//     const requested = steps.indexOf(yield steps[i]);
//     i = requested !== -1 ? requested : i + 1;
//   }
// }
// transitionTo(state) {
//     this._current = state;
//   },
