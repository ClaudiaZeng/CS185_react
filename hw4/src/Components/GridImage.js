import React, {Component} from 'react';
import LightboxImg from './LightboxImg'

export class GridImage extends Component {
    render() {
        return this.props.imgs.map((indImg)=>(
            <LightboxImg img={indImg}/>
        ));
    }
}

export default GridImage;