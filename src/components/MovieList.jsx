import React , { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import Item from './Item';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/movies.css';

import Slider from 'react-slick';
import ReactTooltip from "react-tooltip";


export default class MovieList extends Component{

    componentDidUpdate(prevProps) {
        ReactTooltip.rebuild();
    }

    render() {

        let settings = {dots: true, infinite: false, speed: 500, slidesToShow: 5, slidesToScroll: 5 };

        let movies = []

        if(this.props.movies) {
            movies = this.props.movies.filter(function(movie) {
                return movie.backdrop_path != null;
            }).map(function(movie) {
                return(<div>
                    <Item key={movie.id} title={movie.name} backdrop={`http://image.tmdb.org/t/p/original${movie.poster_path}`} id={movie.id}/>
                    <ReactTooltip id='happyFace'>
                        <span>Show happy face</span>

                    </ReactTooltip>
                </div>);
            });
        }
        return(<Slider className="jcarousel" {...settings}>
                {movies}
               </Slider>);
    }
}
