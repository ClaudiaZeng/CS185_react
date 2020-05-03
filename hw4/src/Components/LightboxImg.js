import React, {Component} from 'react';
import '../Css/Lightbox.css';

export class LightboxImg extends Component {
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
                <img 
                  src={this.props.img.src}
                  width="100%"
                  onClick={this.showDialog}
                  alt="no image"
                />
                {this.state.isOpen && (
                    <dialog 
                      class="dialog"
                      open
                      onClose={this.showDialog}
                    >
                    <img
                      class="image"
                      src={this.props.img.src}
                      width="800"
                      max-height = "100%"
                      onClick={this.showDialog}
                      alt="no image"
                      />
                    </dialog>
                )}
            </div>
        );
    }
}

export default LightboxImg;