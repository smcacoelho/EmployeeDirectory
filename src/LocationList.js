import React, {Component} from 'react';
import {MyCard} from './MyCard';
import {MyModal} from './MyModal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {AlertModal} from './AlertModal';
import { FaLongArrowAltUp,FaLongArrowAltDown } from "react-icons/fa";
import { IoAddSharp } from "react-icons/io5";
import { Spinner } from 'react-bootstrap';
import {FiRefreshCw} from 'react-icons/fi';



export class LocationList extends Component {

    constructor(props) {
        super(props);
        this.state={
            data:[],
            data2:[],        // keep record of all locations to use on filter by name
            modal: false,
            refresh: false,
            search:'',
            delete:false,
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

    updateFormState(){
        this.setState({
            modal: false,
            refresh: true
        })  
    }

    fetchLocations(){
        this.setState({loading: true })   
         //'http://sofiacoelho.co.uk/api/test.php?flag=location'
         fetch('https://sofiacoelho.co.uk/api/test.php?flag=location')
         .then(response => response.json()) //passes http response to javascript
         .then((json) => {//awaits promise return
         this.setState({
             data: json[0],
             data2: json[0],
             refresh:false,
             loading:false
       }) 
       this.sortByAsc();
     });

    }

    componentDidUpdate(){
        if(this.state.delete){
            //`https://sofiacoelho.co.uk/api/test.php?flag=deleteLoc&id=${this.state.idToDelete}`
            fetch(`https://sofiacoelho.co.uk/api/test.php?flag=deleteLoc&id=${this.state.idToDelete}`)
            .then(response => response.json())
            .then(() => {
            
                this.setState({
                    delete: false,
                    idToDelete:'',
                    nameToDelete:'',
                    refresh: true
                    
                })
            });
        }
        if(this.state.refresh){      
            this.fetchLocations();
        }
    }

    componentDidMount(){
        this.fetchLocations();
    }

    sortByAsc(){
        var orderedData = this.state.data.sort((l1, l2) =>{
            var location1 = l1[1].toUpperCase();
            var location2 = l2[1].toUpperCase();
            if(location1 < location2){
                return -1;
            }else if(location1 > location2){
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
        var orderedData = this.state.data.sort((l1, l2) =>{
            var location1 = l1[1].toUpperCase();
            var location2 = l2[1].toUpperCase();
            if(location1 < location2){
                return 1;
            }else if(location1 > location2){
                return -1;
            }else{
                return 0;
            }
        })
        this.setState({
            data: orderedData
        })

    }
    
    searchByName(e){
        
        this.setState({
            search : e.target.value,
            data: this.state.data2.filter(data => data[1].toUpperCase().includes(e.target.value.toUpperCase()) )
        })
    }

    delete(param1,param2,param3){ //runs when user clicks on delete icon
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
        return (
            <>
        
            <div className= 'row mt-4 '>
                <div className= 'col-7 col-sm-8 col-md-7 mb-3'>
                    <Form.Control type="text" placeholder="Search by name" value ={this.state.search} onChange={this.searchByName.bind(this)} />
                </div>
                
                <div className= 'col-sm-2 col-md-5 mb-3'>

                    <a className='card-link ' onClick = {this.sortToggle.bind(this)}> Name {this.state.sortAsc? <FaLongArrowAltUp></FaLongArrowAltUp>:<FaLongArrowAltDown></FaLongArrowAltDown>}</a>
                    <a className='card-link'  onClick = {this.openModal.bind(this)}><IoAddSharp></IoAddSharp></a>
                    <a className='card-link ' onClick = {this.fetchLocations.bind(this)}><FiRefreshCw></FiRefreshCw></a>
                   
                   
                </div>
            </div>
         
            
            <AlertModal hide = {this.hideAlert.bind(this)} show={this.state.showAlert} delete={this.runDelete.bind(this)} name={this.state.nameToDelete} id={this.state.idToDelete} numOfEmp = {this.state.numOfEmp}></AlertModal>
            
            <MyModal formOnSubmit = {this.updateFormState.bind(this)} show = {this.state.modal} hide = {this.hideModal.bind(this)} flag = 'addLocation'/>
            {table?
                <div className='row justify-content-between locdep'>
                    {this.state.data == ''?<p>No Locations</p>:
                    this.state.data.map((location) =>
                                  
                    <MyCard  delete={this.delete.bind(this, location[2], this.capitalizeString(location[1]), location[0])} flag='location' delFlag = 'delete' useMatch = {this.props.match} id = {location[2]} key = {location[2]} name = {this.capitalizeString(location[1])} emps = {location[0]} />
                    )
                    }
                    
                </div>: <div className="text-center"><Spinner animation="border" ></Spinner></div>}
            </>
        );
    }
    
}