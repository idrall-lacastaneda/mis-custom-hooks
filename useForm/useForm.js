import { useState } from 'react';
// customHook para manejo y manipulacion de formularios
export const useForm = (initialState = {}) => {
  // useState creado para recibir los objetos de un formularios
  const [values, setValues] = useState(initialState);
  // handleInput para escuchar cuando se escribe en un input del formulario
  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const reset = () => {
    setValues(initialState);
  };
  return [values, handleInputChange, reset];
};
