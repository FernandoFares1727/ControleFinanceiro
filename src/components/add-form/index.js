
import React, { useState } from 'react';
import './style.css'
import FormDescriptionValue from './form-description-value/index.js'
import FormCheck from './form-check/index.js'

const ItemForm = () => {
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [type, setType] = useState('entrada');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Aqui você pode fazer o que quiser com os dados do formulário
      console.log('Descrição:', description);
      console.log('Valor:', value);
      console.log('Tipo:', type);
    };
  
    return (
      <form className='add-form' onSubmit={handleSubmit}>
        <div className="form-description-value">
            <FormDescriptionValue 
              id = {"description"}
              type = {"text"}
              value = {description}
              onChanged = {description => setDescription(description)}
            />
            <FormDescriptionValue 
              id = {"value"}
              type = {"number"}
              value = {value}
              onChanged = {value => setValue(value)}
            />
        </div>
        <div className='form-types'>
          <FormCheck 
            type = "entrada"
            checked = {type === "entrada"}
            onChanged = {() => setType("entrada")}
          />
          <FormCheck 
            type = "saida"
            checked = {type === "saida"}
            onChanged = {() => setType("saida")}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Adicionar
        </button>
      </form>
    );
  };
  
  export default ItemForm;