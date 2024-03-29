import React, {Component} from 'react';

export class Tab extends Component {
    addStyling = () => {
        if(this.props.tab.id === this.props.activeTab){
            return {backgroundColor: "rgb(204, 230, 255)"}
        }
        else{
            return {backgroundColor: 'white'}
        }
    }

    render() {
        return (
            <div className='tab'
            style={this.addStyling()}
            onClick={this.props.changeTab.bind(this, this.props.tab.id)}>
                <h2>{this.props.tab.title}</h2>
            </div>
        );
    }
}

export default Tab;