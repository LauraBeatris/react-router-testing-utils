import React from 'react'
import { History, Location } from 'history'
import { render, RenderResult, RenderOptions } from '@testing-library/react'
import { Route, MemoryRouter } from 'react-router-dom'

export type RenderInRouterArguments = {
  component: React.FC,
  initialEntries: Array<string>,
  renderOptions: RenderOptions,
  shouldCheckLocation: boolean,
}

export type RenderInRouterReturnType = RenderResult & {
  testingHistory?: History<any>,
  testingLocation?: Location<any>,
}

/**
 * Render a given component in a Router for un-browser environments
 */
export const renderInRouter = ({
  component: Component,
  initialEntries = ['/'],
  renderOptions,
  shouldCheckLocation = false
}: RenderInRouterArguments): RenderInRouterReturnType => {
  let testHistory, testLocation

  const renderPayload = render(
    <MemoryRouter initialEntries={initialEntries}>
      <Component />

      {shouldCheckLocation && (
        <Route
          path='*'
          render={({ history, location }) => {
            testHistory = history
            testLocation = location

            return null
          }}
        />
      )}
    </MemoryRouter>, renderOptions)

  return {
    ...renderPayload,
    ...(shouldCheckLocation
      ? {
          testHistory,
          testLocation
        }
      : {})
  }
}
