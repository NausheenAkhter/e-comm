import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../tools/firebase';
import { useNavigate } from 'react-router-dom';
import useAppState from '../hooks/use-app-state';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [state, dispatch]=useAppState()
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate('/');
        dispatch({
          type: 'UPDATE_TOKEN',
          token: user.getIdToken()
        })
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  };

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div style={{ display: 'flex', placeContent: 'center' }}>
      <div>
        <h1> Sign in</h1>
        <form onSubmit={signIn}>
          <h4>Email Id</h4>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <h4>Password</h4>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div style={{ marginTop: '2em' }}>
            <button type="submit">Sign In</button>
          </div>
        </form>
        <div style={{ color: 'red' }}>{errorMessage}</div>

        <div>OR</div>
        <div>
          <button type="submit" onClick={register}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
