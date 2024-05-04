import { useState, useEffect } from 'react';

export default () => {
    const [cast, setCast] = useState([]); /* Setting a constant for holding data. useState will generate the state */

    async function fetchStuff(){
        const response = await fetch('cast.json')
        setCast(await response.json());
    }

    useEffect(() => { fetchStuff(); });

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))',
            gap: '1rem',
            marginBottom: '1rem'
        }}>
            {
                cast.map(sean => (
                    <img src={`images/${sean.slug}.png`} alt={sean.name} /> /* Have to use the ridiculous ` ` things to close any text that has ${} in it */
                ))
            }
        </div>
    )
}