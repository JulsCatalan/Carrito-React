import React, { useState, useEffect } from 'react';
  import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
  import { Paper } from '@mui/material';
  
  const CarritoList = () => {
    const [items, setItems] = useState([]);
  
    const fetchData = () => {
      fetch('https://h74jmqypjb.execute-api.us-east-2.amazonaws.com/etapaConexionCarrito/lambda_handler', {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((data) => setItems(data))
        .catch((error) => console.error('Error fetching data:', error));
    };
  
    useEffect(() => {
      fetchData(); // Llama inmediatamente al cargar el componente
      const interval = setInterval(fetchData, 5000); // Actualiza cada 5 segundos
  
      return () => clearInterval(interval); // Limpieza al desmontar
    }, []);
  
  
  return (
    <div>
      <h1>Datos de Sensores</h1>

      <Paper style={{ padding: "20px", marginBottom: "20px",background: "#1c1c1c" }}>
        <h2>Temperatura</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={items}>
            <CartesianGrid strokeDasharray="3 3" stroke="white" />
            <XAxis dataKey="tiempo" stroke="white" />
            <YAxis stroke="white" />
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: '#fff', border: 'none' }} 
              itemStyle={{ color: '#fff' }} />
            <Legend wrapperStyle={{ color: "white" }} />
            <Line type="monotone" dataKey="temperatura" stroke="#ff0000" strokeWidth={3} 
            style={{ filter: "drop-shadow(0 0 6px #8884d8)" }} activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </Paper>

      <Paper style={{ padding: "20px", marginBottom: "20px",background: "#1c1c1c"  }}>
        <h2>Distancia</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={items}>
            <CartesianGrid strokeDasharray="3 3"stroke="white" />
            <XAxis dataKey="tiempo" stroke="white" />
            <YAxis stroke="white"/>
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: '#fff', border: 'none' }} 
              itemStyle={{ color: '#fff' }} />
            <Legend wrapperStyle={{ color: "white" }}/>
            <Line type="monotone" dataKey="distancia" stroke="#00ff00" strokeWidth={3} 
            style={{ filter: "drop-shadow(0 0 6px #8884d8)" }} activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </Paper>

      <Paper style={{ padding: "20px", marginBottom: "20px",background: "#1c1c1c"  }}>
        <h2>Presión</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={items}>
            <CartesianGrid strokeDasharray="3 3" stroke="white" />
            <XAxis dataKey="tiempo"stroke="white"/>
            <YAxis stroke="white" />
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: '#fff', border: 'none' }} 
              itemStyle={{ color: '#fff' }} />
            <Legend wrapperStyle={{ color: "white" }} />
            <Line type="monotone" dataKey="presion" stroke="#00ffff" strokeWidth={3} 
            style={{ filter: "drop-shadow(0 0 6px #8884d8)" }} activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </Paper>

      <Paper style={{ padding: "20px", marginBottom: "20px",background: "#1c1c1c" }}>
        <h2>Eje Z</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={items}>
            <CartesianGrid strokeDasharray="3 3"  stroke="white"/>
            <XAxis dataKey="tiempo" stroke="white" />
            <YAxis  stroke="white"/>
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: '#fff', border: 'none' }} 
              itemStyle={{ color: '#fff' }} />
            <Legend wrapperStyle={{ color: "white" }}/>
            <Line type="monotone" dataKey="ejez" stroke="#ff8000"  strokeWidth={3} 
            style={{ filter: "drop-shadow(0 0 6px #8884d8)" }} activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </Paper>

    </div>
  );
};

export default CarritoList;


