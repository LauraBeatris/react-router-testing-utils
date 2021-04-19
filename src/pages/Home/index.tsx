import { Link } from 'react-router-dom'
import React from 'react'

import { EXAMPLE_ABOUT_PAGE_ROUTE_NAME } from '../../routes'

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
