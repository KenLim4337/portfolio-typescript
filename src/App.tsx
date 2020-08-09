import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import './App.css';

import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';
import Background from './components/layout/Background';

interface IState {
  dark:Boolean;
}

class App extends Component<any,IState> {
  constructor(props:any) {
    super(props);

    this.state = {
      dark: false
    };
  }

  toggleDark = ():void => {
    this.setState(state => (
      {
        dark: !state.dark
      }), this.applyDark);
  }

  applyDark = ():void => {
    if(this.state.dark) {
      document.querySelector('body')?.classList.add('dark');
    } else {
      document.querySelector('body')?.classList.remove('dark');
    }
    this.setOffset();
  }

  setOffset = ():void => {
    //Dark mode offset
    let darkOffset:number = this.state.dark? -100 : 0;
    
    //Page offset
    darkOffset += ((1 + Array.prototype.indexOf.call(document.querySelectorAll('header .links a'),document.querySelector('header .links a.active'))) * 30);

    document.querySelectorAll('body .background svg').forEach((el) => {
      el.setAttribute('style','stroke-dashoffset:'+darkOffset);
    });
  }

  componentDidMount() {
    this.applyDark();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header toggleDark={this.toggleDark} darkState={this.state.dark}/>
            <Main setOffSet={this.setOffset}/>
            <Footer />
            <Background />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
