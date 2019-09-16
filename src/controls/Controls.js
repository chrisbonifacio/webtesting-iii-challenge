import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { toggleLocked, toggleClosed } from "../store/actions"

const Controls = props => {
  const { locked, closed } = useSelector(state => ({
    locked: state.locked,
    closed: state.closed
  }))

  const dispatch = useDispatch()

  return (
    <div className="controls panel">
      <button
        data-testid="lock-button"
        disabled={!closed}
        onClick={() => {
          dispatch(toggleLocked())
        }}
        className="toggle-btn"
      >
        {locked ? "Unlock Gate" : "Lock Gate"}
      </button>
      <button
        data-testid="open-close-button"
        disabled={locked}
        onClick={() => dispatch(toggleClosed())}
        className="toggle-btn"
      >
        {closed ? "Open Gate" : "Close Gate"}
      </button>
    </div>
  )
}

export default Controls
