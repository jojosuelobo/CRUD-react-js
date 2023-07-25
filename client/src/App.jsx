import React, { useState, useEffect } from "react"
import './App.css'
import Axios from "axios";
import Cards from "./components/cards/cards"
import axios from "axios";

function App() {
  const [values, setValues] = useState()
  const [listGames, setListGames] = useState()

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

  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((response) => {
      setListGames(response.data)
    })
  })

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
        { typeof listGames !== "undefined" && listGames.map((value) => {
          return <Cards 
                    key={value.idgames}
                    listCard={listGames}
                    setListCard={setListGames}
                    id={value.id}
                    name={value.name}
                    cost={value.cost}
                    category={value.category}
                  ></Cards>
        }) }
      </div>
    </>
  )
}

export default App
