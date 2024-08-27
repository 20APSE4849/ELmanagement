// src/components/Register.js
import { useState } from 'react';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import './Register.scss';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration successful!");
    } catch (error) {
      console.error("Error registering:", error.message);
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <text>Email  ___:</text><input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br/><br/><br/>
      <text>Password  :</text><input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br/><br/><br/>
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
