import React, { useState, useEffect } from 'react';

const CarritoList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Realiza la solicitud GET a tu función Lambda
    fetch('https://h74jmqypjb.execute-api.us-east-2.amazonaws.com/etapaConexionCarrito/lambda_handler', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Lista de Elementos del Carrito</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            Temperatura: {item.temperatura}, Distancia: {item.distancia}, Presión: {item.presion}, Ejez: {item.ejez}, Timestamp: {item.tiempo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarritoList;

