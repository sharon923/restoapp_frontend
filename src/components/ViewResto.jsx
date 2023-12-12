import React, { useEffect, useState } from 'react'
import HeaderResto from './HeaderResto'
import axios from 'axios'

const ViewResto = () => {
    const[data,dataChange] = useState([])

    const fetchData=()=>{
        axios.post("http://127.0.0.1:8000/resto/view/").then(
            (response)=>{
                      dataChange(response.data)
            }
        )
    }

    useEffect(()=>{fetchData()},[])

  return (
    <div>
        <HeaderResto/>

<div className="container">
            <br></br><br></br>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

               <div className="row g-3">
                {data.map(
                    (value,i)=>{
                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

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
                    }
                )}

                    
                </div>
               </div>


                </div>
            </div>
    </div>
  )
}

export default ViewResto