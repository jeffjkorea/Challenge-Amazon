import React, { useState } from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn =(e)=>{
    e.preventDefault();
    // some firebase login...
  }

  const register = (e)=>{
    e.preventDefault();
    // some firebase login...
  }
  return (
    <div className='login'>
      <Link to="/">
        <img className='login__logo'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
          alt="" />
      </Link>

      <div className="login__container">
        <h1>Sing in</h1>
        
        <form action="">
          <h5>E-mail</h5>
          <input type="email" 
            value={email}
            onChange={e=>setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input type="password" 
            value={password}
            onChange={e=>setPassword(e.target.value)}
          />

          <button className='login__signInBtn'
            onClick={signIn}
            type="submit">
            Sing In</button>
        </form>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum aspernatur harum consequuntur magnam repellendus voluptatum sint? Provident facilis a blanditiis quia praesentium vel possimus similique ex necessitatibus beatae labore incidunt esse, fuga aliquid quibusdam modi maiores recusandae vero animi consequatur minima? In obcaecati explicabo hic magni praesentium ratione similique libero?
        </p>

        <button className='login__registerBtn'
          onClick={register}>
          Create a new Account</button>
      </div>
    </div>
  )
}

export default Login