import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Experience from './components/pages/Experience';
import Projects from './components/pages/Projects';
import Main from './components/layout/Main';


{/*Generic interfaces for props and state*/}
interface IProps {
}

interface IState {
  dark:Boolean;
}

class App extends Component<IProps,IState> {
  constructor(props:IProps) {
    super(props);

    this.state = {
      dark: false
    };

    this.toggleDark = this.toggleDark.bind(this);
    this.applyDark = this.applyDark.bind(this);
  }

  toggleDark = () => {
    this.setState(state => (
      {
        dark: !state.dark
      }), this.applyDark);
  }

  applyDark = () => {
    if(this.state.dark) {
      document.querySelector('body')?.classList.add('dark');
    } else {
      document.querySelector('body')?.classList.remove('dark');
    }
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
            <Main/>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
