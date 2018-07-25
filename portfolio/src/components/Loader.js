import React, { Component } from 'react'

class IntroShow extends Component {
  componentDidMount() {
    let wordInterval = setInterval(this.wordTimer, 1000)
    this.setState({ intervalClear: wordInterval })
  }

  render() {
    return (
      <div id="loaderWrapper">
        <div className="lds-ellipsis">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    )
  }
}

export default IntroShow
