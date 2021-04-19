import React from 'react'
import { Route } from 'react-router-dom'

// Pages
import { ExampleHomePage } from './Home'
import { ExampleAboutPage } from './About'

export const EXAMPLE_ABOUT_PAGE_ROUTE_NAME = '/about'
export const EXAMPLE_HOME_PAGE_ROUTE_NAME = '/'

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
