import React from 'react';
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

const images = [beeImg1, beeImg2, beeImg3, beeImg4, beeImg5, beeImg6];
let i = 0;
// const level = 'blue';
// let beePrice = 10;

class App extends React.Component {
  state = {
    image: images[i],
    walletValue: 21000,
    beePrice: 30,
    boost: false,
    level: '#a06d6d',
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
      this.setState({ boost: true });
      setTimeout(() => {
        this.setState({ boost: false });
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
      });
      i = 0;
    }
    // level = false;
  };

  render() {
    const { image, walletValue, beePrice, level } = this.state;
    return (
      <Levels level={level}>
        <GlobalStyle />
        <Wallet>{walletValue}$</Wallet>
        <Bee image={image} onClick={this.addToWallet} />

        <div>
          <Button onClick={this.changeColor}>{i === 5 ? 'max lv' : `Update ${beePrice}$`}</Button>
          <Button onClick={this.boostFn}>Boost 20$</Button>
          <Button onClick={this.nextLvlFn}>Next 20.000$</Button>
        </div>
      </Levels>
    );
  }
}

export default App;
