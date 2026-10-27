import React from 'react'
import { useState } from 'react'

const initialForm = {
  studentName:"",
  Email:"",
  department:"",
  yearOfStudy:"",
  password:"",
  attendanceType:"In Person",
  needAccessibility:false,
  eventId:"",
  message:"",
}
function Form({event}) {
  
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [registration, setRegistration] = useState(null);
  const [submissionStatus, setSubmissionStatus] = useState("idle");

  

  function handleChange(event){
    const {name, value, type, checked} = event.target

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })

    setErrors({
      ...errors,
      [name]:""
    })
  }

  function handleSubmit(event){
    event.
  }

  return (
    <form action="">
        <h1>
          Student Event Registration
        </h1>
        <div className="">
          <label htmlFor="">Student Name</label>
          <input type="text" />
          <label htmlFor="">Email</label>
          <input type="email" name="" id="" />
        </div>
    </form>
  )
}

export default Form
