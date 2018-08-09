import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'

class App extends Component {

  state = {
    selected: 'name',
    hogs: hogs
  }

  changeSelect = (selected) => {
    this.setState({
      ...this.state,
      selected: selected
    })


  }

  sortHogs = () => {
    let newOrder;
    if (this.state.selected === 'name'){
       newOrder = this.state.hogs.slice().sort(function (a,b) {
        if (a.name > b.name) {return 1;}
        else if (a.name < b.name) {return -1;}
        else { return 0;}
    })
  } else if (this.state.selected === 'weight') {
    newOrder =  this.state.hogs.slice().sort(function (a,b) {
      let weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water';
      return a[weight] - b[weight]})
  } else {
     newOrder = this.state.hogs.slice().filter(hog => hog.greased === true)
  }
    return newOrder
  }


  render() {
    // debugger
    return (
      <div className="App">
          < Nav changeSelect={this.changeSelect} />
          < HogContainer hogs={this.sortHogs()} />
      </div>
    )
  }
}

export default App;
