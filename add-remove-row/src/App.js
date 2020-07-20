import React, { useState } from 'react';

function App() {

  const [inputList, setInputList] = useState([
    { firstname: '', lastname: '' }
  ])

  const handleChange = (event, index) => {
    const { name, value } = event.target
    const list = [...inputList]
    list[index][name] = value
    setInputList(list)
  }

  const handleAdd = () => {
    setInputList([...inputList,
    { firstname: '', lastname: '' }
    ])
  }

  const handleDelete = (index) => {
    const list = [...inputList]
    list.splice(index, 1)
    setInputList(list)
  }


  return (
    <div className="container m-5">
      {
        inputList.map((singleInput, index) => {
          return (
            <div className="container-fluid m-2" key={index} >
              <div className="row">
                <div className="col-md-4">
                  <input type="text" name="firstname" className="form-control"
                    value={singleInput.firstname} onChange={(event) => handleChange(event, index)}
                  />
                </div>
                <div className="col-md-4">
                  <input type="text" name="lastname" className="form-control"
                    value={singleInput.lastname}
                    onChange={(event) => handleChange(event, index)}
                  />
                </div>
                <div className="col-md-4">
                  {/* alert({inputList.length}) */}
                  {/* alert({index}) */}
          {inputList.length - 1 === index && <button className="btn btn-primary mr-2" onClick={handleAdd} >Add</button>}
                  {inputList.length !== 1 && <button className="btn btn-danger" onClick={() => handleDelete(index)} >Remove</button>}
                </div>
              </div>
            </div>
          )
        })
      }

      
    </div>
  )

}

export default App;