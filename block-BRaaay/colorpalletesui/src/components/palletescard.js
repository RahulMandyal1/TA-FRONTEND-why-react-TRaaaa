import data from "../data";
let stringifyData = JSON.stringify(data);
let parsedData = JSON.parse(stringifyData);
console.log(parsedData);

function PalleteCard(props) {
  let { name, colors } = props;
  return (
    <div className="container">
      <div className="colornamecontainer">{name}</div>
      <ul className="hexcode-container">
        {colors.map((hexcode, i) => (
          <div>
            <li
              style={{ backgroundColor: hexcode }}
              className="hexcode-background"
            ></li>
            <div className="flex-row">
              <span className="bold">{i === 0 ? 50 : i * 100}</span>
              <span>{hexcode}</span>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

function Cards() {
  let result = [];
  for (let key in parsedData) {
    result.push(<PalleteCard name={key} colors={parsedData[key]} />);
  }
  return result;
}

export default Cards;
