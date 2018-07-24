import React, { Component } from 'react'

class IntroShow extends Component {
  state = {
    adjectives: ['Foodie', 'Developer', 'Veteran'],
    currentWord: '',
    wordInterval: 0,
  }

  componentDidMount() {
    let wordInterval = setInterval(this.wordTimer, 1000)
  }
  componentWillUnmount() {
    // use intervalId from the state to clear the interval
    clearInterval(this.state.wordInterval)
  }

  wordTimer = () => {
    this.state.wordInterval === 3
      ? this.setState({
          wordInterval: 1,
          currentWord: this.state.adjectives[0],
        })
      : this.setState({
          wordInterval: this.state.wordInterval + 1,
          currentWord: this.state.adjectives[this.state.wordInterval],
        })
  }

  render() {
    return <div>{this.state.currentWord}</div>
  }
}

export default IntroShow
