import React, { useState } from 'react';

function Profile() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const handleClick = (e) => {
    localStorage.setItem('name', Name);
    localStorage.setItem('email', Email);
    localStorage.setItem('password', Password);
  };

  return (
    <div className='container'>
      <div className="form_are">
        <p>Sign up</p>
        <form>
          <div className="form_group">
            <label className="sub_title" htmlFor="name">Name</label>
            <input
              id="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="form_style"
              type="text"
            />
          </div>
          <div className="form_group">
            <label className="sub_title" htmlFor="email">Email</label>
            <input
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="form_style"
              type="email"
            />
          </div>
          <div className="form_group">
            <label className="sub_title" htmlFor="password">Password</label>
            <input
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="form_style"
              type="password"
            />
          </div>
          <div>
            <button onClick={handleClick} className="btn2 btn">SIGN UP</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
