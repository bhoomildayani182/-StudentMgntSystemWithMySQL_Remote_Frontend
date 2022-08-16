import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Addstudent = () => {

    const [id,setId] = useState();
    const [name,setName] = useState();
    const [address,setaddress] = useState();

    const student = 
        {
            id : id,
            name : name,
            address : address
        }
    

    let saveStudent = () =>{
        
        axios.post("http://localhost:8080/student", student)
        .then(Response => Response.data, alert("Successfully Add Student Data"))
        .catch(error =>  alert(error))
        
    }

    
    const textChange = (event) =>{
        if(event.target.name==='id')
        {
        setId(event.target.value);
        } else if(event.target.name==='name')
        {
        setName(event.target.value);
        } else if(event.target.name==='address')
        {
        setaddress(event.target.value);
        }
    }

  return (
    <Form onSubmit={saveStudent}> 
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Id</Form.Label>
        <Form.Control name="id" value={id} type="text" placeholder="Enter ID"  onChange={textChange} />
          </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" value={name} type="text" placeholder="Student Name" onChange={textChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Address</Form.Label>
        <Form.Control name="address" value={address} type="text" placeholder="Student address" onChange={textChange} />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Addstudent
