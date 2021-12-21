import reducer, {categoryList} from '../../reducers/index';
import {FETCH_MOVIES, FETCH_MOVIES_SUCCESS} from "../../constants";

const res = [{ id: "769902", title: "Triángulo diabólico de las Bermudas", title_episode: null, title_uri: "Triangulo-diabolico-de-las-Bermudas", title_original: "Triángulo diabólico de las Bermudas" }, { id: "769573", title: "En la Luna", title_episode: null, title_uri: "En-la-Luna", title_original: "Moon" }]

describe('ListReducers', () => {
    describe('dataReducer', () => {
        let state;
        beforeEach(()=> {
           state = categoryList({}, {
               type: FETCH_MOVIES_SUCCESS,
               payload: res
           })
        });
        it('State actualizado', () => {
            expect(state.payload.length).toEqual(2);
        });
        it('State actualizado con el dato', () => {
            expect(state.payload[3]).toEqual(undefined);
        });
    })
});