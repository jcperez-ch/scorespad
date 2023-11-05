import React, { forwardRef } from 'react';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

import { themeColors } from 'themes';

const StyledWrapper = styled.h4`
  border-bottom: 1px solid ${themeColors.border};
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

StyledText.defaultProps = {
  component: 'h4',
  variant: 'overline',
};

function DialogTitle({ children, onClose, ...props }, ref) {
  return (
    <StyledWrapper ref={ref} {...props}>
      <StyledContainer>
        <IconButton color="secondary" variant="outlined" onClick={onClose} size="large">
          <Icon>close</Icon>
        </IconButton>
        <StyledText>{children}</StyledText>
      </StyledContainer>
    </StyledWrapper>
  );
}

export default forwardRef(DialogTitle);
