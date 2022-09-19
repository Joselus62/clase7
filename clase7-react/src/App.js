import './App.css';
import Button from './components/Button';
import img from './components/img/LesLuthiers.jpg'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="App-img" alt="img"/>
        <p>
        <Button/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Homenaje a Les Luthiers
        </a>
      </header>
    </div>
  );
}

export default App;
