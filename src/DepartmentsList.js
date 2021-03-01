import React, {Component} from 'react';
import {MyCard} from './MyCard'
import {MyModal} from './MyModal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {AlertModal} from './AlertModal';
import { FaTrash,FaLongArrowAltUp,FaLongArrowAltDown } from "react-icons/fa";
import { Spinner } from 'react-bootstrap';
import { IoPersonAddSharp, IoAddSharp } from "react-icons/io5";
import {FiRefreshCw} from 'react-icons/fi';

export class DepartmentsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[],
            data2:[],                   // keep record of all locations to use on filter by name
            modal: false,
            refresh: false,
            search:'',
            showAlert: false,
            delete:'',
            idToDelete:'',
            nameToDelete:'',
            numOfEmp:'',
            loading: false,
            sortAsc: true
        }
    }

    openModal(){
        this.setState({
            modal: true
        })
    }

    hideModal(){
        this.setState({
            modal: false,
            
        })
    }

    updateFormState(){ //closes modal after form is sent
        this.setState({
            modal: false,
            refresh: true       
        })
    }

    fetchDepartments(){
        this.setState({loading: true })   
        //'https://sofiacoelho.co.uk/api/test.php?flag=department'
        fetch('https://sofiacoelho.co.uk/api/test.php?flag=department')
        .then(response => response.json()) //passes http response to javascript
        .then((json) => {//awaits promise return
          this.setState({
              data: json[0],
              data2: json[0],
              loading: false,
              refresh:false
          }) 
          this.sortByAsc();
        });
    }

    componentDidUpdate(){
        if(this.state.delete){
            //`https://sofiacoelho.co.uk/api/test.php?flag=deleteDep&id=${this.state.idToDelete}`
            fetch(`https://sofiacoelho.co.uk/api/test.php?flag=deleteDep&id=${this.state.idToDelete}`)
            .then(response => response.json())
            .then(() => {
            
                this.setState({
                    delete: false,
                    idToDelete:'',
                    nameToDelete:'',
                    refresh: true, // to update the website,
                    
                })
          
            });
        }
        
        //to refresh page every time a record is added, deleted or updated
        if(this.state.refresh){ // runs everytime a change is made
            this.fetchDepartments();
        }
    }

    componentDidMount(){
        this.fetchDepartments();    

    }

    
    sortByAsc(){
        var orderedData = this.state.data.sort((d1, d2) =>{
            var depart1 = d1[1].toUpperCase();
            var depart2 = d2[1].toUpperCase();
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
    sortByDesc(){
        var orderedData = this.state.data.sort((d1, d2) =>{
            var depart1 = d1[1].toUpperCase();
            var depart2 = d2[1].toUpperCase();
            if(depart1 < depart2){
                return 1;
            }else if(depart1 > depart2){
                return -1;
            }else{
                return 0;
            }
        })
        this.setState({
            data:orderedData
        })

    }
    
    searchByName(e){
        this.setState({
            search : e.target.value,
            data: this.state.data2.filter(data => data[1].toUpperCase().includes(e.target.value.toUpperCase()) )
        })
    }

    delete(param1,param2, param3){ //runs when delete button is clicked
        this.setState({
            showAlert:true,
            idToDelete: param1,
            nameToDelete: param2,
            numOfEmp: param3
            
        })
    }

    runDelete(){
        this.setState({
            delete:true,
            showAlert:false
        })
    }
    hideAlert(){
        this.setState({
            showAlert:false
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
        return( 
            <>
            <div className= 'row mt-4 '>
                <div className= 'col-7 col-sm-8 col-md-7 mb-3'>
                    <Form.Control type="text" placeholder="Search by name" value ={this.state.search} onChange={this.searchByName.bind(this)} />
                </div>
                
                
                <div className= 'col-sm-2 col-md-5 mb-3'>
                    <a className='card-link' onClick = {this.sortToggle.bind(this)}>Name {this.state.sortAsc? <FaLongArrowAltUp></FaLongArrowAltUp>:<FaLongArrowAltDown></FaLongArrowAltDown>}</a>
                    <a className='card-link'  onClick = {this.openModal.bind(this)}><IoAddSharp></IoAddSharp></a>
                    <a className='card-link' onClick = {this.fetchDepartments.bind(this)}><FiRefreshCw></FiRefreshCw></a>
                </div>
                
            </div>
            
            
               
                <AlertModal hide = {this.hideAlert.bind(this)} show={this.state.showAlert} delete={this.runDelete.bind(this)} name={this.state.nameToDelete} id={this.state.idToDelete} numOfEmp = {this.state.numOfEmp}></AlertModal>
                <MyModal formOnSubmit = {this.updateFormState.bind(this)} flag = 'addDepartment' show = {this.state.modal} hide ={this.hideModal.bind(this)}/>
               {table?
                <div className='row justify-content-between locdep'>
                    {this.state.data == '' ? <p>No Departments</p>:
                    
                        this.state.data.map((department) =>           
                            <MyCard delete={this.delete.bind(this, department[2], this.capitalizeString(department[1]), department[0] )} delFlag = 'delete' flag='department' useMatch = {this.props.match} id = {department[2]} key = {department[2]} name = {this.capitalizeString(department[1]) } emps = {department[0]} location = {this.capitalizeString(department[3])}/> 
                        )}
                </div>:
                 <div className="text-center"><Spinner animation="border" ></Spinner></div>}
           </>
        )
    }
    
}