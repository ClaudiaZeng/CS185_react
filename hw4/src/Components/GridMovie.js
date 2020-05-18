import React, {Component} from 'react';
import LightboxMovie from './LightboxMovie';

export class GridMovie extends Component {
    render() {
        return this.props.moviesURL.map((indURL)=>(
            <LightboxMovie movie={indURL}/>
        ));
    }
}

export default GridMovie;