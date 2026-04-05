import styled from '@emotion/styled';

import Txt from '@/components/common/Txt';

const BarTitle = styled.h2`
  align-items: center;
  color: var(--mui-palette-primary-contrastText);
  column-gap: 8px;
  display: flex;
  flex: 1;
  font: var(--mui-font-body1);
  overflow: hidden;
  padding: 0 0 0 0;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
`;

const StyledAppBar = styled.div`
  background-color: var(--top-bar-background-color);
  box-shadow: var(--top-bar-box-shadow);
  border-bottom: var(--top-bar-border);
  flex: 0 0 auto;
  position: static;
`;

const StyledToolbar = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  padding: 4px;
  & h2 {
    color: var(--top-bar-text-color);
    text-align: center;
  }

  button {
    color: var(--top-bar-text-color);
  }
`;

type Props = {
  endAddOn?: React.ReactNode;
  startAddOn?: React.ReactNode;
  title?: string;
  titleAddon?: React.ReactNode;
};

export default function BarToolbar({ startAddOn, endAddOn, title, titleAddon }: Props) {
  return (
    <StyledAppBar>
      <StyledToolbar>
        {startAddOn ?? <div />}
        {title != null ? (
          <BarTitle>
            <Txt id={title} />
            {titleAddon}
          </BarTitle>
        ) : (
          <div />
        )}
        {endAddOn ?? <div />}
      </StyledToolbar>
    </StyledAppBar>
  );
}
