import React, {Component} from 'react';
import '../Css/Images.css';
import GridImage from './GridImage'

export class Images extends Component {

    render() {
        const imgs = [
            {
                id: 1,
                src: require("../Images/seattle1.JPG"),
                isopen: false,
            },
            {
                id: 2,
                src: require("../Images/seattle2.JPG"),
                isopen: false,
            },
            {
                id: 3,
                src: require("../Images/ac1.jpeg"),
                isopen: false,
            },
            {
                id: 4,
                src: require("../Images/ac2.JPG"),
                isopen: false,
            },
            {
                id: 5,
                src: require("../Images/food1.JPG"),
                isopen: false,
            },
            {
                id: 6,
                src: require("../Images/food2.JPG"),
                isopen: false,
            },
            {
                id: 7,
                src: require("../Images/flowers.JPG"),
                isopen: false,
            },
            {
                id: 8,
                src: require("../Images/ny1.JPG"),
                isopen: false,
            },
            {
                id: 9,
                src: require("../Images/ny2.JPG"),
                isopen: false,
            },
            {
                id: 10,
                src: require("../Images/ny3.JPG"),
                isopen: false,
            },
            {
                id: 11,
                src: require("../Images/orlando1.JPG"),
                isopen: false,
            },
            {
                id: 12,
                src: require("../Images/orlando2.JPG"),
                isopen: false,
            },
            {
                id: 13,
                src: require("../Images/orlando3.JPG"),
                isopen: false,
            },
            {
                id: 14,
                src: require("../Images/paint1.JPG"),
                isopen: false,
            },
            {
                id: 15,
                src: require("../Images/paint2.JPG"),
                isopen: false,
            },
            {
                id: 16,
                src: require("../Images/sb.JPG"),
                isopen: false,
            }
        ]

        return (
            <div class="container">
                 <div class="gridimg">
                    <GridImage imgs={imgs}></GridImage>
                 </div>
            </div>
        );
    }
}

export default Images;