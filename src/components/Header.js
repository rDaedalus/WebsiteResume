import logo from '../logo.svg';
import React from "react";


const Header = (props) => (

    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                </a> */}
        <h1>{props.title}</h1>
        {props.myFunc(2, 5)}
    </header>

);
export default Header