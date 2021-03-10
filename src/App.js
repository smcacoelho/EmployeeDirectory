import React from 'react';


import './App.css';
import {EmployeesList} from './EmployeesList';
import {DepartmentsList} from "./DepartmentsList";
import 'bootstrap/dist/css/bootstrap.min.css';
import {LocationList} from './LocationList';
import Container from 'react-bootstrap/Container'
import {Location} from './Location';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';


import {
  Route,
  Link,
  BrowserRouter,Switch
} from "react-router-dom";

class App extends React.Component {
  render(){
    return(
      <BrowserRouter basename="/EmployeeDirectory/build">
      
      <Container>
        <div className='row justify-content-center mt-4'>
          
          <ButtonGroup aria-label="Nav" className='nav' toggle='true'>
              <Button id = 'nav1' variant="outline-primary" as={Link} to = "/"></Button>
              <Button id = 'nav2' variant="outline-primary" as={Link} to = "/departments" ></Button>
              <Button id = 'nav3' variant="outline-primary" as={Link} to = "/locations" ></Button>
          </ButtonGroup>
          
        </div>
     </Container>
        <Container>
        <Switch>  
          <Route exact path ="/" component={EmployeesList}/>
          <Route path ="/departments/:id" component={Location}/>          
          <Route path ="/departments" component={DepartmentsList}/>
          <Route path ="/locations/:id" component={Location}/>
          <Route path ="/locations" component={LocationList}/>
        </Switch>
        </Container>
      
   
      </BrowserRouter>
    )
  }
}


export default App;
