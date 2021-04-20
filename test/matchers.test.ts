import { screen, fireEvent } from '@testing-library/dom'

import '../src/extend-expect'
import { renderInRouter } from '../src'

import { ExampleAppRoutes, EXAMPLE_QUERY_PARAMS_PAGE_ROUTE_NAME } from './example'

describe('Custom Jest Matchers', () => {
  describe('toHaveQueryParam', () => {
    it("doesn't pass if query param don't exists", () => {
      const { history } = renderInRouter(ExampleAppRoutes, {
        shouldCheckHistory: true,
        initialEntries: [EXAMPLE_QUERY_PARAMS_PAGE_ROUTE_NAME]
      })

      expect(history?.location.search).not.toHaveQueryParam('foo', 'foo')
    })

    it('passes if query param exists & is equal to expected value', () => {
      const { history } = renderInRouter(ExampleAppRoutes, {
        shouldCheckHistory: true,
        initialEntries: [EXAMPLE_QUERY_PARAMS_PAGE_ROUTE_NAME]
      })

      fireEvent(
        screen.getByRole('button'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true
        })
      )

      expect(history?.location.search).toHaveQueryParam('foo', 'foo')
    })
  })
})
