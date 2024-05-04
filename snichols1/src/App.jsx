/* 
JSX Java script syntax extension - allows you to write HTML in javascript
Templates inside javascript

Single parent element in HTML - so need to put everything into a single main DIV or other element. 
Could even put it into a fragment <> </> Element with no name

Can't call HTML classes class in JSX, must call it className as JS will get confused with a JS class and not a HTML Class'

Attributes are camelCase in JSX. 
*/
import { useEffect, useState } from 'react';
import './App.css';
import React, { Component } from "react";
import WellComeHere from './WellComeHere';
import Support from './Support';
import ListCast from './ListCast';
// This is a comment
/* This is also a comment */

// The following is a class that uses a constructor to return stuff to the html when called
class Welcome extends React.Component { //Component name must be Alphabetized. 
    constructor(props){
        super(props);
    }
    render(){
        return <p>This is a paragraph from a contstructed class {this.props.name} </p>;
    }
}

const Welcomes = (props) => { //This is a hook
    return <p>This is a paragraph from a hook {props.name}</p>
}
/* Hooks into react */

function App() {
    const name = 'Sean' // Can define variables and pass them through into the HTML
    // Can define style for html elements but they need to be passed through as an object like <element style={{color:Black}}>
    return (
        <article>
            <h1>SNichols.co.nz</h1>
            <h2>{name}'s Website</h2>
            <p>This website uses React<br />You need to enable JavaScript to run this app.<br />If you can read this, you have Javascript enabled</p>
            <Welcome name="(javascript class)"/>
            <Welcomes name="not ditto" />
            <WellComeHere name="- this is a hook from WellComeHere.jsx" />
            <img src="/lock.ico"/>
            <br />
            <div className="container" style={{ color: "Orange" }}> 
                <p>This is also a paragraph</p> 
                <button className="outline" onClick={() => alert('Creates a pop-up alert window with the text in this field.')}>Click Me</button>
                <Support />
            </div>
            <ListCast />
        </article> // the backslash is required for the closing tag and single tag elements like <img /> and <br /> in react. 
    );
}

export default App;