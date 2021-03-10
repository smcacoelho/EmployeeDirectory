import React from 'react';
import Form from 'react-bootstrap/Form';

export class DepartmentSelect extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            data:[],
            selectedId:this.props.dId,
        }
    }

    componentDidMount(){
//'https://sofiacoelho.co.uk/api/test.php?flag=department'
        fetch('https://sofiacoelho.co.uk/EmployeeDirectory/api/test.php?flag=department')
        .then(response => response.json()) //passes http response to javascript
        .then((json) => {//awaits promise return
          this.setState({
              data: json[0]
          }) 
        });
    }
    
    handleChange(e){
        this.setState({
            selectedId : e.target.value,
        })
        if(this.props.flag === 'filter'){
            this.props.change(e.target.value);
        }
    }

    capitalizeString(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render(){
        return(
            
    <Form.Group controlId="departmentSelect">
    
    <Form.Control as="select" name="department"  value = {this.state.selectedId} onChange = {this.handleChange.bind(this)} custom>
        {this.props.flag === 'filter' ? <option>All Departments</option> : <option>Department</option>}
        {this.state.data.map((department) => 
        <option key = {department[2]} value = {department[2]}>{this.capitalizeString(department[1])}</option>
        )}
      
    </Form.Control>
  </Form.Group>

        )
    }
}