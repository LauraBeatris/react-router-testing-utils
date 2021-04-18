import React from 'react'
import { Route, Link } from 'react-router-dom'

export const EXAMPLE_ABOUT_PAGE_ROUTE_NAME = '/about'
export const EXAMPLE_HOME_PAGE_ROUTE_NAME = '/'

export const ExampleAboutPage = () => (
  <section data-testid='example-about-page'>
    <p>
      This is a random text for a paragraph
    </p>
  </section>
)

export const ExampleHomePage = () => (
  <main data-testid='example-home-page'>
    <nav>
      <Link to={EXAMPLE_ABOUT_PAGE_ROUTE_NAME}>
        Go to about page
      </Link>
    </nav>
    <h1>
      Example App Title
    </h1>
  </main>
)

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

export const ExampleAppRoutes = () => (
  <>
    {EXAMPLE_APP_ROUTES.map(({ path, component: Component }) => (
      <Route path={path} key={path}>
        <Component />
      </Route>
    ))}
  </>
)
