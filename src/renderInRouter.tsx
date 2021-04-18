import React from 'react'
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

export const renderInRouter = (Comp: React.FC, initialEntries: ['/']) =>
  render(
    <MemoryRouter initialEntries={initialEntries}>
      <Comp />
    </MemoryRouter>
  );