// 1  Create a button with text `Click Me`
// - Handle a event of type `click` on the button
// - When user click on the button `alert` a message saying `Hello React Event`

function Questionone(){
    return <>
        <h2> This is  question one </h2>
        <button onClick={handleEvent}> Click Me</button>
    </>
}

function handleEvent(event){
    alert("Hello React Event");
}
export default Questionone;