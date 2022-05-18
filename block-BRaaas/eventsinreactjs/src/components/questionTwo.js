// 2. Create another button with text `How can I help you?`
// - Handle a event of type `click`
// - When user clicks `alert` three different messages as given below
//   - To learn React use https://reactjs.org
//   - React and ReactDOM works together
//   - Babel helps in writing JSX

function Questiontwo() {
  return (
    <>
      <h2> This is question two </h2>
      <button onClick={handleEvent}> How can I help you?</button>
    </>
  );
}

function handleEvent(event) {
  alert(`
       To learn React use https://reactjs.org
   React and ReactDOM works together
   Babel helps in writing JSX
    `);
}
export default Questiontwo;
