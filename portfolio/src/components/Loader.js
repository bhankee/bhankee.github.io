import React, { Component } from 'react'

class IntroShow extends Component {
  componentDidMount() {
<<<<<<< HEAD
    setTimeout(() => this.setState({ loading: false }), 2000)
||||||| 97068b9... Added state to display loader as timer.
    setTimeout(() => this.setState({ loading: false }), 3000)
=======
    let wordInterval = setInterval(this.wordTimer, 1000)
    this.setState({ intervalClear: wordInterval })
>>>>>>> parent of 97068b9... Added state to display loader as timer.
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
