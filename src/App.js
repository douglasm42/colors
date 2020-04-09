import React from 'react';
import './App.css';
import Button from './components/Button';

import { getRandomColor } from './colors/Colors'
import { getRandomPlanet } from './planets/Planets'
import { getRandomLetter } from './letters'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentClass: 'AppBase',
      currentText: ':D',
    }
    this.selectRandomColor = this.selectRandomColor.bind(this)
    this.selectRandomPlanet = this.selectRandomPlanet.bind(this)
    this.selectRandomLetter = this.selectRandomLetter.bind(this)
  }
  
  componentDidMount() {
    //this.selectRandomColor()
  }

  getRandom(f, current) {
    let v = f()
    while(v == current) { v = f() }
    return v
  }

  selectRandomColor() {
    this.setState({ currentClass: this.getRandom(getRandomColor, this.state.currentClass), currentText: null })
  }

  selectRandomPlanet() {
    this.setState({ currentClass: this.getRandom(getRandomPlanet, this.state.currentClass), currentText: null })
  }

  selectRandomLetter() {
    this.setState({ currentClass: 'AppBase', currentText: this.getRandom(getRandomLetter, this.state.currentText) })
  }

  render() {
    let className = 'App ' + this.state.currentClass

    let text = null
    if(this.state.currentText) {
      text = (
        <p className="AppMiddle">{this.state.currentText}</p>
      )
    }

    return (
      <div className={className}>
        <Button onClick={this.selectRandomColor}>
          <i class="fa fa-paint-brush" aria-hidden="true"></i>
        </Button>
        <Button onClick={this.selectRandomPlanet}>
          <i class="fa fa-globe" aria-hidden="true"></i>
        </Button>
        <Button onClick={this.selectRandomLetter}>
          A
        </Button>
        {text}
      </div>
    );
  }
}

export default App;
