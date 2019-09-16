import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Controls from "./Controls"
import Dashboard from "../dashboard/Dashboard"
// Test away!

test("Controls renders without crashing", () => {
  render(<Controls />)
})

test("Open/Close button toggles the closed state", () => {
  // Arrange

  // main component
  const { getByText, getByTestId } = render(<Dashboard />)

  // buttons
  const openCloseButton = getByTestId("open-close-button")
  const lockButton = getByTestId("lock-button")

  // Assert
  expect(openCloseButton.textContent).toBe("Close Gate")
  expect(lockButton.getAttribute("disabled")).toBeDefined()

  // Act
  fireEvent.click(openCloseButton)

  // Assert
  expect(openCloseButton.textContent).toBe("Open Gate")
  expect(lockButton.getAttribute("disabled")).toBeNull()
})
