// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onGenerateRandomNumber = () => {
    const randomInteger = Math.ceil(Math.random() * 100)

    this.setState({randomNumber: randomInteger})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="app-bg-container">
        <div className="random-number-card">
          <h1 className="random-heading">Random Number</h1>
          <p className="random-description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            onClick={this.onGenerateRandomNumber}
            className="random-generate-button"
          >
            Generate
          </button>

          <p className="randomValue">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
