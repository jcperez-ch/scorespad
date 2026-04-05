import React, { forwardRef, use } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import styled from '@emotion/styled';

import DialogAriaLabelContext from '@/config/DialogAriaLabelContext';

const StyledWrapper = styled.h4`
  border-bottom: 1px solid var(--miu-palette-divider);
`;

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
`;

const StyledText = styled(Typography)`
  && {
    margin-left: 0.75rem;
  }
`;

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

function DialogTitle({ children, onClose }: Props, ref: React.Ref<HTMLDivElement>) {
  const dialogTitle = use(DialogAriaLabelContext);
  return (
    <StyledWrapper id={dialogTitle} ref={ref}>
      <StyledContainer>
        <IconButton color="secondary" onClick={onClose} size="large">
          <CloseIcon />
        </IconButton>
        <StyledText>{children}</StyledText>
      </StyledContainer>
    </StyledWrapper>
  );
}

export default forwardRef(DialogTitle);
