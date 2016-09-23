var React = require('react');
var ReactDOM = require('react-dom');

let viewNum = 0;
let inputNumData = 0;


const setNameData = (event ) => {
  inputNumData = event.target.value;
  render();
};

const addData = () => {
   viewNum = parseInt(inputNumData) + parseInt(viewNum);
  render();
};

const subtractData = () => {
   viewNum = parseInt(viewNum) - parseInt(inputNumData);
  render();
};

const multiplicatData = () => {
   viewNum = parseInt(viewNum) * parseInt(inputNumData);
  render();
};

const divData = () => {
   viewNum = parseInt(viewNum) / parseInt(inputNumData);
  render();
};

const App = () => (
  <div>
    <MyForm />
    <div>合計：{viewNum}</div>
  </div>
)

const MyForm = () => (
  <div>
    <input type="number" onChange={setNameData} />
    <AddButton />
    <SubtractDataButton />
    <MultiplicatButton />
    <DivButton />
  </div>
);

const AddButton = () => (
  <span>
    <button onClick={addData}>足し算</button>
  </span>
);

const SubtractDataButton = () => (
  <span>
    <button onClick={subtractData}>引き算</button>
  </span>
);

const MultiplicatButton = () => (
  <span>
    <button onClick={multiplicatData}>掛け算</button>
  </span>
);

const DivButton = () => (
  <span>
    <button onClick={divData}>割り算</button>
  </span>
);



const render = () => ReactDOM.render(<App />, document.getElementById('app'));
setTimeout(render, 0);
