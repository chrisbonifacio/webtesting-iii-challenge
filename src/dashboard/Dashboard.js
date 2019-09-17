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
}

export default Dashboard
