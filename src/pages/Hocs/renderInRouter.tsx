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
  history?: History<any>
}

/**
 * Render a given component in a Router for un-browser environments
 */
export const renderInRouter = (Component: React.FC, {
  initialEntries = ['/'],
  renderOptions,
  shouldCheckHistory = false
}: RenderInRouterArguments = {}): RenderInRouterReturnType => {
  let history

  const renderPayload = render(
    <MemoryRouter initialEntries={initialEntries}>
      <Component />

      {
        shouldCheckHistory && (
          <Route
            path='*'
            render={({ history: renderedHistory }) => {
              history = shouldCheckHistory ? renderedHistory : undefined

              return null
            }}
          />
        )
      }
    </MemoryRouter>, renderOptions)

  return {
    ...renderPayload,
    history
  }
}
