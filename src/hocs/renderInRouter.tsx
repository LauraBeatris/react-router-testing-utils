import React from 'react'
import { History } from 'history'
import { render, RenderResult, RenderOptions } from '@testing-library/react'
import { Route, MemoryRouter } from 'react-router-dom'

export type RenderInRouterArguments = {
  renderOptions?: RenderOptions,
  initialEntries?: Array<string>,
  shouldCheckHistory?: boolean;
}

export type RenderInRouterReturnType = RenderResult & {
  testHistory?: History<any>
}

/**
 * Render a given component in a Router for un-browser environments
 */
export const renderInRouter = (Component: React.FC, {
  initialEntries = ['/'],
  renderOptions,
  shouldCheckHistory = false
}: RenderInRouterArguments = {}): RenderInRouterReturnType => {
  let testHistory

  const renderPayload = render(
    <MemoryRouter initialEntries={initialEntries}>
      <Component />

      {
        (shouldCheckHistory) && (
          <Route
            path='*'
            render={({ history }) => {
              testHistory = shouldCheckHistory ? history : undefined

              return null
            }}
          />
        )
      }
    </MemoryRouter>, renderOptions)

  return {
    ...renderPayload,
    testHistory
  }
}
