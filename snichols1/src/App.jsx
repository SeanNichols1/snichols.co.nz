/* 
JSX Java script syntax extension - allows you to write HTML in javascript
Templates inside javascript

Single parent element in HTML - so need to put everything into a single main DIV or other element. 
Could even put it into a fragment <> </> Element with no name

Can't call HTML classes class in JSX, must call it className as JS will get confused with a JS class and not a HTML Class'

Attributes are camelCase in JSX. 
*/
import './App.scss'; //Renamed the css file to .scss
import React, { Component, useEffect, useState, useRef } from "react";
import WellComeHere from './WellComeHere';
import Support from './Support';
import HauntedPika from './HauntedPika';
import Modals from './Modals';
import Nav from './Nav'
// This is a comment
/* This is also a comment */

// The following is a class that uses a constructor to return stuff to the html when called
class Welcome extends Component { //Component name must be Alphabetized.      This could also be class Welcome extends react.Component{
    constructor(props){
        super(props);
        this.state = { text: "(This text is from a constructor in the Welcome class)" };
    }
    render(){
        return <p><span>{this.props.name}< br/> This is a paragraph rendered from the Welcome class <br/>{this.state.text}</span></p>;
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
    const [member, setCast] = useState([]); /* Setting a constant for holding data. useState will generate the state */

    async function fetchStuff() {        // Async function expects something to be returned. 
        const response = await fetch('cast.json') // Can only use Await in an async function. Pauses function until promosed thing is resolved
        setCast(await response.json());
    }

    const initialized = useRef(false);  //Determines if initialized

    useEffect(() => {
        if (!initialized.current) { //If intialised is currently false fetches cast.json file. 
            initialized.current = true //Sets the constant to true to avoid fetching the data again. 
            fetchStuff();
        }
    }, [])

    return (
        <div className="container">
            <article>
                <hgroup>
                    <h1><span style={{ color: "white", backgroundColor: "orange" }} >SNichols.co.nz</span></h1>
                    <Nav />
                    <h2><span>{name}'s Website</span></h2>
                    <p><span>This website uses <b>React</b><br />You need to enable JavaScript to run this app.<br />If you can read this, you have Javascript enabled</span></p>
                    <Welcome name="I'm a 'props'"/>
                    <Welcomes name="not ditto" />
                    <WellComeHere name="- this is a hook from WellComeHere.jsx" />
                    <img style={{ height: "184px", width: "184px" }} src="/lock.ico" alt="This is a lock" />
                    <img style={{ height: "184px", width: "184px" }} src="https://sni53.github.io/sni53/eso1907a.bmp" alt="This is large" />
                    <img style={{ height: "184px", width: "184px" }} src="/sean.ico" alt="This is my logo" />
                    <br />
                    <div className="notContainer" style={{ color: "Orange"}}> 
                        <p><span style={{backgroundColor:"black"} }>This is also a paragraph</span></p> 
                        <button className="outline" onClick={() => alert('Why did you do this? :(')}>Please don't click on me :(</button>
                        <Support thinginfo={thingInfo} />
                    </div>

                    <HauntedPika onChoice={(info) => { setThingInfo(info) }} /> 
                    <div className="thisModalWasHiddenBecauseItWasAnnoying" style={{ zIndex: "10", position: "absolute", paddingTop: "100px", paddingLeft: "690px" }}>
                        {thingInfo && <Modals member={thingInfo} handleChange={(info) => { setThingInfo(member[info]) }} handleClose={() => { setThingInfo(null) }} />}
                    </div>
                </hgroup>
            </article>
            {thingInfo && <div className="thingInfo" style={{ display:"block",color:"Yellow"}}>
                <h3>{thingInfo.name}</h3>
                <p>This is {thingInfo.slug}.png</p>
            </div>
            }
        </div> // the backslash is required for the closing tag and single tag elements like <img /> and <br /> in react. 
    );// Arrow functions () = > return things
}// && means if exists do this

export default App;
