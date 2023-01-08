import "./App.css";

type Props = {
  value: any;
  onIncrement: () => void;
  onDexrement: () => void;
};

function App({ value, onIncrement, onDexrement }: Props) {
  return (
    <div className="App">
      {/*Clicked: {value} times*/}
      <button onClick={onIncrement}>+</button>
      <button onClick={onDexrement}>-</button>
    </div>
  );
}

export default App;
