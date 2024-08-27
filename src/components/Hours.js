// Placeholder to host a component
// components/Hours.js
import React from 'react';

// Función para obtener las horas de apertura según el día de la semana
const getHours = () => {
  const today = new Date();
  const day = today.getDay(); // 0 = domingo, 1 = lunes, ..., 6 = sábado

  if (day === 0 || day === 6) {
    // Sábado o Domingo
    return '9 a.m. - 8 p.m.';
  } else {
    // Lunes a Viernes
    return '10 a.m. - 4 p.m.';
  }
};

// Componente funcional Hours
const Hours = () => {
  return (
    <div>
      <h2>Horas de Apertura de Hoy</h2>
      <p>{getHours()}</p>
    </div>
  );
};

export default Hours;