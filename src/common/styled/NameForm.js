import styled from '@emotion/styled';

const StyledNameForm = styled.div`
  display: grid;
  gap: 30px;
  padding: 10px;

  > .field {
    align-items: center;
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr auto;
  }
`;

export default StyledNameForm;
