import styled from 'styled-components';

const Wallet = styled.p`
  display: block;
  background-color: white;
  width: 100px;
  height: 50px;
  position: absolute;
  font-size: 2rem;
  top: 40px;
  right: 40px;
  text-align: center;
  line-height: 50px;
  border-radius: 20px;

  @media (max-width: 575.98px) {
    top: 10px;
    right: 10px;
  }
`;

export default Wallet;
