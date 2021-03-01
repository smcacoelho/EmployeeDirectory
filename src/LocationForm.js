import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export class LocationForm extends React.Component {
      
    render() {
      return (
        <>
        <Form onSubmit={this.props.handleSubmit}>
          
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='name' id='name' placeholder="name" />
         
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form>
        
</>
      )
    }
  }