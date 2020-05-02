import React, {Component} from 'react';
import '../Css/Images.css';

export class Images extends Component {
    render() {
        return (
            <div class="container">
                 <div class="gridimg">
                    <img src={require("../Images/seattle1.JPG")} width="100%"/>
                    <img src={require("../Images/seattle2.JPG")} width="100%"/>
                    <img src={require("../Images/ac1.jpeg")} width="100%"/>
                    <img src={require("../Images/ac2.JPG")} width="100%"/>
                    <img src={require("../Images/food1.JPG")} width="100%"/>
                    <img src={require("../Images/food2.JPG")} width="100%"/>
                    <img src={require("../Images/flowers.JPG")} width="100%"/>
                    <img src={require("../Images/ny1.JPG")} width="100%"/>
                    <img src={require("../Images/ny2.JPG")} width="100%"/>
                    <img src={require("../Images/ny3.JPG")} width="100%"/>
                    <img src={require("../Images/orlando1.JPG")} width="100%"/>
                    <img src={require("../Images/orlando2.JPG")} width="100%"/>
                    <img src={require("../Images/orlando3.JPG")} width="100%"/>
                    <img src={require("../Images/paint1.JPG")} width="100%"/>
                    <img src={require("../Images/paint2.JPG")} width="100%"/>
                    <img src={require("../Images/sb.JPG")} width="100%"/>
                 </div>
            </div>
        );
    }
}

export default Images;