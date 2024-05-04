const WellComeHere = (props) => { //This is a hook
    return <p>This is a paragraph from a hook {props.name}</p>
}
/* Hooks into react */
export default WellComeHere;

/* OR we could have done this without declaring a constant

export default (props) =>{
return <html stuff goes here>
}

*/