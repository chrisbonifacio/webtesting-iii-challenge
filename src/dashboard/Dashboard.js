import React from "react"

import Display from "../display/Display"
import Controls from "../controls/Controls"

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <Display />
        <Controls />
      </>
    )
  }

  toggleLocked = () => {
    this.setState(prev => ({ locked: !prev.locked }))
  }

  toggleClosed = () => {
    this.setState(prev => ({ closed: !prev.closed }))
  }
}

export default Dashboard
