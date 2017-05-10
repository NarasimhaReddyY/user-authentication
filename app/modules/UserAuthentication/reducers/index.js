import Immutable from 'immutable';

const initialState = Immutable.Map({
});

export const userAuthenticationReducer = (state = initialState, action) => {
  switch(action.type) {
    default: {
      return state;
    }
  }
};