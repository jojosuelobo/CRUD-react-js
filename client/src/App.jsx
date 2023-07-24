import React, { useState } from "react"
import './App.css'
import Axios from "axios";

function App() {
  const [values, setValues] = useState();

  const handleChangeValues = (values) => {
    setValues(prevValue => ({
      ...prevValue,
      [values.target.name]: values.target.value,
    }))
  }

  const handleClickedButton = () => {
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      cost: values.cost,
      category: values.category
    }).then((response) => {
      console.log(response)
    })
  }

  return (
    <>
      <div className="app-container">
        <div className="register--container">
          <h1 className='register--title'>Scrim Shop</h1>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            className="register--input"
            onChange={handleChangeValues}
          />
          <input
            type="text"
            name="cost"
            placeholder="Preço"
            className="register--input"
            onChange={handleChangeValues}
          />
          <input
            type="text"
            name="category"
            placeholder="Categoria"
            className="register--input"
            onChange={handleChangeValues}
          />
          <button
            className='register--button'
            onClick={() => handleClickedButton()}>
            Cadastrar
          </button>
        </div>
      </div>
    </>
  )
}

export default App
