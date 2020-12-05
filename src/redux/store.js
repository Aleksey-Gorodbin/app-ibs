import {createStore} from 'redux';

import data from './reducers/index';

//const rootReducer = combineReducers({setCity, setCoordinates, visibilityContent});

const store = createStore(data);

export default store;