import React  , {Component} from "react";
class Questionfour extends Component(){
    handleEvent(event){
        let name = event.target.innerText;
        alert(`Hello ${name}`);
    }
    render(){
        return <>
        <h2> this is the example of question four with the class Component</h2>
        <button onClick={this.handleEvent}>Arya</button>
        <button onClick={this.handleEvent}>John</button>
        <button onClick={this.handleEvent}>Bran</button>
        </>
    }
}
export default Questionfour;