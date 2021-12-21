import axios from 'axios';

import {
    FETCH_MOVIES,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIE_FAILURE,
    API_KEY_ALT,
    URL_LIST, SEARCH_MOVIE, SEARCH_MOVIE_SUCCESS, SEARCH_MOVIE_FAILURE, URL_SEARCH
} from '../constants';

export function searchMovie(searchText) {
    return {
        type: SEARCH_MOVIE,
        searchText
    };
}

export function searchMovieSuccess(data, keyword) {
    console.log('searchMovieSuccess.keyword', keyword);
    return {
        type: SEARCH_MOVIE_SUCCESS,
        payload: data,
        keyword: keyword,
        payload_category_name: 'cat_search'
    };
}

export function searchMovieFail(error) {
    return {
        type: SEARCH_MOVIE_FAILURE,
        error
    };
}

export function searchMovieList(keyword){
    let url = URL_SEARCH + keyword + API_KEY_ALT;
    console.log('searchMovieList.url', url);
    return function(dispatch){
        dispatch(searchMovie())
        return fetch(url)
            .then(response => response.json())
            .then(json => json.results)
            .then(data => dispatch(searchMovieSuccess(data,keyword)))
            .catch(error => dispatch(searchMovieFail(error)))
    }
}


export function fetchMovies() {
    return {
        type: FETCH_MOVIES
    };
}

export function fetchMoviesSuccess(data, category_name) {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: data,
        payload_category_name: category_name
    };
}

export function fetchMoviesFail(data) {
    return {
        type: FETCH_MOVIE_FAILURE,
        error: data.error
    };
}

export function fetchMovieListOld(option, category_name){
    let url =URL_LIST + option + API_KEY_ALT;
    //console.log('url', url)
    return function(dispatch){
        dispatch(fetchMovies());
        return fetch(url)
            .then(response => response.json())
            .then(json => json.results)
            .then(data => dispatch(fetchMoviesSuccess(data, category_name)))
            .catch(error => dispatch(fetchMoviesFail(error)))
    }
}



export function fetchMovieList(option, category_name) {
    let url =URL_LIST + option + API_KEY_ALT;
    return dispatch => {
        dispatch(fetchMovies());
        axios.get(url).then(res => {
                dispatch(fetchMoviesSuccess(res.data.results, category_name));
            }).catch(err => {
                dispatch(fetchMoviesFail(err.message));
            });
    };
}

