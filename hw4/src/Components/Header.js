import React, {Component} from 'react';

export class Header extends Component {
    displayHeader = () => {
        var activeTab = this.props.activeTab
        if(activeTab==1){
            return (
                <div class="header">
                    <h1>Welcome</h1>
                </div>
            )
        } else if (activeTab==2){
            return (
                <div class="header">
                    <h1>Images</h1>
                </div>
            )
        } else if (activeTab==3){
            return (
                <div class="header">
                    <h1>Videos</h1>
                </div>
            )
        } else {
            return (
                <div class="header">
                    <h1>ExternalLinks</h1>
                </div>
            )
        }
    }
    render() {
        return (this.displayHeader());
    }
}

export default Header;