import './App.css';
import { useState } from 'react';
import { send } from 'emailjs-com';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

function App() {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_bk5101j',
      'template_btyab8p',
      toSend,
      'Xl1Nze63ICo7wfoEd'
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
    <div className='App'>
      <div className='app__form-header'>
        <h1>IT Request Form</h1>
      </div>
      <div className="app__form">
        <Form onSubmit={onSubmit}>
          <FormGroup className='app__form-item'>
            <Label for='from_name'>
              Name:
            </Label>
            <Input 
            type='text'
            id='from_name'
            name='from_name'
            placeholder='from name'
            value={toSend.from_name}
            onChange={handleChange}
            /> 
          </FormGroup>
          <FormGroup className='app__form-item'>
            <Label for='to_name'>
              To:
            </Label>
            <Input  
              type='text'
              name='to_name'
              placeholder='to name'
              value={toSend.to_name}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className='app__form-item'>
            <Label for='message'>
              Message:
            </Label>  
            <Input className='app__form-message'
              type='textarea'
              rows='5'
              id='message'
              name='message'
              placeholder='Your message'
              value={toSend.message}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className='app__form-item'>
            <Label for='reply_to'>
              Your Email:
            </Label>
            <Input 
              type='text'
              id='reply_to'
              name='reply_to'
              placeholder='Your email'
              value={toSend.reply_to}
              onChange={handleChange}
            />
          </FormGroup>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    </div>
  );
}

export default App;