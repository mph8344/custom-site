import { useState } from 'react';
import { MusicGrid } from '../components/Grid';
import './soundboard.scss';
import { Form } from 'react-bootstrap';

function Soundboard() {
  const [auth, setAuth] = useState(false);

  const handleChange = (value: string) => {
    if (value === 'egg') {
      setAuth(true);
    }
  };

  return (
    <div className='routed-page'>
      <div className='soundboard-container' style={{ opacity: auth ? 1 : 0 }}>
        <div className='page-header' id='soundboard'>
          Soundboard
        </div>
        <div className='grid-wrapper'>
          <MusicGrid />
        </div>
      </div>
      <div className='password-holder' style={{ opacity: auth ? 0 : 1 }}>
        <div className='password-field'>
          <Form onSubmit={(event) => event.preventDefault()}>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                onChange={(event) => {
                  handleChange(event.target.value);
                }}
                placeholder='Password'
              />
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Soundboard;
