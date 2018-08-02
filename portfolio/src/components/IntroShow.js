import React, { Component } from 'react'

class IntroShow extends Component {
  state = {
    adjectives: ['Foodie', 'Developer', 'Veteran'],
    currentWord: '',
    wordInterval: 0,
    intervalClear: '',
  }

  componentDidMount() {
    let wordInterval = setInterval(this.wordTimer, 1000)
    this.setState({ intervalClear: wordInterval })
  }
  componentWillUnmount() {
    // use intervalId from the state to clear the interval
    clearInterval(this.state.intervalClear)
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
    return (
      <div>
        <div className="wordShow">{this.state.currentWord}</div>
        <div className="row justify-content-md-center">
          <div className="col-xs-12  ">
            <i className="fa fa-angle-down glyph" />
          </div>
        </div>
      </div>
    )
  }
}

export default IntroShow
