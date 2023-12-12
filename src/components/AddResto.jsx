import React, { useState } from 'react'
import HeaderResto from './HeaderResto'
import axios from 'axios'

const AddResto = () => {

    const[inputData, changeInputData]= useState({
        "name" : "",
       "image" : "",
        "description" : "",
        "price" : "",
        "rating" : "",
        "available" : ""
    })

    const inputHandler=(event)=>{
         changeInputData({...inputData,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputData)
        axios.post("http://127.0.0.1:8000/resto/add/", inputData).then(
            (response)=>{
                      alert(response.data.status)
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
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label for="" class="form-label">Dish Name:</label>
                        <input type="text" class="form-control" name='name' value={inputData.name} onChange={inputHandler}></input>
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label for="" class="form-label">image:</label>
                        <input type="text" class="form-control" name='image' value={inputData.image} onChange={inputHandler}></input>
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label for="" class="form-label">Description:</label>
                        <input type="text" class="form-control" name='description' value={inputData.description} onChange={inputHandler}></input>
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label for="" class="form-label">Price:</label>
                        <input type="text" class="form-control" name='price' value={inputData.price} onChange={inputHandler}></input>
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label for="" class="form-label">Rating:</label>
                        <input type="text" class="form-control" name='rating' value={inputData.rating} onChange={inputHandler}></input>
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label for="" class="form-label">Availability:</label>
                        <input type="text" class="form-control" name='available' value={inputData.available} onChange={inputHandler}></input>
                    </div>
                   
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button onClick={readValue} class="btn btn-warning">REGISTER</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AddResto