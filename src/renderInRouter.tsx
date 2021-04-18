import React from 'react'
import { render, RenderOptions } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

/**
 * Render a given component in a Router for un-browser environments
 */
export const renderInRouter = ({
  component: Component, 
  initialEntries = ['/'], 
  renderOptions
}: {
  component: React.FC,
  initialEntries: Array<string>,
  renderOptions: RenderOptions
}) =>
  render(
    <MemoryRouter initialEntries={initialEntries}>
      <Component />
    </MemoryRouter>
  , renderOptions);
