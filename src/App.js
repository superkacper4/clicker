import React from 'react';
import GlobalStyle from './GlobalStyle';
import Button from './components/Button';
import Bee from './components/Bee';
import Wallet from './components/Wallet';
import beeImg1 from './assets/img/bee.png';
import beeImg2 from './assets/img/bee2.png';
import beeImg3 from './assets/img/bee3.png';
import beeImg4 from './assets/img/bee4.png';
import beeImg5 from './assets/img/bee5.png';
import beeImg6 from './assets/img/bee6.png';

const images = [beeImg1, beeImg2, beeImg3, beeImg4, beeImg5, beeImg6];
let i = 0;
let beePrice = 10;

class App extends React.Component {
  state = {
    image: images[i],
    walletValue: 0,
  };

  addToWallet = () => {
    if (this.state.image === beeImg1) this.setState({ walletValue: this.state.walletValue + 1 });
    else if (this.state.image === beeImg2) this.setState({ walletValue: this.state.walletValue + 2 });
    else if (this.state.image === beeImg3) this.setState({ walletValue: this.state.walletValue + 3 });
    else if (this.state.image === beeImg4) this.setState({ walletValue: this.state.walletValue + 4 });
    else if (this.state.image === beeImg5) this.setState({ walletValue: this.state.walletValue + 5 });
    else if (this.state.image === beeImg6) this.setState({ walletValue: this.state.walletValue + 6 });
  };

  changeColor = () => {
    if (i <= 4 && this.state.walletValue >= beePrice) {
      i++;
      this.setState({ walletValue: this.state.walletValue - beePrice });
      beePrice += 20;

      this.setState({ image: images[i] });
      console.log(i);
    }
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <Wallet>{this.state.walletValue}zł</Wallet>
        <Bee image={this.state.image} onClick={this.addToWallet} />
        <Button onClick={this.changeColor}>Update {beePrice}zł</Button>
        <Button>Boost</Button>
        <Button>Next</Button>
      </div>
    );
  }
}

export default App;
