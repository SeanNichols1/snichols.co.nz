import { useState, useEffect, useRef } from 'react';
import './HauntedPika.css';

const Haunted = ({onChoice}) => {
    const [cast, setCast] = useState([]); /* Setting a constant for holding data. useState will generate the state */

    async function fetchStuff(){        // Async function expects something to be returned. 
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
        <span>
            <nav className="columbus" style={{ backdropFilter: "blur(100px)",textAlign:'left',width:"device-width",margin:"0 auto" }}>
                <ul>
                    <li>
                        <details role="list">
                            <summary role="listitem" style={{fontSize:"20px", color:"Yellow"}} >Menu</summary>
                            <ul role="listbox" style={{ backdropFilter:"blur(100px)" }}>
                                {
                                    cast.map(sean => (
                                        <li key={sean.id}>
                                            <a onClick={() => { onChoice(sean) }} data-tooltip={sean.name}><u>This is {sean.name} {sean.bio}</u></a>
                                        </li>
                                    )
                                    )
                                }
                            </ul>
                        </details>
                    </li>
                </ul>
                <ul style={{ position: 'absolute', left: "-20px" }}>
                    <li>
                        <a href="./images/hauntedPikachu.png" target="_blank" ><img style={{ height: '50px'} } src="./favicon.ico" alt="React"/></a>
                    </li>
                </ul>
                <ul style={{ position: 'absolute', right: "20px" }}>
                    <li>
                        <a href="./images/cursedPikachu.png" target="_blank" ><img style={{ height: '50px' }} src="./favicon.ico" alt="React" /></a>
                    </li>
                </ul>
            </nav>
            <div style={{
            display: "grid",
            gridTemplateColumns: 'repeat(auto-fit, minmax(0px, 1fr))',
            gap: '1rem',
            marginBottom: '1rem'
        }}>
            {
                cast.map(sean => ( /* onClick means when clicked, it sends the data back through export on line 3 to App.jsx and show the details*/
                    <a href="#thisModalWasHiddenBecauseItWasAnnoying" onClick={() => { onChoice(sean) }} key={sean.slug} data-toolip={sean.name}> 
                    <img src={`images/${sean.slug}.png`} alt={sean.name} /> 
                    </a>/* Have to use the ridiculous ` ` things to close any text that has ${} in it */
                ))
            }
        </div>
        </span>
    )
} 
export default Haunted; // Exports the return() html back to app.jsx for the DOM