import styled from 'styled-components';

const Bee = styled.button`
  height: 356px;
  width: 400px;
  background-image: url(${({ image }) => image});
  background-color: transparent;
  border: none;
  background-position: 50%;

  &:active {
    transform: scale(1.05);
  }
`;

export default Bee;
