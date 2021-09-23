import { ComponentProps } from 'react';

export type NativeProps = ComponentProps<'button'> & ComponentProps<'a'>;
export type ElementType = HTMLButtonElement | HTMLAnchorElement;
