import './App.css';
import { useState } from 'react';
import { send } from 'emailjs-com';

function App() {
  const [toSend, setToSend] = useState({
    first_name: '',
    last_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'Service ID',
      'template ID',
      toSend,
      'USER ID'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='first_name'
          placeholder='First name'
          value={toSend.first_name}
          onChange={handleChange}
        />
        <input
          type='text'
          name='last_name'
          placeholder='Last name'
          value={toSend.last_name}
          onChange={handleChange}
        />
        <input
          type='text'
          name='message'
          placeholder='Message'
          value={toSend.message}
          onChange={handleChange}
        />
        <input
          type='text'
          name='reply_to'
          placeholder='Your email'
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;

















 



  