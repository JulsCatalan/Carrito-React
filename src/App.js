import logo from './logo.svg';
import './App.css';
import CarritoList from './components/CarritoList'
import { dividerClasses } from '@mui/material';

function App() {
  return (
    <div>
      <h1>Carrito en la Nube</h1>
      <CarritoList/>
    </div>
  );
}

export default App;
