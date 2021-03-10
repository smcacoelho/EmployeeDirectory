import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

  import { FaTrash } from "react-icons/fa";
  import { RiGroupFill } from "react-icons/ri";
  import { IoLocationSharp } from "react-icons/io5";
  
 



export class MyCard extends React.Component{
    render(){
        return(
            
            <div className="col-sm-4 col-md col-lg-3 mt-3">
            <Card bg='light'>
                <Card.Header>
                    <Link to={`${this.props.useMatch.url}/${this.props.id}`}>
                            {this.props.name} 
                    </Link>
                    {this.props.delFlag === 'delete'? <Button className = 'float-right ' variant='link' onClick={this.props.delete}><FaTrash></FaTrash></Button>:<></>}
                    
                </Card.Header>
                <ListGroup variant="flush">
                    {this.props.flag === 'location'?                             //location page displays only number of employees
                    <ListGroup.Item><RiGroupFill></RiGroupFill>{this.props.emps}
                     
                    </ListGroup.Item>: 
                    <>
                        <ListGroup.Item><RiGroupFill></RiGroupFill>{this.props.emps}</ListGroup.Item>
                        <ListGroup.Item><IoLocationSharp></IoLocationSharp>{this.props.location}
                        
                        </ListGroup.Item> 

                    </>}
                </ListGroup>                
            </Card>
           
            </div>

        )
    }
}