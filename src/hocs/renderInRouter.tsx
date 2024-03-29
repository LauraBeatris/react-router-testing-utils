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
 * @description
 * Allows you to render a given component in a Router for un-browser environments
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

      {shouldCheckHistory && (
        <Route
          path='*'
          render={({ history: renderedHistory }) => {
            history = renderedHistory

            return null
          }}
        />
      )}
    </MemoryRouter>, renderOptions)

  return {
    ...renderPayload,
    history
  }
}
