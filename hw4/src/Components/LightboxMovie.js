import React, {Component} from 'react';
import axios from "axios";
import '../Css/Lightbox.css';

export class LightboxMovie extends Component {
    constructor(props){
        super(props);

        this.state = {
            movieName: "",
            director: "",
            imageURL: "",
            rating: "",
            isOpen: false
        };
    }

    componentDidMount(){
        axios.get(this.props.movie.url)
            .then(response => {
                this.setState({imageURL: response.data["Poster"]})
                this.setState({movieName: response.data["Title"]})
                this.setState({director: response.data["Director"]})
                this.setState({rating: response.data["imdbRating"]})
            })
            .catch(error => {
                console.log(error);
            })
    }

    showDialog = () => {
        this.setState({isOpen: !this.state.isOpen});
    };

    render() {
        return (
            <div className='lightbox'>
                <div className="lightboximg">
                    <img 
                    src={this.state.imageURL}
                    width="100%"
                    onClick={this.showDialog}
                    alt=""
                    />
                </div>
                {this.state.isOpen && (
                    <dialog 
                      class="dialog"
                      open
                      onClose={this.showDialog}
                    >
                    <div class="popup">
                        <img
                        class="image"
                        src={this.state.imageURL}
                        width="800"
                        max-height = "100%"
                        onClick={this.showDialog}
                        alt=""
                        />
                        <div className="description">
                            <h1>{this.state.movieName}</h1>
                            <p>Imdb Score {this.state.rating}</p>
                            <p>Directed by {this.state.director}</p>
                        </div>
                    </div>
                    </dialog>
                )}
            </div>
        );
    }
}

export default LightboxMovie;