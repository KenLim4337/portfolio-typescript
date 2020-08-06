import React, {Component} from 'react'
import { Switch,NavLink,Link } from 'react-router-dom'

interface IProps {
    toggleDark: (event: React.MouseEvent<HTMLButtonElement>) => void,
    darkState: Boolean
}

export class Header extends Component<IProps>  {
    constructor(props:IProps) {
        super(props);
    }

    render() {
        return (
            <header>
                <div className="headWrap">
                    <div className="logo">
                        <Link to="/">
                            <div className="logoInner">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 283.46 283.46">
                                    <polygon style={iconStyle[this.props.darkState?'dark':'light'][1]} points="11.133,137.994 11.133,42.64 8.165,23.658 1.48,4.237 1.48,192.336 1.48,192.698 
                                        1.48,241.38 4.449,260.72 11.133,280.511 11.133,192.698 11.133,192.336 11.133,145.465 135.803,279.223 135.803,4.237 "/>
                                    <polygon style={iconStyle[this.props.darkState?'dark':'light'][2]} points="275.296,21.406 272.327,40.75 272.327,137.925 147.668,1.62 147.668,281.845 268.841,149.348 268.841,149.348 
                                        281.98,138.159 281.98,1.615 "/>
                                    <polygon style={iconStyle[this.props.darkState?'dark':'light'][3]} points="109.628,214.646 11.133,145.536 135.803,281.845 135.803,4.237 73.468,71.116 
                                        126.333,30.333 "/>
                                    <polygon style={iconStyle[this.props.darkState?'dark':'light'][4]} points="173.287,214.646 272.327,146.379 147.668,281.845 147.668,1.62 "/>
                                </svg>
                            </div>
                        </Link>
                    </div>

                    <div className="links">
                        <NavLink exact={true} activeClassName='active' to='/'>Home</NavLink>
                        <NavLink activeClassName='active' to="/experience">Experience</NavLink>
                        <NavLink activeClassName='active' to="/projects">Projects</NavLink>
                        <NavLink activeClassName='active' to="/about">About</NavLink>
                    </div>

                    <div className="socLinks">
                        {/*LinkedIn*/}
                        <a target="_blank" href="https://www.linkedin.com/in/ken-yoong-lim-9a2612101/">
                            <i className="linkedIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </i>
                        </a>
                        {/*Github*/}
                        <a target="_blank" href="https://github.com/KenLim4337/">
                            <i className="gitIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </i>
                        </a>
                        {/*Email*/}
                        <a target="_blank" href="mailto:lkyoong428@gmail.com">
                            <i className="mailIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg>
                            </i>
                        </a>
                    </div>

                    <div className={(this.props.darkState?'dark':'light') + " darkWrap"}>
                        <i className="darkIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z"/></svg>
                        </i>

                        <button className="modeToggle" onClick={this.props.toggleDark}>
                            <div className="toggleInner"><div className="toggleCircle"></div></div>
                        </button>

                        <i className="lightIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 10.999c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm8.001.001c.958.293 1.707 1.042 2 2.001.291-.959 1.042-1.709 1.999-2.001-.957-.292-1.707-1.042-2-2-.293.958-1.042 1.708-1.999 2zm-1-9c-.437 1.437-1.563 2.562-2.998 3.001 1.438.44 2.561 1.564 3.001 3.002.437-1.438 1.563-2.563 2.996-3.002-1.433-.437-2.559-1.564-2.999-3.001zm-7.001 22c-6.617 0-12-5.383-12-12s5.383-12 12-12c1.894 0 3.63.497 5.37 1.179-2.948.504-9.37 3.266-9.37 10.821 0 7.454 5.917 10.208 9.37 10.821-1.5.846-3.476 1.179-5.37 1.179z"/></svg>
                        </i>
                    </div>
                </div>
            </header>
        )
    }
}

const iconStyle = {
    'light': {
        1: {fill:"#1F1E53"},
        2: {fill:"#000000"},
        3: {fill:"#28459D"},
        4: {fill:"#939393"},
    },
    'dark': {
        1: {fill:"#7294C1", opacity:'0.87'},
        2: {fill:"#939393", opacity:'0.87'},
        3: {fill:"#28459D", opacity:'0.87'},
        4: {fill:"#333333", opacity:'0.87'},
    }
}


const backgroundStyle = {
    'light': {stroke:'rgba(255,255,255,0.87)'},
    'dark': {stroke:'rgba(255, 183, 197, 0.87)'},
}

export default Header