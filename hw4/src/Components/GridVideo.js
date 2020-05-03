import React, {Component} from 'react';
import LightboxVideo from './LightboxVideo'

export class GridVideo extends Component {
    render() {
        return this.props.videos.map((indVideo)=>(
            <LightboxVideo video={indVideo}/>
        ));
    }
}

export default GridVideo;