import { ValuesOfCorrectTypeRule } from 'graphql';
import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import  useForm  from '../../../hooks/useForm'
import './Login.scss'


export default function Login(props) {
  const { handleChange, handleSubmit, values } = useForm()
  // const [cookies, setCookie] = useCookies(['name'])
  



  return (
    <div>
      <div className="zform">
      <p>BRO {values.name}</p>
      <p>BRO {values.password}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" 
               name="name"
               placeHolder="name"
               value={values.name}
               onChange={handleChange}
        ></input>
        <input type="text" 
               name="password"
               placeHolder="name"
               value={values.password}
               onChange={handleChange}
        ></input>  
        <button type="submit" >Hi</button>
      </form>
      </div>
    </div>
  )
}