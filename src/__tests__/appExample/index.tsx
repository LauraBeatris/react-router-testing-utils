import React from 'react'
import { Route, Link } from 'react-router-dom'
import { ArrayParam, NumberParam, ObjectParam, QueryParamProvider, useQueryParam } from 'use-query-params'

export const EXAMPLE_QUERY_PARAMS_PAGE_ROUTE_NAME = '/query-params'
export const EXAMPLE_ABOUT_PAGE_ROUTE_NAME = '/about'
export const EXAMPLE_HOME_PAGE_ROUTE_NAME = '/'

export const ExampleQueryParamsPage = () => {
  const [, setFilterNumber] = useQueryParam('filter-number', NumberParam)
  const [, setFilterObject] = useQueryParam('filter-object', ObjectParam)
  const [, setFilterArray] = useQueryParam('filter-array', ArrayParam)

  return (
    <section data-test-id='example-query-params-page'>
      <h3>Select filter</h3>
      <button onClick={() => setFilterNumber(1)}>Number</button>
      <button onClick={() => setFilterObject({ foo: 'foo' })}>Object</button>
      <button onClick={() => setFilterArray(['1'])}>Array</button>
    </section>
  )
}

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
    path: EXAMPLE_QUERY_PARAMS_PAGE_ROUTE_NAME,
    component: ExampleQueryParamsPage
  },
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
  <QueryParamProvider ReactRouterRoute={Route}>
    {EXAMPLE_APP_ROUTES.map(({ path, component: Component }) => (
      <Route path={path} key={path}>
        <Component />
      </Route>
    ))}
  </QueryParamProvider>
)
