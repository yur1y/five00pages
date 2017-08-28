import {combineReducers} from 'redux';
import { reducer as reduxForm } from 'redux-form';
import pageReducer from './pageReduce';

export default combineReducers({
    form: reduxForm,
    images: pageReducer
});