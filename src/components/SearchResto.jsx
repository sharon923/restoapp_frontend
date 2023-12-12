import React, { useState } from 'react'
import HeaderResto from './HeaderResto'
import axios from 'axios'

const SearchResto = () => {
    const[inputData, changeInputData]= useState({
        "name" : ""
      
    })

    const[result, changeResult] = useState([])

    const inputHandler=(event)=>{
         changeInputData({...inputData,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputData)
        axios.post("http://127.0.0.1:8000/resto/search/", inputData).then(
            (response)=>{
                   changeResult(response.data)
            }
        )
    }
  return (
    <div>
        <HeaderResto/>

<div class="container">
        <div class="row">
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div class="row g-3">
                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label for="" class="form-label">Search Dish:</label>
                        <input type="text" class="form-control" name='name' value={inputData.name} onChange={inputHandler}></input>
                    </div>
                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button onClick={readValue} class="btn btn-warning">Search</button>
                    </div>
                </div>
            </div>
        </div>


        {result.map(
            (value, i)=>{
                return <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        
    
    <div class="card mb-3">
       
        <div class="card-body">
        <img height = "300px" src={value.image} class="card-img-top" alt="..."></img>
    
            <h5 class="card-title">Dish Name: {value.name}</h5>
            <p class="card-text">Price: {value.price}</p>
            <p class="card-text">Description: {value.description}</p>
            <p class="card-text">Rating: {value.rating}</p>
            <p class="card-text">Availabity: {value.available}</p>
           
            
        </div>
    </div>
    
    </div>
                        
                    </div>
                </div>
            </div>
            }
        )}
    </div>
    </div>
  )
}

export default SearchResto