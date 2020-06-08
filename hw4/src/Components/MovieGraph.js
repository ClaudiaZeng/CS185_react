import React, {Component} from 'react';
import * as d3 from 'd3';

const data = {
    nodes: [
        {
            movieId: 1,
            title: "Avengers: Endgame",
            poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
            group: "movie"
        },
        {
            actorId: 1,
            actorName: "Robert Downey Jr.",
            group: "actor"
        },
        {
            actorId: 2,
            actorName: "Chris Evans",
            group: "actor"
        },
        {
            actorId: 3,
            actorName: "Mark Ruffalo",
            group: "actor"
        },
        {
            actorId: 4,
            actorName: "Chris Hemsworth",
            group: "actor"
        },
        {
            movieId: 2,
            title: "Iron Man",
            poster: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
            group: "movie"
        },
        {
            actorId: 5,
            actorName: "Terrence Howard",
            group: "actor"
        },
        {
            actorId: 6,
            actorName: "Jeff Bridges",
            group: "actor"
        },
        {
            actorId: 7,
            actorName: "Gwyneth Paltrow",
            group: "actor"
        },
        {
            movieId: 3,
            title: "Hell or High Water",
            poster: "https://m.media-amazon.com/images/M/MV5BMTg4NDA1OTA5NF5BMl5BanBnXkFtZTgwMDQ2MDM5ODE@._V1_SX300.jpg",
            group: "movie"
        },
        {
            actorId: 8,
            actorName: "Dale Dickey",
            group: "actor"
        },
        {
            actorId: 9,
            actorName: "Ben Foster",
            group: "actor"
        },
        {
            actorId: 10,
            actorName: "Chris Pine",
            group: "actor"
        },
        {
            movieId: 4,
            title: "Wonder Woman",
            poster: "https://m.media-amazon.com/images/M/MV5BNDFmZjgyMTEtYTk5MC00NmY0LWJhZjktOWY2MzI5YjkzODNlXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg",
            group: "movie"
        },
        {
            actorId: 11,
            actorName: "Gal Gadot",
            group: "actor"
        },
        {
            actorId: 12,
            actorName: "Connie Nielsen",
            group: "actor"
        },
        {
            actorId: 13,
            actorName: "Robin Wright",
            group: "actor"
        },
        {
            movieId: 5,
            title: "Death on the Nile",
            poster: "https://m.media-amazon.com/images/M/MV5BYmQ2MDJlMmMtNWZmYi00NjMyLWFlZjQtNGMzZjAyZGE0ZDQzXkEyXkFqcGdeQXVyMTQ2MTg1Nzk@._V1_SX300.jpg",
            group: "movie"
        },
        {
            actorId: 14,
            actorName: "Annette Bening",
            group: "actor"
        },
        {
            actorId: 15,
            actorName: "Armie Hammer",
            group: "actor"
        },
        {
            actorId: 16,
            actorName: "Kenneth Branagh",
            group: "actor"
        },
        {
            movieId: 6,
            title: "20th Century Women",
            poster: "https://m.media-amazon.com/images/M/MV5BMTkwNDE4NzQwM15BMl5BanBnXkFtZTgwNzQ5Nzg0MDI@._V1_SX300.jpg",
            group: "movie"
        },
        {
            actorId: 17,
            actorName: "Elle Fanning",
            group: "actor"
        },
        {
            actorId: 18,
            actorName: "Greta Gerwig",
            group: "actor"
        },
        {
            actorId: 19,
            actorName: "Billy Crudup",
            group: "actor"
        },
        {
            movieId: 7,
            title: "Maleficent",
            poster: "https://m.media-amazon.com/images/M/MV5BMjAwMzAzMzExOF5BMl5BanBnXkFtZTgwOTcwMDA5MTE@._V1_SX300.jpg",
            group: "movie"
        },
        {
            actorId: 20,
            actorName: "Angelina Jolie",
            group: "actor"
        },
        {
            actorId: 21,
            actorName: "Sharlto Copley",
            group: "actor"
        },
        {
            actorId: 22,
            actorName: "Lesley Manville",
            group: "actor"
        },
        {
            movieId: 8,
            title: "Changeling",
            poster: "https://m.media-amazon.com/images/M/MV5BOTA1Mzg3NjIxNV5BMl5BanBnXkFtZTcwNzU2NTc5MQ@@._V1_SX300.jpg",
            group: "movie"
        },
        {
            actorId: 23,
            actorName: "Gattlin Griffith",
            group: "actor"
        },
        {
            actorId: 24,
            actorName: "Michelle Gunn",
            group: "actor"
        },
        {
            actorId: 25,
            actorName: "Jan Devereaux",
            group: "actor"
        }
    ],
    links: [
        {
            source: 1,
            target: 0,
        },
        {
            source: 2,
            target: 0,
        },
        {
            source: 3,
            target: 0,
        },
        {
            source: 4,
            target: 0,
        },
        {
            source: 1,
            target: 5,
        },
        {
            source: 6,
            target: 5,
        },
        {
            source: 7,
            target: 5,
        },
        {
            source: 8,
            target: 5,
        },
        {
            source: 7,
            target: 9,
        },
        {
            source: 10,
            target: 9,
        },
        {
            source: 11,
            target: 9,
        },
        {
            source: 12,
            target: 9,
        },
        {
            source: 12,
            target: 13,
        },
        {
            source: 14,
            target: 13,
        },
        {
            source: 15,
            target: 13,
        },
        {
            source: 16,
            target: 13,
        },
        {
            source: 14,
            target: 17,
        },
        {
            source: 18,
            target: 17,
        },
        {
            source: 19,
            target: 17,
        },
        {
            source: 20,
            target: 17,
        },
        {
            source: 18,
            target: 21,
        },
        {
            source: 22,
            target: 21,
        },
        {
            source: 23,
            target: 21,
        },
        {
            source: 24,
            target: 21,
        },
        {
            source: 22,
            target: 25,
        },
        {
            source: 26,
            target: 25,
        },
        {
            source: 27,
            target: 25,
        },
        {
            source: 28,
            target: 25,
        },
        {
            source: 26,
            target: 29,
        },
        {
            source: 30,
            target: 29,
        },
        {
            source: 31,
            target: 29,
        },
        {
            source: 32,
            target: 29,
        }
    ]
}


export class MovieGraph extends Component {

    drag = (simulation) => {
        function dragStarted(d) {
            if (!d3.event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
        }

        function dragEnded(d) {
            if (!d3.event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }

        return d3.drag()
            .on("start", dragStarted)
            .on("drag", dragged)
            .on("end", dragEnded);
    }

    chart(nodes,links){
        const width = 1920;
        const height = 1080;

        const obj_links = links.map(d=> Object.create(d));
        const obj_nodes = nodes.map(d=> Object.create(d));

        const svg = d3.create("svg")
            .attr("viewBox", [0,0,width,height]);

        const color = (node) => {
            if(node.group == "actor"){
                return d3.color("steelblue");
            }

            var config = {
                "avatar_size" : 400
            }

            var defs = svg.append("svg:pattern")
                .attr("id", "grump_avatar")
                .attr("width", config.avatar_size)
                .attr("height", config.avatar_size)
                .attr("patternUnits", "userSpaceOnUse")
                .append("svg:image")
                .attr("xlink:href", node.poster)
                .attr("width", config.avatar_size)
                .attr("height", config.avatar_size)
                .attr("x", 0)
                .attr("y", 0);

            return "url(#grump_avatar)";
        }

        const radius = (node) => {
            if(node.group == "actor"){
                return 50;
            }
            return 100;
        }
        
        const link = svg.append("g")
            .attr("stroke", "#999")
            .attr("stroke-opacity", 0.6)
            .selectAll("line")
            .data(obj_links)
            .join("line")
            .attr("stroke-width", d=>Math.sqrt(d.value))

        const simulation = d3.forceSimulation(obj_nodes)
            .force("link", d3.forceLink().links(links).id(d => {return d.index;}).distance(200))
            .force("charge", d3.forceManyBody())
            .force("center", d3.forceCenter(width/2, height/2))

        const node = svg.append('g')
            .attr("stroke", "#fff")
            .attr("stroke-width", 1.5)
            .selectAll("circle")
            .data(obj_nodes)
            .join("circle")
            .attr("r", radius)
            .attr("fill", color)
            .call(this.drag(simulation))

        node.append("svg:title")
                .text(function(d){return d.actorName})

        simulation.on("tick", () => {
            link
                .attr("x1", d=>d.source.x)
                .attr("y1", d=>d.source.y)
                .attr("x2", d=>d.target.x)
                .attr("y2", d=>d.target.y);
            node
                .attr("cx", d=>d.x)
                .attr("cy", d=>d.y)
        })

        return svg.node();
    }

    componentDidMount(){
        const elem = document.getElementById("mysvg");
        elem.appendChild(this.chart(data.nodes, data.links));
    }

    render() {

        return (
            <div>
                <div id="mysvg">
                </div>
            </div>
        );
    }
}

export default MovieGraph;