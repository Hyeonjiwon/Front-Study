import logo from './logo.svg';
import './App.css';
import Test from './Test'

function App() {
  return (
    <div>
      App
      <Test myParam="First animal" animal="dog"/>
      <Test myParam="Second animal" animal="cat"/>
    </div>
  );
}

export default App;
