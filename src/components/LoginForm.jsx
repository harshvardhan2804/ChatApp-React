import { useState } from 'react';
import axios from 'axios';

const projectID = '7636bf2e-9101-4476-bb42-05cf5e04e552';

// Modal component for login form
const Modal = () => {
  // State variables for username, password, and error message
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create authentication object with headers
    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      // Send a GET request to check credentials
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      // Store username and password in local storage
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      // Reload the page
      window.location.reload();
      setError('');
    } catch (err) {
      // If there is an error, set the error message
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>
  );
};

export default Modal;
