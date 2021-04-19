import { screen, fireEvent } from '@testing-library/react'

import { renderInRouter } from '../../../index'
import { EXAMPLE_HOME_PAGE_ROUTE_NAME, ExampleAppRoutes } from '../../../routes'

describe('renderInRouter HOC', () => {
  it('Renders component', () => {
    renderInRouter(ExampleAppRoutes)

    expect(screen.getByTestId('example-home-page')).toBeVisible()
  })

  it('Renders component with initial entries', () => {
    renderInRouter(ExampleAppRoutes, {
      initialEntries: ['/about']
    })

    expect(screen.getByTestId('example-about-page')).toBeVisible()
  })

  it('Enables navigation', () => {
    renderInRouter(ExampleAppRoutes)

    screen.getByTestId('example-home-page')

    fireEvent(
      screen.getByRole('link'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    )

    screen.getByTestId('example-about-page')
  })

  it('Accesses initial history', () => {
    const { history } = renderInRouter(ExampleAppRoutes, {
      shouldCheckHistory: true
    })

    expect(history?.location.pathname).toBe(EXAMPLE_HOME_PAGE_ROUTE_NAME)
  })

  it('Updates history according to navigation', () => {
    const { history } = renderInRouter(ExampleAppRoutes, {
      shouldCheckHistory: true
    })

    expect(history?.location.pathname).toBe('/')

    fireEvent(
      screen.getByRole('link'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    )

    expect(history?.location.pathname).toBe('/about')
  })
})
