import * as listActions from '../../actions';
import {FETCH_MOVIE_FAILURE, FETCH_MOVIES, FETCH_MOVIES_SUCCESS} from "../../constants";

describe('ListActions', () => {
    it('Hacer un call fetchMovies', () => {
        const expectedAction = {
            type: FETCH_MOVIES
        }
        expect(listActions.fetchMovies()).toEqual(expectedAction);
    });

    it('Hacer un call fetchMoviesSuccess', () => {
        const payloadTest = [{'comedy':'comedy'},{'kids':'kids'}];
        const expectedAction = {
            type: FETCH_MOVIES_SUCCESS,
            payload: payloadTest
        }
        expect(listActions.fetchMoviesSuccess(payloadTest)).toEqual(expectedAction);
    });

    it('Hacer call con falla fetchMoviesFail', () => {
        const expectedAction = {
            type: FETCH_MOVIE_FAILURE
        }
        expect(listActions.fetchMoviesFail('error')).toEqual(expectedAction);
    });
});