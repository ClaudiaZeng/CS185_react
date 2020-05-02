import React, {Component} from 'react';
import '../Css/Videos.css';

export class Videos extends Component {

    render() {
        return (
            <div class="container">
                <div class="gridvideo">
                    <video width="400" height="300" src={require("../Videos/cat.mp4")} type="video/mp4" controls controls></video>
                    <video width="400" height="300" src={require("../Videos/game1.mp4")} type="video/mp4" controls controls></video>
                    <video width="400" height="300" src={require("../Videos/game2.mp4")} type="video/mp4" controls controls></video>
                    <video width="400" height="300" src={require("../Videos/sbsunset.mp4")} type="video/mp4" controls controls></video>
                    <video width="400" height="300" src={require("../Videos/spaceX.MP4")} type="video/mp4" controls controls></video>
                </div>
            </div>
        );
    }
}

export default Videos;