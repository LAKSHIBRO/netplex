
import { combineReducers } from 'redux';
import carouselReducer from '../redux/reducers/carouselReducer';

const mainReducer = combineReducers({
  carousel: carouselReducer,
});

export default mainReducer;
