import './App.css';

function App() {
  
  const [nom, setNom] = React.useState("");

    function manejarCanvi(e) {
        setNom(e.target.value);
    }

    function manejarEnviament(e) {
        e.preventDefault();
        alert(`Nom introduït: ${nom}`);
    }

    return (
        <form onSubmit={manejarEnviament}>
            <input type="text" value={nom} onChange={manejarCanvi} />
            <button type="submit">Envia</button>
        </form>
    );
}


export default App;
