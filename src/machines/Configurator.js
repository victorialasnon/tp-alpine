/**
 * Define possible states, transitions, handlers, helpers.
 *
 * @note Guards and business state is handled with redux store. *
 * @todo Consider wether to integrate with redux store or just track context
 *       in redux store.
 */
const configMachine = {
  current: ['version'],
  states: {
    version: {
      select: function () {
        /** Check wether correct option is submitted here. */
        this.set(['settings']);
      },
    },
    settings: {
      next: function () {
        /** Display next empty option screen or summary if all done. */
        this.set(['summary']);
      },
      reset: function (origin) {
        /** Store origin somewhere. */
        // console.log(origin);
        this.set(['reset']);
      },
      down: function () {
        this.set([...this.current, 'test']);
      },
      states: {
        test: {
          down: function () {
            this.set([...this.current, 'test']);
          },
          up: function () {
            this.set(this.current.splice(0, this.current.length - 1));
          },
          states: {
            test: {
              down: function () {
                this.set([...this.current, 'test']);
              },
              up: function () {
                this.set(this.current.splice(0, this.current.length - 1));
              },
              states: {
                test: {
                  // down: function(){
                  //   this.set([...this.current, 'test']);
                  // },
                  up: function () {
                    this.set(this.current.splice(0, this.current.length - 1));
                  },
                },
              },
            },
          },
        },
      },
    },
    summary: {
      submit: function () {
        /** Send config by email. */
        this.set(['summary']);
      },
      reset: function (origin) {
        /** Store origin somewhere. */
        // console.log(origin);
        this.set(['reset']);
      },
    },
    reset: {
      confirm: function () {
        /** Reset the store here. */
        this.set(['version']);
      },
      cancel: function () {
        /** Figure out how to retrieve origin and go back there. */
        this.set(['summary']);
      },
    },
  },
  send(transition, ...payload) {
    const depth = this.current.length;
    let state = this.states[this.current[0]];
    console.log('before : available transitions', state);
    console.log('transition sent : ' + transition);
    for (let i = 1; i < depth; i++) {
      state = state.states[this.current[i]];
    }
    if (state) {
      const handler = state[transition];
      console.log('handler', handler);
      
      if (handler) {
        handler.apply(configMachine, ...payload);
      }
    }
    console.log('after : available transitions', this.states[this.current[0]]);
  },

  set(state) {
    this.current = state;
  },
};

export default configMachine;
