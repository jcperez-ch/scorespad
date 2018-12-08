import React from 'react';

const Flex = ({
  component: Cmp = 'div',
  display,
  basis,
  direction,
  flex,
  items,
  justify,
  wrap,
  children,
  shrink,
  grow,
  ...props
}) => {
  const style = Object.assign(
    display ? { display: 'flex' } : {},
    flex ? { flex } : {},
    direction ? { flexDirection: direction } : {},
    basis ? { flexBasis: basis } : {},
    items ? { alignItems: items } : {},
    justify ? { justifyContent: justify } : {},
    wrap ? { flexWrap: wrap } : {},
    shrink ? { flexWrap: shrink } : {},
    grow ? { flexWrap: grow } : {},
  );
  return (
    <Cmp style={style} {...props}>
      {children}
    </Cmp>
  );
};

export default Flex;
