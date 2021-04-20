import { screen, fireEvent } from '@testing-library/dom'

import { renderInRouter } from '../../src'

import { ExampleAppRoutes, EXAMPLE_FILTERS, EXAMPLE_QUERY_PARAMS_PAGE_ROUTE_NAME } from '../appExample'

describe('toHaveQueryParam matcher', () => {
  it("doesn't pass if query param don't exists", () => {
    const { history } = renderInRouter(ExampleAppRoutes, {
      shouldCheckHistory: true,
      initialEntries: [EXAMPLE_QUERY_PARAMS_PAGE_ROUTE_NAME]
    })

    expect(history?.location.search).not.toHaveQueryParam('foo')
  })

  it("doesn't pass if query param isn't equal to expected value", () => {
    const { history } = renderInRouter(ExampleAppRoutes, {
      shouldCheckHistory: true,
      initialEntries: [EXAMPLE_QUERY_PARAMS_PAGE_ROUTE_NAME]
    })

    fireEvent(
      screen.getByRole('button', { name: EXAMPLE_FILTERS[0].name }),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    )

    expect(history?.location.search).toHaveQueryParam('filter', EXAMPLE_FILTERS[0].value)
  })

  it('passes if query param exists', () => {
    const { history } = renderInRouter(ExampleAppRoutes, {
      shouldCheckHistory: true,
      initialEntries: [EXAMPLE_QUERY_PARAMS_PAGE_ROUTE_NAME]
    })

    fireEvent(
      screen.getByRole('button', { name: EXAMPLE_FILTERS[1].name }),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    )

    expect(history?.location.search).toHaveQueryParam('filter')
  })

  it('passes if query param exists & is equal to expected value', () => {
    const { history } = renderInRouter(ExampleAppRoutes, {
      shouldCheckHistory: true,
      initialEntries: [EXAMPLE_QUERY_PARAMS_PAGE_ROUTE_NAME]
    })

    fireEvent(
      screen.getByRole('button', { name: EXAMPLE_FILTERS[1].name }),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    )

    expect(history?.location.search).toHaveQueryParam('filter', EXAMPLE_FILTERS[1].value)
  })
})
