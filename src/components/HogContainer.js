import React, { Component } from 'react';
import Hog from './Hog'

export default class HogContainer extends Component {
  constructor() {
    super()
  }

  createHogComponents(){
    return this.props.hogs.map(hog => {
      return <Hog key={hog.name} hog={hog} />
    })
  }

  render(){
    return (
      <div className="ui grid container indexWrapper" >
        {this.createHogComponents()}
      </div>
    )
  }
}
