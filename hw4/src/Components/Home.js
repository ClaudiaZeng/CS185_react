import React, {Component} from 'react';
import '../Css/Home.css';

export class Home extends Component {

    render() {
        return (
            <div class="mainpage">
                <img src={require('../Images/claudiazeng.png')}/>
                <div class="mainpagetext">
                    <h2>A Bit About Me</h2>
                    <p>Hello everyone. My name is Claudia Zeng and I am currently a senior CS student at UC Santa Barbara. Welcome to my website and hope you have a good day :)</p>
                </div>
            </div>
        );
    }
}

export default Home;