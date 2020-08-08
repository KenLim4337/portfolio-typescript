import React from 'react'
import { Switch, Route, withRouter, RouteComponentProps } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from '../pages/Home';
import About from '../pages/About';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';


/*Convert to component*/

function Main({ location }: RouteComponentProps) {

    return (
        <main>
            <TransitionGroup className="transition-group">
                <CSSTransition
                    key={location.key}
                    timeout={{ enter: 300, exit: 300 }}
                    classNames="fade"
                >
                    <Switch location={location}>
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

export default withRouter(Main);