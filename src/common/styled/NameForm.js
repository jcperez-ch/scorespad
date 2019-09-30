import styled from 'styled-components'

const StyledNameForm = styled.div`
  display: grid;
  gap: 10px;
  padding: 10px;

  > .field {
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr auto;
  }
  > .buttons {
    display: grid;
    gap: 10px;
    grid-auto-flow: column;
    justify-content: start;
  }
`

export default StyledNameForm
