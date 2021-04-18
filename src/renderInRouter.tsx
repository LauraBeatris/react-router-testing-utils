import React from 'react'
import { MemoryHistory } from 'history';
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";

export const renderInRouter = (Comp: React.FC, history: MemoryHistory) =>
  render(
    <Router history={history}>
      <Comp />
    </Router>
  );