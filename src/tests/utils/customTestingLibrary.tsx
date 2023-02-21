import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import _ from "@testing-library/dom";

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { ...options });

const customEvents = userEvent.setup();

export * from '@testing-library/react';
export { customRender as render, customEvents as user };
