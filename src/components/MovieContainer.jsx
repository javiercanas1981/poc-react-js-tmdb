import React, { Component } from 'react';
import MovieList from '../components/MovieList';
import { connect } from 'react-redux';
import {fetchMovieList, searchMovieList} from '../actions';

class MovieContainer extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount(){
        // if(this.props.match.params!=null)
        // console.log('nextProps.keyword', this.props.keyword);
        // console.log('nextProps.keyword', this.props.url);
        const {dispatch} = this.props
        if(this.props.url !== ''){
            dispatch(fetchMovieList(this.props.url, this.props.category_name))
        }
    }

    componentWillReceiveProps(nextProps) {
        const {dispatch} = this.props;
        console.log('componentWillReceiveProps', nextProps);
        if(nextProps.keyword && this.props.keyword !== nextProps.keyword) {
            console.log('componentWillReceiveProps', nextProps.params);
            dispatch(searchMovieList(nextProps.keyword));
        }

    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.props.movies !== nextProps.movies) {
            console.log('shouldComponentUpdate is true', nextProps, this.props);
            return true;
        }
        // console.log('shouldComponentUpdate is false', nextProps, this.props);
        return false;
    }

    render() {

        const {movies} = this.props;

        if(movies) {
            return(
                <div className="Title">
                    <h1>{this.props.title}</h1>
                    <div className="titles-wrapper">
                        <MovieList key={this.props.url} movies={movies} />
                    </div>
                </div>

            );
        } else {
            return (<div></div>);
        }
    }
}



function mapStateToProps(state, {category_name}, ownProps){
    // console.log('mapStateToProps', state);
    return {
        isFetching: state.categoryList.isFetching,
        movies: state.categoryList[category_name],
        keyword: state.input.keyword,
        movies_search: state.input.payload_category_name
    };
}

export default connect(mapStateToProps)(MovieContainer);
