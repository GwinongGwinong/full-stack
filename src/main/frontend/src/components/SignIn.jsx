// LoginModal.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignIn.css';
import { useRecoilState } from "recoil";
import { userInfo } from "../recoil";
import Navbar from "../components/Navbar"

function LoginModal({ isOpen, onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useRecoilState(userInfo);
  const navigate = useNavigate();

//   useEffect(()=>{
//     // setUser(null);
//   },[]);

  const handleLogin = () => {
    setUser(username);    
    console.log('Username:', username);
    console.log('Password:', password);
    navigate(-1);
  };

  return (
      <div className='wrapper'>
        <Navbar className="nav"/>
        <h2 className='text'>함께 가꾸어나가는 귀농생활</h2>
        <div className="input-container">
          <div className="email-container">
            <h3 className="email">아이디(이메일)</h3>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-box"
            />
          </div>
          
          <div className="email-container">
            <h3 className="email">비밀번호</h3>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-box"
            />
          </div>
          
          <button onClick={handleLogin} className="loginButton">Login</button>
        </div>
        
      </div>
  );
}

export default LoginModal;
