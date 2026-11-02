import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { RobotHead, robotHeadShapes, robotHeadStates } from './index';
import type { RobotHeadProps } from './types';

// Plain-JS entry for pages without React: mount(el, props) -> { update, unmount }.
export function mount(el: HTMLElement, props: RobotHeadProps) {
  const root = createRoot(el);
  let current = { ...props };
  root.render(createElement(RobotHead, current));
  return {
    update(next: Partial<RobotHeadProps>) {
      current = { ...current, ...next };
      root.render(createElement(RobotHead, current));
    },
    unmount() { root.unmount(); },
  };
}

export { robotHeadShapes, robotHeadStates };
