import React, { Component } from 'react'
import { Switch, Route, withRouter, RouteComponentProps } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from '../pages/Home';
import About from '../pages/About';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';

interface IProps {
    setOffSet: Function;
    updatePage: Function;
    page: Number
}

//Directory of routes
const routes = ['/','/experience','/projects','/about'];

export class Main extends Component<RouteComponentProps&IProps> {

    direction:string = '';
    
    componentDidUpdate(prevProps:RouteComponentProps&IProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.props.setOffSet();
            this.props.updatePage(routes.indexOf(this.props.location.pathname));
            
        }
    }

    render() {  
        if(routes.indexOf(this.props.location.pathname) !== this.props.page || this.direction.length === 0) {
            this.direction = routes.indexOf(this.props.location.pathname) > this.props.page ? 'left' : 'right';    
        }

        return (
            <main>
                <TransitionGroup className="transition-group">
                    <CSSTransition
                        key={this.props.location.key}
                        timeout={{ enter: 400, exit: 400 }}
                        classNames={this.direction}
                    >
                        <Switch location={this.props.location}>
                            <Route exact path="/" component={Home}/>
                        
                            <Route path="/experience" component={Experience}/>
                            
                            <Route path="/projects" component={Projects}/>

                            <Route path="/about" component={About}/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </main>
        )
    }
}

export default withRouter(Main);