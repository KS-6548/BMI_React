import React from 'react'
import { IoMale, IoFemale } from 'react-icons/io5'
import Piecharts from './Piecharts'

function Bmivalue({ BMI, age, height, weight, gender, isShow }) {
    
    return (
        <>
            {isShow ?
                <div className="col-12 col-md-12 col-lg-6 g-3">
                <div className="container">
                
                    <div className="container w-75">
                        <div className="row">
                            <div className="col-6 g-3">
                                <div className="container box border d-flex justify-content-center align-items-center shadow rounded-4">
                                    {gender == "Male" ?
                                        <div>
                                            <IoMale className='fs-1 me-4' />
                                            <IoFemale className='fs-1 text-secondary' />
                                        </div>
                                        : 
                                        <div>
                                            <IoMale className='fs-1 me-4 text-secondary' />
                                            <IoFemale className='fs-1 ' />
                                        </div>

                                    }
                                </div>
                            </div>
                            <div className="col-6 g-3">
                                <div className="container box border d-flex flex-column justify-content-center align-items-center shadow rounded-4">
                                    <h1>{age}</h1>
                                    <span className='text-secondary'>in Year</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 g-3">
                                <div className="container box border d-flex flex-column justify-content-center align-items-center shadow rounded-4">
                                    <h1>{weight}</h1>
                                    <span className='text-secondary'>in kg</span>
                                </div>
                            </div>
                            <div className="col-6 g-3">
                                <div className="container box border d-flex flex-column justify-content-center align-items-center shadow rounded-4">
                                    <h1>{height}</h1>
                                    <span className='text-secondary'>in cm</span>
                                </div>
                            </div>
                            <div className="col-12 g-3 mb-3">
                                <Piecharts BMI={BMI}/>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
                :
                <></>
            }
        </>
    )
}

export default Bmivalue