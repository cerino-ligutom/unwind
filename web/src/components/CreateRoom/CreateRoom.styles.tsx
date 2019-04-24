import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 1rem;

  background: #26262b;
`;

export const CreateRoomButton = styled.button`
  border: 1px solid white;
  border-radius: 32px;
  padding: 0.5rem 0;

  color: white;
  background: #4A4A53;

  :focus {
    outline: none;
  }
`;