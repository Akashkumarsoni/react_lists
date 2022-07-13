import logo from './logo.svg';
import './App.css';

function App() {
  var l = ['Mango',"Apple","Graphes",'Banana',"Orange"];
  return (
    <div className="App">
      <header className="App-header">
        <h2>List of fruits</h2>
        <ul>
        {l.map(i => <Listing lis={i} />)}
        </ul>
      </header>
    </div>
  );
}

export const Listing = (props) => {
  return (
    <li>{props.lis}</li>
  )
}

export default App;
