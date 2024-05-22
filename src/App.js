import Logo from './components/Logo';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">    
        <Logo /> 
        <ul className='App-header'>
        <li className='opcao'><p>CATEGORIAS</p></li>
          <li className='opcao'><p>MINHA ESTANTE</p></li>
          <li className='opcao'><p>FAVORITOS</p></li>
        </ul>

      </header>
    </div>
  );
}

export default App;
