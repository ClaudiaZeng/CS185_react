import React, {Component} from 'react';
import '../Css/ExternalLinks.css';

export class ExternalLinks extends Component {

    render() {
        return (
            <div>
                <div class="pageintro">
                    <h2>About</h2>
                    <p>This page has some of my favourite shows, performance, art online resources that I want to share. Click the image, then you will be redirect to the page.</p>
                </div>
                <div class="links">
                    <div class="linkchild 1">
                        <a href={"https://www.youtube.com/watch?v=cqvVL8IurMw"}><img src={require("../Images/hamilton.jpeg")}/></a>
                        <p>Hamilton original Broadway cast perform "Alexander Hamilton" via Zoom.</p>
                    </div>
                    <div class="linkchild 2">
                        <a href={"https://www.youtube.com/watch?v=VL0TG_nCqzE"}><img src={require("../Images/Cirque_du_Soleil_Logo.png")}/></a>
                        <p>Cirque du Soleil 60-minute Special For Covid-19.</p>
                    </div>
                    <div class="linkchild 3">
                        <a href={"https://www.moma.org/research-and-learning/classes"}><img src={require("../Images/MoMA.png")}/></a>
                        <p>MoMA Online Course offered in Contemporary Art, Fashion as Design, Photography, etc...</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExternalLinks;