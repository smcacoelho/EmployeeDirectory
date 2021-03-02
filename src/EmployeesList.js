import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';
import {MyModal} from './MyModal';
import Button from 'react-bootstrap/Button';
import {DepartmentSelect} from './DepartmentSelect'

import Form from 'react-bootstrap/Form';
import { FaTrash,FaLongArrowAltUp,FaLongArrowAltDown,FaCog } from "react-icons/fa";

import {AlertModal} from "./AlertModal";
import { Spinner } from 'react-bootstrap';
import { BiIdCard } from "react-icons/bi";
import { HiOutlineMail, HiCog } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import { RiGroupFill } from "react-icons/ri";
import Card from 'react-bootstrap/Card';
import{IoPersonAdd} from 'react-icons/io5';
import {FiRefreshCw} from 'react-icons/fi';


export class EmployeesList extends Component {

    constructor(props) {
        super(props);
        this.state={
            data:[],
            data2:[],               // keep record of all locations to use on filter by name
            show: false,            //show modal
            refresh:'',
            fname:'',
            lname:'',
            jobTitle:'',
            email:'',
            department:'',
            id:'',
            dId:'',
            alert: false,           //show alert
            idToDelete:'',
            delete: false,
            flag:'',
            checked: false,
            departments:[],
            filterDepartment:'',
            search:'',
            loading:'false',
            sortAsc: true
        }
    }

    //handle alerts and removal of employees

    showAlert(param1, param2, param3){
        this.setState({
            alert: true,
            idToDelete: param1,
            fname:param2,
            lname:param3
        })
    }

    hideAlert(){
        this.setState({
            alert:false,
            idToDelete:'',

        })
    }
    
    deleteEmployee(){
        this.setState({
            delete: true,
            alert:false

        })
    }

    //handle edit of employee of information

    showModal(param1, param2, param3, param4, param5, param6, param7, param8, e){

        if(param1 === 'add'){
            this.setState({
                show: true,
                refresh:false,
                flag: 'add'
            })
            
        }else if(param8 === 'info'){
            this.setState({
                show : true,
                refresh: false,
                id: param6,
                fname: param1,
                lname: param2,
                jobTitle:param3,
                email: param4,
                department: param5,
                dId:param7 ,
                flag: 'info'
            })
            
        }else{
            this.setState({
                show : true,
                refresh: false,
                id: param6,
                fname: param1,
                lname: param2,
                jobTitle:param3,
                email: param4,
                department: param5,
                dId:param7 ,
                flag: 'edit'
            })
            e.stopPropagation();
        }
    }
    updateFormState(){
        this.setState({
            show: false,
            refresh:true,
        })
        
    }
    hideModal(){
        this.setState({
            show: false,
            fname:'',
            lname:'',
            jobTitle:'',
            email:'',
            department:'',
            id:'',
            dId:''
        })
    }


    fetchEmployees(){
        
         //'https://sofiacoelho.co.uk/api/test.php?flag=employee'
         fetch('https://sofiacoelho.co.uk/api/test.php?flag=employee')
         .then(response => response.json())
         .then((json) => {
             this.setState({
                 data: json[0],
                 data2: json[0],
                 refresh: false,
                 loading: false
             })
             this.sortByAsc();
         });

    }

    //fetch records everytime state changes is made
    componentDidUpdate(prevState){

        if(this.state.checked){
            this.filterbyDepartment();
        }

        if(this.state.delete){
            //`https://sofiacoelho.co.uk/api/test.php?flag=deleteEmp&id=${this.state.idToDelete}`
            fetch(`https://sofiacoelho.co.uk/api/test.php?flag=deleteEmp&id=${this.state.idToDelete}`)
            .then(response => response.json())
            .then(() => {
            
                this.setState({
                    delete: false,
                    idToDelete:'',
                    refresh: true,
                    loading: false
                })
            });
        }

        if(this.state.refresh){
           this.fetchEmployees();   
        }
    }
    componentDidMount(){
        this.setState({loading: true })
        this.fetchEmployees();  

    }

    sortByAsc(){
        var orderedData = this.state.data.sort((e1, e2) =>{
            var employee1 = e1[2].toUpperCase();
            var employee2 = e2[2].toUpperCase();
            if(employee1 < employee2){
                return -1;
            }else if(employee1 > employee2){
                return 1;
            }else{
                return 0;
            }
        })
        this.setState({
            data:orderedData
        })
    }

    sortByDesc(){
        var orderedData = this.state.data.sort((e1, e2) =>{
            var employee1 = e1[2].toUpperCase();
            var employee2 = e2[2].toUpperCase();
            if(employee1 < employee2){
                return 1;
            }else if(employee1 > employee2){
                return -1;
            }else{
                return 0;
            }
        })
        this.setState({
            data:orderedData
        })

       

    }
    sortByDepartment(){
        var orderedData = this.state.data.sort((d1, d2) =>{
            var depart1 = d1[6].toUpperCase();
            var depart2 = d2[6].toUpperCase();
            if(depart1 < depart2){
                return -1;
            }else if(depart1 > depart2){
                return 1;
            }else{
                return 0;
            }
        })
        this.setState({
            data:orderedData
        })

    }

    checkedBox(val){
        this.setState({
            checked : true,
            filterDepartment: val,
            data: this.state.data2
        })
        
    }

    filterbyDepartment(){
        console.log(this.state.filterDepartment);
        if(this.state.filterDepartment === 'All Departments'){

        }else{
            var filteredData = this.state.data.filter(data => data[7] == this.state.filterDepartment);
            console.log(filteredData);
            this.setState({
                data: filteredData,
        
            })
            this.setState({
                checked:false,
                
            })
        }
    }

    searchByName(e){
        
        this.setState({
            search : e.target.value,
            data: this.state.data2.filter(data => data[1].toUpperCase().includes(e.target.value.toUpperCase()) )
        })
    }


        //handle alerts and removal of employees

        showAlert(param1, param2, param3, e){
            e.stopPropagation();
            this.setState({
                alert: true,
                idToDelete: param1,
                fname:param2,
                lname:param3
            })
        }
    
        hideAlert(){
            this.setState({
                alert:false,
                idToDelete:'',
    
            })
        }
        
        deleteEmployee(){
            this.setState({
                delete: true,
                alert:false
    
            })
    
        }

        sortToggle(){
            if(this.state.sortAsc){
                this.sortByDesc();
                this.setState({sortAsc: false})
            }else{
                this.sortByAsc();
                this.setState({sortAsc: true})
            }
        }

        capitalizeString(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
          }

      render() {
        var table = true;
        if(this.state.loading){

          table = false;
        }
        return (
            <>
            <div className= 'row mt-4 justify-content-between '>
                <div className= 'col-7 col-sm-8 col-md-7 mb-3'>
                    <Form.Control type="text" placeholder="Search by name" value ={this.state.search} onChange={this.searchByName.bind(this)} />
                </div>
                <div className= 'col-sm-2 col-md-4 col-lg-4'>
                    <DepartmentSelect  change={this.checkedBox.bind(this)} flag='filter'/>
                </div>
                <div className= 'col-sm-2 col-md-4 col-lg-3 mb-3'>
                    <a className='card-link' onClick = {this.sortToggle.bind(this)}>Name {this.state.sortAsc? <FaLongArrowAltUp></FaLongArrowAltUp>:<FaLongArrowAltDown></FaLongArrowAltDown>}</a>
                    <span className='ml-2'></span>
                    <a className='card-link' onClick={this.showModal.bind(this,'add')}> <IoPersonAdd></IoPersonAdd></a>
                    <a className='card-link' onClick={this.fetchEmployees.bind(this)}><FiRefreshCw></FiRefreshCw></a>
                </div>                
            </div>
           <AlertModal flag = 'emp' delete = {this.deleteEmployee.bind(this)} show={this.state.alert} hide = {this.hideAlert.bind(this)} fname = {this.state.fname} lname = {this.state.lname}></AlertModal>        
            
            <MyModal formOnSubmit = {this.updateFormState.bind(this)} flag = {this.state.flag} dId = {this.state.dId} id = {this.state.id} department = {this.state.department} email = {this.state.email} fname = {this.state.fname} lname = {this.state.lname} job ={this.state.jobTitle} show = {this.state.show} hide = {this.hideModal.bind(this)}/>
            
            {table?
            this.state.data == ''?<p>No Employees</p> :
            <Card>
                <Card.Body>

                <Table responsive borderless hover size="sm" className='mobile w-100'>
                <thead>
                    <tr>
                        <th className="border-bottom"></th>
                        <th className="border-bottom align-middle"><BsFillPersonFill></BsFillPersonFill> Employee</th>
                        <th className="border-bottom align-middle"><a className='card-link' onClick = {this.sortByDepartment.bind(this)}><RiGroupFill></RiGroupFill> Department</a></th>
                    </tr>
                </thead>
                <tbody>
                
                
                {this.state.data.map((sqlData) => <tr key = {sqlData[0]} onClick={this.showModal.bind(this,this.capitalizeString(sqlData[1]), this.capitalizeString(sqlData[2]), this.capitalizeString(sqlData[3]),sqlData[4], this.capitalizeString(sqlData[6]),sqlData[0],sqlData[5],'info')}>
                  
                    <td className='text-center border-bottom'>
                        <Button variant='link' onClick={this.showAlert.bind(this, sqlData[0], this.capitalizeString(sqlData[1]), this.capitalizeString(sqlData[2]))}><FaTrash></FaTrash></Button>
                        <Button variant='link' onClick={this.showModal.bind(this, this.capitalizeString(sqlData[1]), this.capitalizeString(sqlData[2]), this.capitalizeString(sqlData[3]),sqlData[4], this.capitalizeString(sqlData[6]),sqlData[0],sqlData[5],'notinfo')}><FaCog></FaCog></Button>
                    </td>
                    <td className="border-bottom align-middle"><a className='card-link'>
                        { this.capitalizeString(sqlData[1]) +' '+  this.capitalizeString(sqlData[2])}</a></td>
            
                    <td className="border-bottom align-middle">{ this.capitalizeString(sqlData[6])}</td>
                </tr>)}
                </tbody>
            </Table> 

            <Table responsive borderless hover  className='desktop'>
                <thead>
                    <tr>
                        <th className="border-bottom"></th>
                        <th className="border-bottom align-middle"><BsFillPersonFill></BsFillPersonFill> Employee</th>
                        <th className="border-bottom align-middle"><BiIdCard></BiIdCard> Role</th>
                        <th className="border-bottom align-middle"><HiOutlineMail></HiOutlineMail> Email</th>
                        <th className="border-bottom align-middle"><a className='card-link' onClick = {this.sortByDepartment.bind(this)}><RiGroupFill></RiGroupFill> Department</a></th>
                    </tr>
                </thead>
                <tbody>
                
                
                {this.state.data.map((sqlData) => <tr key = {sqlData[0]} onClick={this.showModal.bind(this,this.capitalizeString(sqlData[1]), this.capitalizeString(sqlData[2]), this.capitalizeString(sqlData[3]),sqlData[4], this.capitalizeString(sqlData[6]),sqlData[0],sqlData[5],'info')}>
                  
                    <td className='text-center border-bottom'>
                        <Button variant='link' onClick={this.showAlert.bind(this, sqlData[0], this.capitalizeString(sqlData[1]), this.capitalizeString(sqlData[2]))}><FaTrash></FaTrash></Button>
                        <Button variant='link' onClick={this.showModal.bind(this,this.capitalizeString(sqlData[1]), this.capitalizeString(sqlData[2]), this.capitalizeString(sqlData[3]),sqlData[4], this.capitalizeString(sqlData[6]),sqlData[0],sqlData[5],'notinfo')}><FaCog></FaCog></Button>
                    </td>
                    <td className="border-bottom align-middle"><a className='card-link'>
                        { this.capitalizeString(sqlData[1]) +' '+  this.capitalizeString(sqlData[2])}</a></td>
                    <td className="border-bottom align-middle">{ this.capitalizeString(sqlData[3])}</td>
                    <td className="border-bottom align-middle">{sqlData[4]}</td>
                    <td className="border-bottom align-middle">{ this.capitalizeString(sqlData[6])}</td>
                </tr>)}
                </tbody>
            </Table> 
            </Card.Body>
            </Card> 
            :  <div className="text-center"><Spinner animation="border" ></Spinner></div>}
            
               </>
        );
    }
    
}
