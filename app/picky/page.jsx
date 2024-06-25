'use client'
import React, { useEffect } from 'react';

function TidioChat() {
  useEffect(() => {
    // Crear el script
    const script = document.createElement('script');
    script.src = "//code.tidio.co/gsais0mbwtwbjybioeftmyzyvk6nyxcs.js";
    script.async = true;

    // Agregar el script al body
    document.body.appendChild(script);

    // Opcional: Limpiar al desmontar el componente
    return () => {
      document.body.removeChild(script);
    };
  }, []); // El array vacío asegura que el efecto solo se ejecute una vez al montar

  return (
    <div>
      {/* Puedes agregar aquí otros elementos de UI si es necesario */}
    </div>
  );
}

export default TidioChat;
