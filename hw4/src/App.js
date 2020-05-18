import React, { Component } from 'react';
import './Css/App.css';
import Header from './Components/Header'
import Body from './Components/Body'
import TabList from './Components/TabList'
import BackButton from './Components/BackButton'

export class App extends Component {
  constructor(){
    super();
    this.state = {
      activeTab: 1,
    }
    this.changeTab = (id) => {
      this.setState({
        activeTab: id
      })
    }
  }

  render (){
    document.title = "Portfolio"
    const tabs = [
      {
        id: 1,
        title: 'Home'
      },
      {
        id: 2,
        title: 'Images'
      },
      {
        id: 3,
        title: 'Videos'
      },
      {
        id: 4,
        title: 'ExternalLinks'
      },
      {
        id: 5,
        title: 'GuestBook'
      },
      {
        id: 6,
        title: 'Movies'
      }
    ]
    return (
      <div class="body">
        <div class="header">
          <Header activeTab={this.state.activeTab}/>
        </div>
        <div class="tab">
          <TabList tabs={tabs}
          changeTab={this.changeTab}
          activeTab={this.state.activeTab}/>
        </div>
        <div class="main-body">
          <Body activeTab={this.state.activeTab}/>
        </div>
        <div class="backBtn">
          <BackButton/>
        </div>
      </div>
    )
  }
}

export default App;
