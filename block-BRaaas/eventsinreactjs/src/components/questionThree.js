// 3.Create three button with text `Arya`, `John` and `Bran`
// - When clicked on any button alert message with the name like `Hello Arya|John|Bran`
// - Don't write three different click handler function
// - One function should be able to handle this.

function Questionthree() {
    return (
      <>
        <h2> This is question three </h2>
        <button onClick={handleEvent}>Arya</button>
        <button onClick={handleEvent}>John</button>
        <button onClick={handleEvent}>Bran</button>
      </>
    );
  }
  function handleEvent(event) {
    let name = event.target.innerText;
    alert(`Hello ${name}`);
  }
  export default Questionthree;
  