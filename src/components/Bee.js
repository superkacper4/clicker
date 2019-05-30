import styled from 'styled-components';

const Bee = styled.button`
  height: 372px;
  width: 416px;
  background-image: url(${({ image }) => image});
  background-color: transparent;
  border: none;
  background-position: 50%;

  &:active {
    transform: scale(1.05);
  }
`;

export default Bee;
