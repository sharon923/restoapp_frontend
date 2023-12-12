import React, { useState } from 'react'
import HeaderResto from './HeaderResto'

const DeleteResto = () => {
    const[inputData, changeInputData]= useState({
        "name" : ""
      
    })

    const inputHandler=(event)=>{
         changeInputData({...inputData,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputData)
    }
  return (

    <div>
        <HeaderResto/>
        <div class="container">
        <div class="row">
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div class="row g-3">
                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label for="" class="form-label">Delete Movie:</label>
                        <input type="text" class="form-control" name='name' value={inputData.name} onChange={inputHandler}></input>
                    </div>
                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button onClick={readValue} class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default DeleteResto