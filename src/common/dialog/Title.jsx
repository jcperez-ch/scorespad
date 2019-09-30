import React from 'react'
import UIDialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

import { themeColors } from 'themes'

const StyledWrapper = styled(UIDialogTitle).attrs({
  disableTypography: true,
})`
  border-bottom: 1px solid ${themeColors.border};
`

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
`

const StyledText = styled(Typography).attrs({
  component: 'h4',
  variant: 'overline',
})`
  && {
    margin-left: 0.75rem;
  }
`

const DialogTitle = ({ children, onClose, ...props }) => (
  <StyledWrapper {...props}>
    <StyledContainer>
      <IconButton color="primary" onClick={onClose}>
        <Icon>close</Icon>
      </IconButton>
      <StyledText>{children}</StyledText>
    </StyledContainer>
  </StyledWrapper>
)

export default DialogTitle
