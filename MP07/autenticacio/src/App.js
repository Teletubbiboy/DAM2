import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <h1 className="text-center">Aplicació amb Firebase Authentication</h1>
      <Signup />
    </div>
  );
}

export default App;
