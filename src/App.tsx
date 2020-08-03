import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Main from './components/pages/Main';
import About from './components/pages/About';
import Experience from './components/pages/Experience';
import Projects from './components/pages/Projects';


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
  }

  toggleDark = () => {
    this.setState(state => (
      {
        dark: !state.dark
      }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header toggleDark={this.toggleDark}/>
              <main>
                <Route exact path="/" component={Main}/>
              
                <Route path="/about" component={About}/>
                
                <Route path="/experience" component={Experience}/>
                
                <Route path="/projects" component={Projects}/>
              </main>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
