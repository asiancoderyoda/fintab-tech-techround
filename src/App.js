import './App.css';
import "./components/Active";
import Active from './components/Active';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <div className="active-wrapper">
        <Active />
        <Routes />
      </div>
    </div>
  );
}

export default App;
