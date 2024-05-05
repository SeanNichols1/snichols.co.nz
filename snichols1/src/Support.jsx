import { useState, useEffect } from 'react';

const useSupportTeam = (thingInfo) => { //This must be called useXXXXXXXXX
    const [count, setCount] = useState(0) //square brackets are an array
    // The following is messy
    /*return (
        <button className="outline" onClick={() => setCount(count + 1)}>
        
            {(() => {
                if (count === 0) {
                    return `Number of times supported: ${count}`; //Must use backticks which is next to the number 1 on the keyboard ```````````````
                }
                else {
                    return `Thanks! - Number:${count}`
                }
            })()
            }*/
    useEffect(() => { //useEffect tells react to make changes to the dom if x occurs - if count changes
        //if (count >= 0) {document.title = `You have clicked ${count} times`}})
        count && (document.title = `You have clicked ${count} times`)
        //console.log(thingInfo)
    })

    // Use a turnary statement instead to keep it shorter
    return (
        <button className="outline" onClick={() => setCount(count + 1)}>
            {count === 0 ? `Number of times supported: ${count}` : `Thanks! - Number of times supported: ${count}`}
        </button>
    )
}

export default useSupportTeam;