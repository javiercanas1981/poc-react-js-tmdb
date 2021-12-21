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



























/*
   ,
   {title: 'Page 1', category_name:'cat7', url: 'search/movie?query=big+titt&page=1',},
   {title: 'Page 2', category_name:'cat8', url: 'search/movie?query=big+titt&page=2'},
   {title: 'Action', category_name:'cat9', url: 'search/movie?query=big+titt&page=3',},
   {title: 'Adventure', category_name:'cat10', url: 'search/movie?query=big+titt&page=4'},
   {title: 'Action', category_name:'cat11', url: 'search/movie?query=tits&page=5',},
   {title: 'Adventure', category_name:'cat12', url: 'search/movie?query=tits&page=6'},
   {title: 'Action', category_name:'cat13', url: 'search/movie?query=tits&page=7',},
   {title: 'Adventure', category_name:'cat15', url: 'search/movie?query=tits&page=8'},
   {title: 'Action', category_name:'cat16', url: 'search/movie?query=tits&page=9',},
   {title: 'Adventure', category_name:'cat7', url: 'search/movie?query=tits&page=10'},
   {title: 'Action', category_name:'cat18', url: 'search/movie?query=tits&page=11',},
   {title: 'Adventure', category_name:'cat19', url: 'search/movie?query=tits&page=12'},
   {title: 'Action', category_name:'cat20', url: 'search/movie?query=tits&page=13',},
   {title: 'Adventure', category_name:'cat21', url: 'search/movie?query=tits&page=14'},
   {title: 'Action', category_name:'cat22', url: 'search/movie?query=tits&page=15',},
   {title: 'Adventure', category_name:'cat23', url: 'search/movie?query=tits&page=16'},
   {title: 'Action', category_name:'cat24', url: 'search/movie?query=tits&page=17',},
   {title: 'Adventure', category_name:'cat25', url: 'search/movie?query=tits&page=4'},
   {title: 'Action', category_name:'cat26', url: 'search/movie?query=tits&page=18',},
   {title: 'Adventure', category_name:'cat27', url: 'search/movie?query=tits&page=19'},
   {title: 'Action', category_name:'cat28', url: 'search/movie?query=tits&page=20',},
   {title: 'Adventure', category_name:'cat29', url: 'search/movie?query=tits&page=21'},
   {title: 'Action', category_name:'cat30', url: 'search/movie?query=tits&page=22',},
   {title: 'Adventure', category_name:'cat31', url: 'search/movie?query=tits&page=23'},
   {title: 'Action', category_name:'cat32', url: 'search/movie?query=tits&page=24',},
   {title: 'Adventure', category_name:'cat33', url: 'search/movie?query=tits&page=25'},
   {title: 'Action', category_name:'cat34', url: 'search/movie?query=tits&page=26',},
   {title: 'Adventure', category_name:'cat35', url: 'search/movie?query=tits&page=27'}
   */
