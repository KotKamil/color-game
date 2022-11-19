import '../css/App.css';
import React from 'react';

import ColorPanel from './ColorPanel';
import ButtonsArea from './ButtonsArea';

class App extends React.Component {
  state = {
    winningColor: "",
    allColors: ["", "", ""],
    status: ""
  }

  drawColor = () => {
    let colorString = "#";
    for (let i = 0; i < 3; i++) {
      colorString += Math.floor(Math.random() * 255).toString(16);
    }
    return colorString;
  }

  initValues() {
    let colors = [...this.state.allColors];
    const randomIndex = Math.floor(Math.random() * 3);

    colors.forEach((color, index) => {
      colors[index] = this.drawColor();
    });

    this.setState(prevState => ({
      allColors: colors,
      winningColor: colors[randomIndex],
    }));
  }

  handleClick = (color) => {
    let status = "";
    if (color === this.state.winningColor) {
      status = "Correct!"
      this.initValues();
    } else {
      status = "Wrong Anwser";
    }
    this.setState(prevState => ({
      status
    }));
  }

  componentDidMount() {
    this.initValues();
  }

  render() {
    return (
      <div className="container">
        <div className="App">
          <div className="colorPanel">
            <ColorPanel color={this.state.winningColor} />
          </div>
          <div className="buttonsArea" >
            <ButtonsArea colors={this.state.allColors} handleClick={this.handleClick} />
          </div>
          <div className="result">
            {this.state.status}
          </div>
        </div>
      </div>
    );
  }
}

export default App;