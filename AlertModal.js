import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {IoWarning} from 'react-icons/io5';


export class AlertModal extends React.Component{



    render(){
        var allowDelete = false;

        if(this.props.numOfEmp == 0){
            allowDelete = true;
        }

        return(
            <>
            {(allowDelete || (this.props.flag=='emp'))?
            <Modal show={this.props.show} onHide = {this.props.hide} >
                <Modal.Header closeButton>
                <Modal.Title><IoWarning></IoWarning>DELETE</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you wish to delete <span className='text-danger bold'> {this.props.name || (this.props.fname +' '+ this.props.lname)}? </span></Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.hide}>No</Button>
                    <Button variant="success" onClick={this.props.delete}>
                        Yes
                    </Button>
                
                </Modal.Footer>
            </Modal>
            : 
            <Modal show={this.props.show} onHide = {this.props.hide} >
                <Modal.Header closeButton>
                 <Modal.Title><IoWarning></IoWarning>ERROR</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Cannot delete 
                    <span className='text-danger bold'> {this.props.name || (this.props.fname +' '+ this.props.lname)} </span>
                    because it has employees.
                    </Modal.Body>
                
        </Modal>}
            </>
        )

    }
    
}