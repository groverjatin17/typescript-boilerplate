import { combineReducers } from 'redux';
import utilsReducer from './utilsReducer';

const rootReducer = combineReducers({
    utilsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
