import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const Login = () => {

  const [credential, setCredential] = useState({email: "", password: ""});

  const handleSubmit = (e) => {
    e.preventDefault() 
    console.log(credential)
  }

  const changeCredential = (e) => {
    setCredential({...credential, [e.target.name]: e.target.value})
  }



  return (
    <Container>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={credential.email} onChange={changeCredential}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label >Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={credential.password} onChange={changeCredential}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default Login