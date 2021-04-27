import { screen, fireEvent } from '@testing-library/dom'

import { renderInRouter } from '../..'
import { ExampleAppRoutes, EXAMPLE_QUERY_PARAMS_PAGE_ROUTE_NAME } from '../appExample'

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
      screen.getByRole('button', { name: 'Number' }),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    )

    expect(history?.location.search).not.toHaveQueryParam('filter-number', 2)
  })

  it('passes if query param exists', () => {
    const { history } = renderInRouter(ExampleAppRoutes, {
      shouldCheckHistory: true,
      initialEntries: [EXAMPLE_QUERY_PARAMS_PAGE_ROUTE_NAME]
    })

    fireEvent(
      screen.getByRole('button', { name: 'Number' }),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    )

    expect(history?.location.search).toHaveQueryParam('filter-number')
  })

  it('passes if query param exists & is equal to expected value', () => {
    const { history } = renderInRouter(ExampleAppRoutes, {
      shouldCheckHistory: true,
      initialEntries: [EXAMPLE_QUERY_PARAMS_PAGE_ROUTE_NAME]
    })

    fireEvent(
      screen.getByRole('button', { name: 'Number' }),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    )

    expect(history?.location.search).toHaveQueryParam('filter-number', 1)
  })

  it('handle query param encoding of different value types', () => {
    const { history } = renderInRouter(ExampleAppRoutes, {
      shouldCheckHistory: true,
      initialEntries: [EXAMPLE_QUERY_PARAMS_PAGE_ROUTE_NAME]
    })

    fireEvent(
      screen.getByRole('button', { name: 'Object' }),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    )

    expect(history?.location.search).toHaveQueryParam('filter-object', { foo: 'foo' })
  })
})
