import { compose, withState, withHandlers } from 'recompose';

const getTargetPosition = (e) => {
  const realTarget = e.currentTarget || e.srcElement || e.originalTarget;

  const rect = realTarget.getBoundingClientRect();
  return {
    x: rect.top,
    y: rect.left,
    height: rect.height,
    width: rect.width,
  };
};

export default compose(
  withState('toggledOn', 'toggle', false),
  withState('position', 'setPosition', { x: 0, y: 0 }),
  withHandlers({
    show: ({ setPosition, toggle }) => (e) => {
      e.preventDefault();
      e.stopPropagation();
      setPosition(getTargetPosition(e));
      toggle(true);
    },
    hide: ({ setListener, toggle }) => (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggle(false);
    },
    toggle: ({ setPosition, toggle }) => (e) => {
      e.preventDefault();
      e.stopPropagation();
      setPosition(getTargetPosition(e));
      toggle((current) => !current);
    },
  })
);
