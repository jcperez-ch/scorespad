import { ComponentProps, Ref, forwardRef } from 'react';
import { Link as RouterLink } from 'react-router';

type Props = {
  href: string;
} & Omit<ComponentProps<typeof RouterLink>, 'to'>;

function Link({ href, ...other }: Props, ref: Ref<HTMLAnchorElement>) {
  return <RouterLink ref={ref} to={href} {...other} />;
}

export default forwardRef(Link);
