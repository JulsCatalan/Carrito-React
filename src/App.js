import logo from './logo.svg';
import './App.css';
import CarritoList from './components/CarritoList'
import { dividerClasses } from '@mui/material';

function App() {
  return (
    <div>
      <h1>Carrito en la Nube</h1>
      <CarritoList/>
      <h2>Miembros del Equipo</h2>
      <div className='members'>
        <h3>Julián Catalán Alcalá</h3>
        <h3>Jossue Patricio Espinoza Tobar</h3>
        <h3>Karina Vergara Aguilar</h3>
      </div>
    </div>
  );
}

export default App;
