import { useState, useEffect } from 'react';

const Haunted = ({onChoice}) => {
    const [cast, setCast] = useState([]); /* Setting a constant for holding data. useState will generate the state */

    async function fetchStuff(){
        const response = await fetch('cast.json')
        setCast(await response.json());
    }

    useEffect(() => { fetchStuff(); });

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: 'repeat(auto-fit, minmax(0px, 1fr))',
            gap: '1rem',
            marginBottom: '1rem'
        }}>
            {
                cast.map(sean => ( /* onClick means when clicked, it sends the data back through export on line 3 to App.jsx and show the details*/
                    <a href="javascript:void(0);" onClick={() => { onChoice(sean) }} key={sean.slug} data-toolip={sean.name}> 
                    <img src={`images/${sean.slug}.png`} alt={sean.name} /> 
                    </a>/* Have to use the ridiculous ` ` things to close any text that has ${} in it */
                ))
            }
        </div>
    )
}
export default Haunted;