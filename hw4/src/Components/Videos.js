import React, {Component} from 'react';
import '../Css/Videos.css';
import GridVideo from './GridVideo'

export class Videos extends Component {

    render() {
        const videos = [
            {
                id: 1,
                src: require("../Videos/cat.mp4"),
                isopen: false,
            },
            {
                id: 2,
                src: require("../Videos/game1.mp4"),
                isopen: false,
            },
            {
                id: 3,
                src: require("../Videos/game2.mp4"),
                isopen: false,
            },
            {
                id: 4,
                src: require("../Videos/sbsunset.mp4"),
                isopen: false,
            },
            {
                id: 5,
                src: require("../Videos/spaceX.MP4"),
                isopen: false,
            }
        ]
        return (
            <div class="container">
                <div class="gridvideo">
                    <GridVideo videos={videos}></GridVideo>
                   </div>
            </div>
        );
    }
}

export default Videos;