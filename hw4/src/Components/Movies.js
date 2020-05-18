import React, {Component} from 'react';
import GridMovie from './GridMovie'
import '../Css/Movies.css';

export class Movies extends Component {

    render() {
        const moviesURL = [
            {
                id: 1,
                url: "http://www.omdbapi.com/?i=tt4154796&apikey=d908aef1",
                isopen: false,
            },
            {
                id: 2,
                url: "http://www.omdbapi.com/?i=tt3501632&apikey=d908aef1",
                isopen: false,
            },
            {
                id: 3,
                url: "http://www.omdbapi.com/?i=tt0458339&apikey=d908aef1",
                isopen: false,
            },
            {
                id: 4,
                url: "http://www.omdbapi.com/?i=tt4154756&apikey=d908aef1",
                isopen: false,
            },
            {
                id: 5,
                url: "http://www.omdbapi.com/?i=tt3480822&apikey=d908aef1",
                isopen: false,
            },
            {
                id: 6,
                url: "http://www.omdbapi.com/?i=tt2015381&apikey=d908aef1",
                isopen: false,
            },
            {
                id: 7,
                url: "http://www.omdbapi.com/?i=tt3896198&apikey=d908aef1",
                isopen: false,
            },
            {
                id: 8,
                url: "http://www.omdbapi.com/?i=tt6320628&apikey=d908aef1",
                isopen: false,
            },
        ]

        return (
            <div class="container">
                 <div class="gridmovie">
                    <GridMovie moviesURL={moviesURL}></GridMovie>
                 </div>
            </div>
        );
    }
}

export default Movies;