import React from 'react';
import './App.css';
import Button from './components/Button';

import { getRandomColor } from './colors/Colors'
import { getRandomPlanet } from './planets/Planets'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentClass: null
    }
    this.selectRandomColor = this.selectRandomColor.bind(this)
    this.selectRandomPlanet = this.selectRandomPlanet.bind(this)
  }
  
  componentDidMount() {
    this.selectRandomColor()
  }

  getRandom(f, current) {
    let v = f()
    while(v == current) { v = f() }
    return v
  }

  selectRandomColor() {
    this.setState({ currentClass: this.getRandom(getRandomColor, this.state.currentClass) })
  }

  selectRandomPlanet() {
    this.setState({ currentClass: this.getRandom(getRandomPlanet, this.state.currentClass) })
  }

  render() {
    let className = 'App ' + this.state.currentClass
    return (
      <div className={className}>
        <Button onClick={this.selectRandomColor}>
          <i class="fa fa-paint-brush" aria-hidden="true"></i>
        </Button>
        <Button onClick={this.selectRandomPlanet}>
          <i class="fa fa-globe" aria-hidden="true"></i>
        </Button>
      </div>
    );
  }
}

export default App;
