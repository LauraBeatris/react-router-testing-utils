import { screen, fireEvent } from '@testing-library/dom'
import { ArrayParam, NumberParam, ObjectParam, StringParam } from 'serialize-query-params'

import { renderInRouter } from '../..'
import { ExampleAppRoutes, EXAMPLE_QUERY_PARAMS_PAGE_ROUTE_NAME } from '../appExample'

describe('toHaveQueryParam matcher', () => {
  it("doesn't pass if query param don't exists", () => {
    const { history } = renderInRouter(ExampleAppRoutes, {
      shouldCheckHistory: true,
      initialEntries: [EXAMPLE_QUERY_PARAMS_PAGE_ROUTE_NAME]
    })

    expect(history?.location.search).not.toHaveQueryParam({
      name: 'foo',
      value: 'foo',
      type: StringParam
    })
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

    expect(history?.location.search).not.toHaveQueryParam({
      name: 'filter-number',
      type: NumberParam,
      value: 2
    })
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

    expect(history?.location.search).toHaveQueryParam({
      name: 'filter-number',
      type: NumberParam,
      value: 1
    })
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

    fireEvent(
      screen.getByRole('button', { name: 'Array' }),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    )

    expect(history?.location.search).toHaveQueryParam({
      name: 'filter-object',
      type: ObjectParam,
      value: { foo: 'foo' }
    })
    expect(history?.location.search).toHaveQueryParam({
      name: 'filter-array',
      type: ArrayParam,
      value: ['1']
    })
  })
})
