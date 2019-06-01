import styled from 'styled-components';

const Bee = styled.button`
  height: 356px;
  width: 400px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  background-position: 50%;
  transition: 0.2s;

  &:active {
    transform: scale(1.05);
  }

  @media (max-width: 575.98px) {
    height: 201px;
    width: 200px;
  }
`;

export default Bee;
