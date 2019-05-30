import styled from 'styled-components';

const Button = styled.button`
  height: 50px;
  width: 150px;
  background-color: #434;
  border: none;
  /* border-radius: 20px; */
  color: white;
  transition: 0.5s;

  &:hover {
    background-color: #555;
  }
`;

export default Button;
