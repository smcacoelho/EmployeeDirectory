
import React from 'react';
import { Form } from 'react-bootstrap';
import {DepartmentSelect} from './DepartmentSelect';
import Button from 'react-bootstrap/Button'


export class UserForm extends React.Component {
    constructor(props){
      super(props);

      
    }
  
    render() {
    
      return (
        <>
         <Form onSubmit={this.props.handleSubmit}>
           
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control id="fName" name="fName" type="text" defaultValue = {this.props.fName} required/>
          </Form.Group>

          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control id="lName" name="lName" type="text" defaultValue = {this.props.lName} required></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Role</Form.Label>
            <Form.Control id="job" name="job" type="text" defaultValue = {this.props.job} required></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control id="email" name="email" type="email" defaultValue = {this.props.email} required></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Department</Form.Label>
            <DepartmentSelect dId = {this.props.currentDepartId}/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        
        
</>
      )
    }
  }
  

