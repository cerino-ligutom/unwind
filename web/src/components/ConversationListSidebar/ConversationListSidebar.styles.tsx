import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 90vh;
  width: 300px;

  position: fixed;
  bottom: 0;
  left: 0;

  padding: 1rem;

  background: red;
`;

export const CreateRoomButton = styled.button`
  border: 1px solid white;
  border-radius: 32px;
  padding: 0.5rem 0;

  color: white;
  background: blue;
`;