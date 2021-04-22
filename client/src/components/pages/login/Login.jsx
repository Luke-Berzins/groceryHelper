import { gql, useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import  useForm  from '../../../hooks/useForm'
import './Login.scss'


const userVerification = gql`
  {
    users {
      name
      email
      password
    }
  }  
  `



export default function Login(props) {
  const { handleChange, values } = useForm()
  const [cookies] = useCookies(['name'])

  const login = e => {
    e.preventDefault()
    console.log(e.target)
    console.log(values.email)
    console.log(values.password)
    
  }

  return (
    <div>
      <div className="form">
      <p>Hello {cookies.name} !</p>
      <form onSubmit={useQuery(userVerification)}>
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