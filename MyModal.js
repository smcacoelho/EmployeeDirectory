import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { DepartmentForm } from './DepartmentForm';
import { UserForm } from './UserForm';
import {LocationForm} from './LocationForm';
import { BsFillPersonFill } from "react-icons/bs";


export class MyModal extends React.Component {
    constructor(props){
        super(props);
        this.updateFormState = this.updateFormState.bind(this);
    }

    handleSubmit(e) {

        e.preventDefault();
        
        const data = new FormData(e.target);
        console.log(e.target);

        if(this.props.flag == 'edit'){                  // update employee table
            data.append('employeeId', this.props.id);
            //"https://sofiacoelho.co.uk/api/test.php?flag=update"
            var url = "https://sofiacoelho.co.uk/EmployeeDirectory/api/test.php?flag=update";
            
            fetch(url, {
            method:'POST',
            body: data
            })
                .then(response => response.text())
                .then((text) => { this.updateFormState(); })
        }
        if(this.props.flag == 'add'){                   // add to employee table
            //"https://sofiacoelho.co.uk/api/test.php?flag=addEmployee"
            var url = "https://sofiacoelho.co.uk/EmployeeDirectory/api/test.php?flag=addEmployee";
            
            fetch(url, {
            method:'POST',
            body: data
            })
                .then(response => response.text())
                .then((text) => { this.updateFormState(); })
        }
        if(this.props.flag == 'addLocation'){           // add to location table
            //"https://sofiacoelho.co.uk/api/test.php?flag=addLocation"
            var url = "https://sofiacoelho.co.uk/EmployeeDirectory/api/test.php?flag=addLocation";
            
            fetch(url, {
            method:'POST',
            body: data
            })
                .then(response => response.text())
                .then((text) => { this.updateFormState(); })
        }
        if(this.props.flag == 'addDepartment'){         // add to department table
            //"https://sofiacoelho.co.uk/api/test.php?flag=addDepartment"
            var url = "https://sofiacoelho.co.uk/EmployeeDirectory/api/test.php?flag=addDepartment";
            
            fetch(url, {
            method:'POST',
            body: data
            })
                .then(response => response.text())
                .then((text) => { this.updateFormState(); })
        }
    }

    updateFormState(){                                  // when form is submitted call parent function 
        this.props.formOnSubmit();                      // to hide modal and change state to trigger page reload
    }
     
    
    render(){

        var salute;
        var form;
        var employeeForm = <UserForm 
            id = {this.props.id}
            fName = {this.props.fname}
            lName = {this.props.lname}
            job = {this.props.job}
            department = {this.props.department}
            email = {this.props.email}
            handleSubmit = {this.handleSubmit.bind(this)}
            currentDepartId = {this.props.dId}
        />


        switch(this.props.flag){
            case 'add':
                salute = 'Add Employee';
                form = employeeForm;
                break;
            case 'edit':
                salute = 'Edit Employee';
                form = employeeForm
                break;
            case 'addLocation':
                salute = 'Add Location';
                form = <LocationForm handleSubmit = {this.handleSubmit.bind(this)}/>
                break;
            case 'addDepartment':
                salute = 'Add Department';
                form = <DepartmentForm handleSubmit = {this.handleSubmit.bind(this)}/>
                break;
            case 'info':
                salute = this.props.fname + ' ' + this.props.lname;
                form = <table className='w-100'>
                    <tbody>
                    <tr>
                        <th className='border-bottom'>Name:</th>
                        <td className='float-center border-bottom'>{this.props.fname} {this.props.lname}</td>
                    </tr>
                    <tr>
                        <th className='border-bottom'>Role:</th>
                        <td className='float-center border-bottom'>{this.props.job}</td>
                    </tr>
                    <tr>
                        <th className='border-bottom'>Email:</th>
                        <td className='float-center border-bottom'>{this.props.email}</td>                    
                    </tr>
                    <tr>
                        <th>Department:</th>
                        <td className='float-center'>{this.props.department}</td>
                    </tr>
                    </tbody>
                </table>
        }


        return(
            <>
            <Modal
            show={this.props.show}
            onHide={this.props.hide}
            aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    <BsFillPersonFill></BsFillPersonFill>{salute}
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {form}
                </Modal.Body>
            </Modal>
    </>
        )
    }
}