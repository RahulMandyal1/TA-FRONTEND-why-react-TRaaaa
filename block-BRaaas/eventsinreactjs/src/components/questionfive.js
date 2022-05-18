//  Question five  :  Map over the data and create button for each
// - Each button should have different text based on the value
// - When user clicks on the button display the name of fruit in `alert`
// - Don't forget to use `key` when you are using `map` on array

let fruits = [
    { id: 'apple', value: '🍎 apple' },
    { id: 'orange', value: '🍊 orange' },
    { id: 'grape', value: '🍇 grape' },
    { id: 'pear', value: '🍐 pear' },
]

// function to handle click event on these buttons 

function handleEvent(event){
    alert(event.target.innerText);
}

function Questionfive(){
    return <>
        <h2>
             Question five 
        </h2>
        { fruits.map(data=> <CreateButton key= {data.id} info={data}/>)}
    </>
}
function CreateButton(props){
    let buttondata= props.info;
    return <button onClick={handleEvent}>{buttondata.value}</button>
}

export default Questionfive;