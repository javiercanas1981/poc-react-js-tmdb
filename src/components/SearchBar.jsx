import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { Navbar } from 'react-bootstrap/lib';
import Autosuggest from 'react-autosuggest';
import { URL_SEARCH, API_KEY_ALT } from '../constants';

import './styles/react_eddf.css';
import './styles/search.css';

import axios from 'axios';
import {Link} from "react-router-dom";

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      suggestions:[]
    };
  }


  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  handleKeyDown = (event) => {
    if(event.key == 'Enter') {
      return this.handleSubmit(this.state.value);
    }
  }

  handleSubmit = (searchText) => {
    console.log('searchText', searchText);
    this.props.dispatch(push('/search/'+ searchText));
    this.setState({ value: ''});
  }


  getSuggestionValue = (suggestion) => {
    return suggestion.title;
  };

  onSuggestionsFetchRequested = ({ value }) => {
    const trimmedValue = value.trim();

    if (trimmedValue.length > 0) {
      let API_URL = URL_SEARCH + trimmedValue + API_KEY_ALT;

      let res = axios.get(API_URL)
          .then(res => res.data)
          .then(data => data.results)
          .then(data => {
            const results = data.map(movie => {
              // console.log('movie : ', movie)
              let temp = {}
              temp.id = movie.id
              temp.title = movie.title
              temp.img = movie.poster_path
              temp.img2 = movie.backdrop_path
              temp.year = (movie.release_date == "") ? "0000" : movie.release_date.substring(0,4)
              return temp
            });
            this.setState({
              suggestions: results
            });
          }).catch(error => console.log('Exception to get Suggestions'))
    }
    else {
      this.setState({
        suggestions: []
      })
    }
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  renderSuggestion = (suggestion) => {
    return (
        <Link to={`/details/${suggestion.id}`}>

          <div className='c-s-category__name'>
            <div className='c-s-result__media-overlay'>
              <img id={'img1'} src={`http://image.tmdb.org/t/p/original${suggestion.img}`} className='c-s-result__media-img' width='100%' />
              <img id={'img2'} src={`http://image.tmdb.org/t/p/original${suggestion.img2}`} className='c-s-result__media-img' width='100%' />
            </div>

            <div className='c-s-result__media-title'>
              {suggestion.title}
            </div>
            {suggestion.year}
          </div>

        </Link>
    );
  };

  onSuggestionSelected = (event, { suggestion, method }) => {
    if (method === 'enter')
      event.preventDefault();
    console.log('onSuggestionSelected : ', this.state)
    this.props.dispatch(push('/search/:keyword'+ suggestion.id));
    this.setState({ value: ''});
  };

  render(){

    const brandStyle = {
      fontWeight: 'bold',
      textTransform: 'caplitalize',
      paddingLeft: 500,
      fontSize: '1.2em',
      margin: 0,
      maxWidth: 100,
      webkitboxflex: 1,
      webkitflex: '1 0 auto',
      msflex: '1 0 auto',
      flex: '1 0 auto',
      lineheight: '1em',
      fontfamily: 'Roboto, sans-serif',
      borderradius: '4px',
      color: '#fff',
      backgroundcolor: '#333',
      border: '1px solid #555',
      padding: '.6em 2.5em .6em .75em'
    };

    const navbarStyle = {
      background: 'black'
    }

    const {value, suggestions} = this.state;
    const inputProps = {
      value,
      onChange: this.onChange,
      onKeyPress: this.handleKeyDown,
      placeholder: 'Búsqueda por títulos en inglés...'
    };

    return (
        <Navbar bsStyle='csinput__prompt'>
          <Navbar.Form pullLeft>
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionSelected={this.onSuggestionSelected}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps} />
          </Navbar.Form>
        </Navbar>
    );
  }
}



export default connect()(SearchBar);
