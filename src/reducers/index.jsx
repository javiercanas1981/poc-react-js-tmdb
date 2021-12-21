import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import {FETCH_MOVIES,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
    SEARCH_MOVIE,
    SEARCH_MOVIE_SUCCESS,
    SEARCH_MOVIE_FAILURE,
    ENTER_SEARCH_TEXT} from '../constants';

const defaultStateList = {
    isFetching: false,
    movies:[],
    error:{}
};

export const categoryList = (state = defaultStateList, action) => {
    console.log('categoryList', action);
    switch (action.type){
            case FETCH_MOVIES:
            case SEARCH_MOVIE:
            return {...state, isFetching:true };
        case FETCH_MOVIES_SUCCESS:
            return {...state, isFetching:true, [action.payload_category_name]:action.payload };
        case SEARCH_MOVIE_SUCCESS:
            return {...state, isFetching:false, [action.payload_category_name]:action.payload };
        case FETCH_MOVIES_FAILURE:
        case SEARCH_MOVIE_FAILURE:
            return {...state, isFetching:false, error:action.data};
        default:
            return state;
    }
};

const defaultState = {
    isFetching: false,
    item:{},
    error:{}
};

const input = (state = '', action) => {
    console.warn('LOCATION_CHANGE from your reducer',action);
    return Object.assign({}, state, {
        isFetching:true,
        keyword:action.payload
    });
};

const storeApp = combineReducers({
    categoryList,
    input,
    routing: routerReducer
});

export default storeApp;
