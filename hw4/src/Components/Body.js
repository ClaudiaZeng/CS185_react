import React, {Component} from 'react';
import Home from './Home'
import Images from './Images'
import Videos from './Videos'
import ExternalLinks from './ExternalLinks';
import GuestBook from './GuestBook';
import Movies from './Movies'
import MovieGraph from './MovieGraph'

export class Body extends Component {
    displayContent = () => {
        var activeTab = this.props.activeTab
        if(activeTab===1){
            return <Home/>
        } else if (activeTab===2){
            return <Images/>
        } else if (activeTab===3){
            return <Videos/>
        } else if (activeTab===4){
            return <ExternalLinks/>
        } else if (activeTab===5){
            return <GuestBook/>
        } else if (activeTab===6){
            return <Movies/>
        } else{
            return <MovieGraph/>
        }
    }
    render() {
        return (
            this.displayContent());
    }
}

export default Body;