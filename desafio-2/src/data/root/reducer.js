import {combineReducers} from 'redux';

import order from '../order/reducer';
import todo from '../todo/reducer';
import visibility from '../visibility/reducer';

export default combineReducers({order, todo, visibility});