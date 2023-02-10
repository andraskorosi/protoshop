import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 900px;
  margin: 30px auto;
  gap: 20px;

  @media screen and (max-width: 760px) {
    flex-direction: column;
    align-items: center;
  }
`