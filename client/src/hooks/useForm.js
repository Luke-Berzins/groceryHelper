import React, { useState } from 'react';
import { useCookies } from 'react-cookie'


const useForm = () => {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({
    name: ''
  })


  const handleChange = e => {
    const { name, value } = e.target
    console.log(name, value)
    setValues({
      ...values,
      [name] : value,
    })
    console.log(values)
  }

  

  return { handleChange, values }
}

export default useForm