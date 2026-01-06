import { useState } from 'react';

export default function Home() {
  const [phone, setPhone] = useState('');

  const login = async () => {
    const res = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone }),
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>DriveX Login</h1>
      <input
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br /><br />
      <button onClick={login}>Login</button>
    </div>
  );
}
