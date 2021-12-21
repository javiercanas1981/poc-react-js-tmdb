import React, { Component } from 'react'
import './styles/app.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Item extends Component{
    constructor(props){
        super(props);
        this.selected = this.selected.bind(this);
        this.state = {
            url: ''
        }
    }

    selected(event){
        let id = this.props.id;
        const uri = `/details/${id}`;
        //console.log(uri);
        this.setState({ url: uri });
    }

    render(){
        // console.log('item.url :',this.state.url)
        // console.log('this.props.backdrop :',this.props.backdrop)
        return (<Link to={this.state.url}>
                    <div className='Item' style={{ backgroundImage: `url(${this.props.backdrop})` }} onMouseOver={this.selected}>
                        <div className="overlay">
                            <div className="ListToggle">
                                <i className="fa fa-play"></i>
                            </div>
                        </div>
                    </div>
                </Link>)
    };
}

Item.propTypes ={
    backdrop: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default Item;
