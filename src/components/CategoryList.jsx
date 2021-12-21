import React, {Component} from 'react';

import MovieContainer from './MovieContainer';
import {searchMovieList} from "../actions";

class CategoryList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arraycategory: [
                {title: 'Action', category_name:'cat1', url: 'genre/28/movies?sort_by=popularity.desc&page=1'},
                {title: 'Adventure', category_name:'cat2', url: 'genre/12/movies?sort_by=popularity.desc&page=2'},
                {title: 'Western', category_name:'cat3', url: 'genre/37/movies?sort_by=popularity.desc&page=1'},
                {title: 'Comedy', category_name:'cat4', url: 'genre/35/movies?sort_by=popularity.desc&page=1'},
                {title: 'Crime', category_name:'cat5', url: 'genre/80/movies?sort_by=popularity.desc&page=1'},
                {title: 'Horror', category_name:'cat6', url: 'genre/27/movies?sort_by=popularity.desc&page=1'},
                {title: 'Horror Pagina 2', category_name:'cat7', url: 'genre/27/movies?sort_by=popularity.desc&page=3'}
            ]
        };
    }

    componentWillReceiveProps(nextProps,{url}) {
        console.log('componentWillReceiveProps', nextProps);
        console.log('componentWillReceiveProps - url', url);
    }

    render() {
        return (this.state.arraycategory.map(({title,category_name, url}, index) => {
            return (
                <MovieContainer title={title} category_name={category_name} url={url} index={index}   />
            )
        }))
    }

}

export default CategoryList
