import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Paper } from '@mui/material';

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
      <h1>Datos de Sensores</h1>

      <Paper style={{ padding: "20px", marginBottom: "20px" }}>
        <h2>Temperatura</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={items}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="tiempo" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temperatura" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </Paper>

      <Paper style={{ padding: "20px", marginBottom: "20px" }}>
        <h2>Distancia</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={items}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="tiempo" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="distancia" stroke="#82ca9d" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </Paper>

      <Paper style={{ padding: "20px", marginBottom: "20px" }}>
        <h2>Presión</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={items}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="tiempo" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="presion" stroke="#82a9d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </Paper>

      <Paper style={{ padding: "20px", marginBottom: "20px" }}>
        <h2>Ejez</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={items}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="tiempo" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="ejez" stroke="#d884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </Paper>

    </div>
  );
};

export default CarritoList;


