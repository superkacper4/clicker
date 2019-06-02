import styled from 'styled-components';

const Levels = styled.div`
  background-color: ${props => props.level || '#000'};
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
  filter: ${props => props.boostFilter || 'none'};
`;

export default Levels;
