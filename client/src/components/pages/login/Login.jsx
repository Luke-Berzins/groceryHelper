import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import  useForm  from '../../../hooks/useForm'
import './Login.scss'


export default function Login(props) {
  const { handleChange, handleSubmit, values } = useForm()
  const [cookies] = useCookies(['name'])

  return (
    <div>
      <div className="form">
      <p>Hello {cookies.name} !</p>
      <form onSubmit={handleSubmit}>
        <p>{values.email}</p>
        <label for="email">Email</label>
        <input type="text" 
               name="email"
               placeHolder="email"
               value={values.email}
               onChange={handleChange}
               ></input>
        <p>BRO {values.password}</p>
        <label for="password">Password</label>
        <input type="text" 
               name="password"
               placeHolder="password"
               value={values.password}
               onChange={handleChange}
        ></input> 
        <button type="submit" >Hi</button>
      </form>
      </div>
    </div>
  )
}