import { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';

export const AbstractButton = forwardRef(({ children, ...props }, ref) => {
  let Component = 'button';

  const componentProps = { ...props };

  if (props.href && !props.href.startsWith('/')) {
    Component = 'a';

    delete componentProps.to;
    componentProps.target = '_blank';
    componentProps.rel = 'noopener noreferrer';
  } else if (props.href) {
    Component = NavLink;
    delete componentProps.href;
    componentProps.to = props.href;
  } else if (props.type == null) {
    componentProps.type = 'button';
  }

  return (
    <Component ref={ref} {...componentProps}>
      {children}
    </Component>
  );
});
