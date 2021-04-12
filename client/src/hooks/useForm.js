import React, { useState } from 'react';

const useForm = () => {
  const [values, setValues] = useState({
    name: ''
  })
  const [errors, setErrors] = useState({
    name: ''
  })


  const handleChange = e => {
    const { name, value } = e.target
    
    setValues({
      ...values,
      [name] : value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  return { handleChange, handleSubmit, values }
}

export default useForm