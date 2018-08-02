import React, { Component } from 'react'

class Loader extends Component {
  state = {
    loading: true,
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 2000)
  }

  render() {
    const loading = this.state.loading

    if (loading) {
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
    } else {
      return <div />
    }
  }
}

export default Loader
