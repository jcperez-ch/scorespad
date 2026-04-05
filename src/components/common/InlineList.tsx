import { Children, Fragment, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  separator?: string | ReactNode;
};

export default function InlineList({ children, separator = ', ' }: Props) {
  const childrenArray = Children.toArray(children);
  return childrenArray.map((child, index) => (
    <Fragment key={index}>
      {child}
      {index < childrenArray.length - 1 && separator}
    </Fragment>
  ));
}
