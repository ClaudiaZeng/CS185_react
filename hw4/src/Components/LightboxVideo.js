import React, {Component} from 'react';
import '../Css/Lightbox.css';

export class LightboxVideo extends Component {
    constructor(props){
        super(props);

        this.state = {
            isOpen: false
        };
    }

    showDialog = () => {
        this.setState({isOpen: !this.state.isOpen});
    };

    render() {
        return (
            <div className='lightbox'>
                <video 
                  width="400"
                  height="300"
                  src={this.props.video.src}
                  type="video/mp4"
                  onClick={this.showDialog}
                  ></video>
                {this.state.isOpen && (
                    <dialog 
                      class="dialog"
                      open
                      onClose={this.showDialog}
                    >
                    <video 
                      class="video"
                      width="800"
                      height="600"
                      src={this.props.video.src}
                      type="video/mp4"
                      controls autoPlay
                      onClick={this.showDialog}
                      ></video>
                    </dialog>
                )}
            </div>
        );
    }
}

export default LightboxVideo;