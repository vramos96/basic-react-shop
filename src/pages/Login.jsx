import React, { useRef } from 'react'
import logoYardSale from '@logos/logo_yard_sale.svg'
import '@styles/Login.scss'

const Login = () => {
  const form = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(form.current)
    const data = {
      username: formData.get('email'),
      password: formData.get('password')
    }
    console.log(data)
  }
  return (
    <div className="login">
        <div className="form-container">
            <img src={logoYardSale} alt="logo" className="logo" />
            <h1 className="title">Create a new password</h1>
            <p className="subtitle">Enter a new passwrd for yue account</p>
            <form action="/" className="form" ref={form}>
              <label htmlFor="email" className="label">Email address</label>
              <input type="text" name="email" placeholder="platzi@example.com" className="input input-email" />
              <label htmlFor="password" className="label">Password</label>
              <input type="password" name="password" placeholder="*********" className="input input-password" />
              <button className="primary-button login-button" onClick={handleSubmit}>
                Log in
              </button>
              <a href="/">Forgot my password</a>
            </form>
        </div>
    </div>
  )
}

export default Login