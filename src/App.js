import logo from './logo.svg';
import './App.css';
import CarritoList from './components/CarritoList'
import { dividerClasses } from '@mui/material';

function App() {
  return (
    <div>
      <h1>Mi app de Carrito en Cloud</h1>
      <CarritoList/>
    </div>
  );
}

export default App;
