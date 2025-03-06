import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Login.css"

const Login = () => {

  const [state, setState] = useState('Sign Up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const navigate = useNavigate(); 

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    navigate('/');
  }

  return (
    <form className="login-container" onSubmit={onSubmitHandler}>
            <div className="login-form">
                <p className="form-title">{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
                <p className="form-description">Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book appointment</p>

                {state === 'Sign Up' && (
                    <div className="input-field">
                        <p>Full Name</p>
                        <input
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required
                        />
                    </div>
                )}

                <div className="input-field">
                    <p>Email</p>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                </div>

                <div className="input-field">
                    <p>Password</p>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                </div>

                <button className="submit-button" type="submit">
                    {state === 'Sign Up' ? 'Create Account' : 'Login'}
                </button>

                {state === 'Sign Up' ? (
                    <p>
                        Already have an account?{' '}
                        <span className="toggle-link" onClick={() => setState('Login')}>
                            Login here
                        </span>
                    </p>
                ) : (
                    <p>
                        Create a new account?{' '}
                        <span className="toggle-link" onClick={() => setState('Sign Up')}>
                            Click here
                        </span>
                    </p>
                )}
            </div>
        </form>
  )
}

export default Login