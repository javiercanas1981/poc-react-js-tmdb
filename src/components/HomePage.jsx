import React, { Component } from 'react';

import './styles/react_eddf.css';

import CategoryList from './CategoryList';
import Logo from './Logo';
import Navigation from './Navigation';
import UserProfile from './UserProfile';
import SearchBar from './SearchBar';
import MovieContainer from "./MovieContainer";
import {Route} from "react-router-dom";

export default class HomePage extends Component {

    render() {
        return (
            <div className='main-wrapper'>
            <header className='header-nologueado'>
                <Logo/>
                <div id='search' className='navmenu--right navmenu--item'>
                    <SearchBar searchText={''} />
                    {this.props.children}
                </div>
                <UserProfile/>
            </header>
            <Navigation />

            <CategoryList />
         </div>
        );
    }
}

