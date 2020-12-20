import React from 'react';
import './App.css';

import { Body } from './components/Body';
import { Counter } from './components/Counter';
import { Counters } from './components/Counters';
import { Head } from './components/Head';
import { ImgSlider } from './components/ImgSlider';

class App extends React.Component {

  state = {
    visHead: false,
    visBody: false,
    visImgSlider: false,
    visCounter: false
  };



  render() {
    return (
      <div className="App">
        <button onClick={() => {
          this.setState({ visHead: !this.state.visHead })
        }}>Toggle Head</button>
        <button onClick={() => {
          this.setState({ visBody: !this.state.visBody })
        }}>Toggle Body</button>
        <button onClick={() => {
          this.setState({ visImgSlider: !this.state.visImgSlider })
        }}>Toggle ImgSlider</button>
        <button onClick={() => {
          this.setState({ visCounter: !this.state.visCounter })
        }}>Toggle Counter</button>

        <header className="App-header">
          {this.state.visHead ? <Head /> : null}
          {this.state.visBody ? <Body /> : null}
          {this.state.visImgSlider ? <ImgSlider /> : null}
          {
            <div className={this.state.visCounter ? 'visible' : 'hidden'}>
              <Counters />
            </div>
          }
        </header>

      </div>
    );
  }
}

export default App;
