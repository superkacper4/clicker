import styled from 'styled-components';

const Button = styled.button`
  height: 100px;
  width: 150px;
  background-color: #434;
  font-size: 1.6rem;
  border: none;
  border-radius: 20px;
  color: white;
  transition: 0.25s;
  margin: 10px;

  &:hover {
    background-color: #555;
  }
`;

export default Button;
