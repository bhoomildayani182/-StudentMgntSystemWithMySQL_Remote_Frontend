import React, { useState } from 'react'
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


const Signup = (props) => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState();

    function textChanged(event){
        if(event.target.name === "email"){
            setEmail(event.target.value)
        }else if(event.target.name === "password"){
            setPassword(event.target.value)
        }else if(event.target.name === "confirmPassword"){
            setConfirmPassword(event.target.value)
        }
      }

    let user = {
        email:email,
        password:password,
        confirmPassword:confirmPassword,
      }
    

    let saveUser = (event) => {
        event.preventDefault();
        
          axios
            .post("http://localhost:8080/user", user)
            .then((response) => {
              if (response.data != null) {
                props.showAlert("success", "Record added successfully");
              }
            })
            .catch((error) => props.showAlert("danger", "Error"));
      };

    return (
        <div>
            <Container>
                <Form onSubmit={saveUser}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label >Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={textChanged} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label >Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={textChanged} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label >Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" name="confirmpassword" value={confirmPassword} onChange={textChanged} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Signup
