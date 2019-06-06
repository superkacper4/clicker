import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Button from './components/Button';
import Bee from './components/Bee';
import Wallet from './components/Wallet';
import Levels from './components/Levels';
import beeImg1 from './assets/img/bee.png';
import beeImg2 from './assets/img/bee2.png';
import beeImg3 from './assets/img/bee3.png';
import beeImg4 from './assets/img/bee4.png';
import beeImg5 from './assets/img/bee5.png';
import beeImg6 from './assets/img/bee6.png';

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 575.98px) {
    flex-direction: column;
    align-items: center;
  }
`;

// const StyledTimer = styled.p`
//   display: block;
//   background-color: white;
//   width: 100px;
//   height: 50px;
//   position: absolute;
//   font-size: 2rem;
//   top: 40px;
//   left: 40px;
//   text-align: center;
//   line-height: 50px;
//   border-radius: 20px;
// `;

const images = [beeImg1, beeImg2, beeImg3, beeImg4, beeImg5, beeImg6];
let i = 0;
// const level = 'blue';
// let beePrice = 10;

class App extends React.Component {
  state = {
    image: images[i],
    walletValue: 0,
    beePrice: 30,
    boost: false,
    boostFilter: 'none',
    level: '#a06d6d',
    levelDescription: 'Next lv 20.000$',
  };

  addToWallet = () => {
    const { image, boost } = this.state;
    if (boost) {
      if (image === beeImg1) this.setState(prevState => ({ walletValue: prevState.walletValue + 2 }));
      else if (image === beeImg2) this.setState(prevState => ({ walletValue: prevState.walletValue + 4 }));
      else if (image === beeImg3) this.setState(prevState => ({ walletValue: prevState.walletValue + 6 }));
      else if (image === beeImg4) this.setState(prevState => ({ walletValue: prevState.walletValue + 8 }));
      else if (image === beeImg5) this.setState(prevState => ({ walletValue: prevState.walletValue + 10 }));
      else if (image === beeImg6) this.setState(prevState => ({ walletValue: prevState.walletValue + 12 }));
    } else if (!boost) {
      if (image === beeImg1) this.setState(prevState => ({ walletValue: prevState.walletValue + 1 }));
      else if (image === beeImg2) this.setState(prevState => ({ walletValue: prevState.walletValue + 2 }));
      else if (image === beeImg3) this.setState(prevState => ({ walletValue: prevState.walletValue + 3 }));
      else if (image === beeImg4) this.setState(prevState => ({ walletValue: prevState.walletValue + 4 }));
      else if (image === beeImg5) this.setState(prevState => ({ walletValue: prevState.walletValue + 5 }));
      else if (image === beeImg6) this.setState(prevState => ({ walletValue: prevState.walletValue + 6 }));
    }
  };

  changeColor = () => {
    const { walletValue, beePrice } = this.state;
    if (i <= 4 && walletValue >= beePrice) {
      i += 1;
      this.setState(prevState => ({ walletValue: prevState.walletValue - beePrice }));
      this.setState(prevState => ({ beePrice: prevState.beePrice + 100 }));
      this.setState({ image: images[i] });
    }
  };

  boostFn = () => {
    const { walletValue } = this.state;
    if (walletValue >= 20) {
      this.setState(prevState => ({ walletValue: prevState.walletValue - 20 }));
      this.setState({ boost: true, boostFilter: 'contrast(300%)' });
      setTimeout(() => {
        this.setState({ boost: false, boostFilter: 'none' });
      }, 10000);
    }
  };

  nextLvlFn = () => {
    const { walletValue } = this.state;
    if (walletValue >= 20000) {
      this.setState({
        level: '#243747',
        walletValue: 0,
        image: images[0],
        beePrice: 60,
        levelDescription: 'max lv',
      });
      i = 0;
    }
  };

  // timerFn = () => {
  //   const { boostTime } = this.state;
  //   this.setState({ boostTime: 10 });
  //   const intervalId = setInterval(() => {
  //     this.setState(prevState => ({ boostTime: prevState - 1 }));
  //     console.log('dziala');
  //   }, 1000);
  //   setTimeout(() => clearInterval(intervalId), boostTime * 1000);
  // };

  render() {
    const { image, walletValue, beePrice, level, levelDescription, boostFilter } = this.state;
    return (
      <Levels level={level} boostFilter={boostFilter}>
        <GlobalStyle />
        <Wallet>{walletValue}$</Wallet>
        <Bee image={image} onClick={this.addToWallet} />

        <StyledButtonWrapper>
          <Button onClick={this.changeColor}>{i === 5 ? 'max lv' : `Update ${beePrice}$`}</Button>
          <Button onClick={this.boostFn}>Boost 20$</Button>
          <Button onClick={this.nextLvlFn}>{levelDescription}</Button>
        </StyledButtonWrapper>
      </Levels>
    );
  }
}

export default App;
