import React from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { Button, Spinner } from 'react-bootstrap';
import { BiIdCard } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { RiGroupFill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { IoArrowBackCircle } from "react-icons/io5";
import {Link} from "react-router-dom";


export class Location extends React.Component{

    constructor(props){
        super(props);
        this.state={
            data:[],
            name:'',
            loading:'false'
        }
    }
   
    componentDidMount(){

        this.setState({loading: true })

        //fetches number of employees in a location or department    
        //`https://sofiacoelho.co.uk/api/test.php?flag=${this.props.match.path}&id=${this.props.match.params.id}`
        fetch(`https://sofiacoelho.co.uk/api/test.php?flag=${this.props.match.path}&id=${this.props.match.params.id}`
        )
        .then(response => response.json()) //passes http response to javascript
        .then((json) => {//awaits promise return
            if(json[0]){
                this.setState({
              data: json[0],
              name: json[1]
          }) 
            }else{//if no employees returned set data state to false
                this.setState({
                    data: false,
                    name: json[1]
                }) 
            }
            this.setState({loading: false})
          
        });
    }

    capitalizeString(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render(){
        var table = true;
        if(this.state.loading){
          table = false;
        }
        return(
            <>
         
            {this.props.match.path.includes("location")?  <div className= 'col-sm-4 col-md col-lg-3 mt-3'><h3 className='mb-0 d-inline'><Button variant='link' as={Link} to = "/locations"><IoArrowBackCircle></IoArrowBackCircle></Button><IoLocationSharp></IoLocationSharp>{this.state.name}</h3></div>
            : 
            <div className= 'col-sm-4 col-md col-lg-3 mt-3'><h3 className='mb-0 d-inline'> <Button variant='link' as={Link} to = "/departments"><IoArrowBackCircle></IoArrowBackCircle></Button><RiGroupFill></RiGroupFill>{this.state.name}</h3></div>}
           
              <Card>
                <Card.Body>{table?
            <Table responsive borderless hover size='sm'>
            <thead>
                <tr>
                    <th className = 'border-bottom'><BsFillPersonFill></BsFillPersonFill> Employee</th>
                    <th className = 'border-bottom'><BiIdCard></BiIdCard> Role</th>
                    
                    
                </tr>
            </thead>
            <tbody>
            {this.state.data?
            this.state.data.map((sqlData) => <tr>
                <td className = 'border-bottom'>{this.capitalizeString(sqlData[0]) +' ' + this.capitalizeString(sqlData[1])}</td>
                <td className = 'border-bottom'>{this.capitalizeString(sqlData[2])}</td>
                
                
            </tr>): <p>No employees</p>}
            </tbody>
        </Table>:<div className="text-center"><Spinner animation="border" ></Spinner></div> }
        </Card.Body>
        </Card>
       
        </>)
    }
}