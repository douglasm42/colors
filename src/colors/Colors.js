import React from 'react';
import './Colors.css';
import Next from '../components/Next';

class Colors extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: ['Red', 'Green', 'Blue', 'Yellow', 'Pink', 'Purple', 'Orange'],
      currentColor: null
    }
    this.selectRandomColor = this.selectRandomColor.bind(this)
  }
  
  componentDidMount() {
    this.selectRandomColor()
  }

  getRandomColor() {
    let index = Math.floor(Math.random() * this.state.colors.length)
    console.log(index)
    return this.state.colors[index]
  }

  selectRandomColor() {
    this.setState({ currentColor: this.getRandomColor() })
  }

  render() {
    let className = 'Colors ' + this.state.currentColor
    return (
      <div className={className}>
        <Next handleNext={this.selectRandomColor} />
      </div>
    );
  }
}

export default Colors;
