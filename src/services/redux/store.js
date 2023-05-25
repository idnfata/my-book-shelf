import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {GlobalReducer, HomeReducer, InspectionReducer} from './reducer';

const rootReducer = combineReducers({
  home: HomeReducer,
  global: GlobalReducer,
  inspection: InspectionReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));