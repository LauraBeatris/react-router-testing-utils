import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import { useNavigate } from './useNavigate'

const EXAMPLE_ABOUT_PAGE_ROUTE_NAME = '/about'
const EXAMPLE_HOME_PAGE_ROUTE_NAME = '/'

export const ExampleAboutPage = () => (
  <section data-testid='example-about-page'>
    <p>
      This is a random text for a paragraph
    </p>
  </section>
)

export const ExampleHomePage = () => {
  const navigate = useNavigate()

  return (
    <main data-testid='example-about-page'>
      <nav>
        <button type='button' onClick={navigate(EXAMPLE_ABOUT_PAGE_ROUTE_NAME)}>
          Go to about page
        </button>
      </nav>
      <h1>
        Example App Title
      </h1>
    </main>
  )
}

export const EXAMPLE_APP_ROUTES = [
  {
    path: EXAMPLE_ABOUT_PAGE_ROUTE_NAME,
    component: ExampleAboutPage
  },
  {
    path: EXAMPLE_HOME_PAGE_ROUTE_NAME,
    component: ExampleHomePage
  }
]

export const ExampleApp = () => (
  <BrowserRouter>
    {EXAMPLE_APP_ROUTES.map(({ path, component: Component }) => (
      <Route path={path} key={path}>
        <Component />
      </Route>
    ))}
  </BrowserRouter>
)
