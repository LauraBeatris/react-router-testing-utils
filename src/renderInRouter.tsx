import React from 'react'
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

/**
 * Render a given component in a Router for un-browser environments
 */
export const renderInRouter = (Comp: React.FC, initialEntries: ['/']) =>
  render(
    <MemoryRouter initialEntries={initialEntries}>
      <Comp />
    </MemoryRouter>
  );
