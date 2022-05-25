import './App.css';
import Navbar from "./components/Navbar";
import CardsList from "./components/CardsList";
import AddBook from "./components/AddBook";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <AddBook/>
            <CardsList></CardsList>
        </div>
    );
}

export default App;
