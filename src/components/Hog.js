import React, { Component } from 'react';

export default class Hog extends Component {
  constructor() {
    super()

    this.state = {
      clicked: false,
      hidden: false
    }
  }

  handleClick = (event) => {
    if (event.target.className !== 'hide-button' && event.target.className !== 'show-button'){
      this.setState({
        ...this.state,
        clicked: !this.state.clicked
      })
    }
  }

  hideShow = () => {
    this.setState({
      ...this.state,
      hidden: !this.state.hidden
    })
  }

  createCard = () => {
    if (this.state.hidden){
      return <button className="show-button" onClick={this.hideShow}>Show</button>
    } else if (this.state.clicked){
      return (
      <div className="ui card">
        <button className="hide-button" onClick={this.hideShow} >Hide</button>
        <div className="specialty">
          Specialty: {this.props.hog.specialty}
        </div>
        <div className="greased">
          {this.props.hog.greased ? 'Greased' : 'Not Greased'}
        </div>
        <div className="weight">
          <p>
          weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
          </p>
        </div>
        <div className="medal achievementText">
          Highest Medal Achieved: {this.props.hog['highest medal achieved']}
        </div>
      </div>
      )
    } else if (!this.state.clicked) {
      return (
      <div className="ui card">
        <button className="hide-button" onClick={this.hideShow} >Hide</button>
        <div className="image">
          <img src={window.location.origin +  `/hog-imgs/${this.imgName()}.jpg`} alt=''/>
        </div>
        <div className="content">
          <a className="header">{this.props.hog.name}</a>
        </div>
      </div>
      )
    }
  }

  imgName =  () => {return this.props.hog.name.toLowerCase().split(' ').join('_')}

  render(){
    return (
      <div className="ui eight wide column pigTile" onClick={this.handleClick} >

          {this.createCard()}

      </div>
    )
  }
}
