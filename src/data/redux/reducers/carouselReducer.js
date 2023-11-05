// carouselReducer.js
import * as actionTypes from '../actionTypes';

const initialState = {
  carouselData: [], // Initial state for your component's data
};

const carouselReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CAROUSEL_DATA:
      return {
        ...state,
        carouselData: action.data,
      };
    default:
      return state;
  }
};

export default carouselReducer;
