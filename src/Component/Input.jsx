import React, { useState } from 'react'
import Bmivalue from './Bmivalue'

function Input() {
  const [age, setAge] = useState()
  const [height, setHeight] = useState()
  const [weight, setWeight] = useState()
  const [gender, setGender] = useState("")
  const [isShow, setIsShow] = useState(false)
  const [BMI, setBMI] = useState(0)
  const [error, setError] = useState("")
  
  const [ageValue, setageValue] = useState()
  const [heightValue, setHeightValue] = useState()
  const [weightValue, setWeightValue] = useState()
  const [genderValue, setGenderValue] = useState("")

  const handleClick = () => {
    if (!age) {
      setError("Please enter age")
    }
    if (!height) {
      setError("Please enter height")
    } 
    if (!weight) {
      setError("Please enter weight")
    } 
    if (!gender) {
      setError("Please enter gender")
    }

    if(age && height && weight && gender){
      let bmi = (weight / (height * height)) * 10000
      setBMI(bmi.toPrecision(4))
      setIsShow(true)
      setageValue(age)
      setHeightValue(height)
      setWeightValue(weight)
      setGenderValue(gender)
      setError(" ")
      setAge("")
      setHeight("")
      setWeight("")
      setGender("")
    }
  }
  
  return (
    <>
      <div className="container-fluid">
        <h1 className='text-center'>BMI CACULATOR</h1>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6 g-3">
            <div className="container">
              <div className="container shadow p-3 rounded-4">
                <label className='form-label'>Age</label>
                <input type="text" className='form-control mb-2' placeholder='Enter your Age' value={age} onChange={(e) => setAge(e.target.value)} />
                <label className='form-label'>Height</label>
                <input type="text" className='form-control mb-2' placeholder='Enter your Height (cm)' value={height} onChange={(e) => setHeight(e.target.value)} />
                <label className='form-label'>Weight</label>
                <input type="text" className='form-control mb-2' placeholder='Enter your Weight (kg)' value={weight} onChange={(e) => setWeight(e.target.value)} />
                <label className='form-label'>Gender</label>
                <div className="container">
                  <input type='radio' className='btn-check text-light' name='gender' id='i1' onClick={() => setGender("Male")}/>
                  <label htmlFor="i1" className='btn btn-outline-info me-3'>Male</label>
                  <input type='radio' className='btn-check text-light'  name='gender' id='i2' onClick={() => setGender("Female")}/>
                  <label htmlFor="i2" className='btn btn-outline-info'>Female</label>
                </div>
                <div className='container d-flex flex-column'>
                  <span className='text-danger m-2'>{error}</span>
                  <button type='button' className='btn btn-primary' onClick={() => handleClick()}>Calculate BMI</button>
                </div>
              </div>
            </div>
          </div>
            <Bmivalue BMI={BMI} age={ageValue} height={heightValue} weight={weightValue} gender={genderValue} isShow={isShow} />
        </div>
      </div>

    </>
  )
}

export default Input