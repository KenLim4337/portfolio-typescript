import React, {Component} from 'react'
import { Link } from 'react-router-dom'

interface IProps {
    darkToggle: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export class Header extends Component<IProps>  {
    constructor(props:IProps) {
        super(props);
    }

    render() {
        return (
            <header>
                <div className="logo">
                    <Link to="/">
                        <div className="logoInner">
                            {/*
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="283.46px" height="283.46px" viewBox="0 0 283.46 283.46">
                            <polygon style="fill:#1F1E53;" points="11.133,137.994 11.133,42.64 8.165,23.658 1.48,4.237 1.48,192.336 1.48,192.698 
                                1.48,241.38 4.449,260.72 11.133,280.511 11.133,192.698 11.133,192.336 11.133,145.465 135.803,279.223 135.803,4.237 "/>
                            <polygon points="275.296,21.406 272.327,40.75 272.327,137.925 147.668,1.62 147.668,281.845 268.841,149.348 268.841,149.348 
                                281.98,138.159 281.98,1.615 "/>
                            <polygon style="fill:#28459D;" points="109.628,214.646 11.133,145.536 135.803,281.845 135.803,4.237 73.468,71.116 
                                126.333,30.333 "/>
                            <polygon style="fill:#939393;" points="173.287,214.646 272.327,146.379 147.668,281.845 147.668,1.62 "/>
                        </svg>
                            */}
                        </div>
                    </Link>
                </div>

                <div className="links">
                    <Link to="/">Home</Link> | <Link to="/experience">Experience</Link> | <Link to="/projects">Projects</Link> | <Link to="/about">About</Link>
                </div>

                <button className="modeToggle" onClick={this.props.darkToggle}>
                    <div className="toggleInner"></div>
                </button>
            </header>
        )
    }
}

const iconStyle = {
    light: {

    }, 
    dark: {

    }
}

export default Header