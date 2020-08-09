import React, { Component } from 'react'
import { Switch, Route, withRouter, RouteComponentProps } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from '../pages/Home';
import About from '../pages/About';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';

interface IProps {
    setOffSet: Function;
}

/*Convert to component*/

export class Main extends Component<RouteComponentProps&IProps> {
    componentDidUpdate(prevProps:RouteComponentProps&IProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.props.setOffSet();
        }
    }

    render() {   
        return (
            <main>
                <TransitionGroup className="transition-group">
                    <CSSTransition
                    key={this.props.location.key}
                    timeout={{ enter: 600, exit: 400 }}
                    classNames={'fade'}
                    >
                        <Switch location={this.props.location}>
                            <Route exact path="/" component={Home}/>
                        
                            <Route path="/about" component={About}/>
                            
                            <Route path="/experience" component={Experience}/>
                            
                            <Route path="/projects" component={Projects}/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </main>
        )
    }
}

export default withRouter(Main);