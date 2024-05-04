/* 
JSX Java script syntax extension - allows you to write HTML in javascript
Templates inside javascript

Single parent element in HTML - so need to put everything into a single main DIV or other element. 
Could even put it into a fragment <> </> Element with no name

Can't call HTML classes class in JSX, must call it className as JS will get confused with a JS class and not a HTML Class'

Attributes are camelCase in JSX. 
*/
import './App.css';
import React, { Component, useEffect, useState } from "react";
import WellComeHere from './WellComeHere';
import Support from './Support';
import HauntedPika from './HauntedPika';
import Modals from './Modals';
// This is a comment
/* This is also a comment */

// The following is a class that uses a constructor to return stuff to the html when called
class Welcome extends React.Component { //Component name must be Alphabetized. 
    constructor(props){
        super(props);
    }
    render(){
        return <p><span>This is a paragraph from a contstructed class {this.props.name}</span></p>;
    }
}

const Welcomes = (props) => { //This is a hook
    return <p><span>This is a paragraph from a hook {props.name}</span></p>
}
/* Hooks into react */

function App() {
    const name = 'Sean' // Can define variables and pass them through into the HTML
    // Can define style for html elements but they need to be passed through as an object like <element style={{color:Black}}>
    let [thingInfo, setThingInfo] = useState(null);
    return (
        <div className="container">
            <article>
                <hgroup>
                    <h1><span style={{ color: "white", backgroundColor: "orange" }} >SNichols.co.nz</span></h1>
                    <h2><span>{name}'s Website</span></h2>
                    <p><span>This website uses <b>React</b><br />You need to enable JavaScript to run this app.<br />If you can read this, you have Javascript enabled</span></p>
                    <Welcome name="(javascript class)"/>
                    <Welcomes name="not ditto" />
                    <WellComeHere name="- this is a hook from WellComeHere.jsx" />
                    <img src="/lock.ico" alt="This is a lock"/>
                    <br />
                    <div className="container" style={{ color: "Orange" }}> 
                        <p><span style={{backgroundColor:"black"} }>This is also a paragraph</span></p> 
                        <button className="outline" onClick={() => alert('Creates a pop-up alert window with the text in this field.')}>Click Me</button>
                        <Support /><br /><br />
                    </div>
                    <div className="thisModalIsHiddenBecauseItWasAnnoying" style={{display:"none",zIndex:"10",position:"absolute", paddingTop:"100px", paddingLeft:"500px"} }>
                        {thingInfo && <Modals member={thingInfo} handleClose={() => { setThingInfo(null) }} />}
                    </div>
                    <HauntedPika onChoice={(info) => { setThingInfo(info) }} /> 
                </hgroup>
            </article>
            {thingInfo && <div className="thingInfo" style={{ display:"block",color:"Yellow"}}>
                <h3>{thingInfo.name}</h3> <br />
                <p>This is {thingInfo.slug}.png</p>
            </div>
            }
        </div> // the backslash is required for the closing tag and single tag elements like <img /> and <br /> in react. 
    );// Arrow functions () = > return things
}// && means if exists do this

export default App;