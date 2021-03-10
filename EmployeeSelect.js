import React from 'react';
import Form from 'react-bootstrap/Form';


export class EmployeeSelect extends React.Component{

    constructor(){
        super();
        this.state= {
            data: [],
            selected:'',
            selectedName:''
        }
    }

    componentDidMount(){
//'https://sofiacoelho.co.uk/api/test.php?flag=employee'
        fetch('https://sofiacoelho.co.uk/EmployeeDirectory/api/test.php?flag=employee')
        .then(response => response.json()) //passes http response to javascript
        .then((json) => {//awaits promise return
          this.setState({
              data: json[0]
          }) 
        });
    }

    handleChange(e){
        var options = e.target.options;
        var selected = [];
        var selectedName = [];
        for(var i = 0; i < options.length; i++ ){
            if(options[i].selected){
                selected.push(options[i].value)
                selectedName.push(options[i].text)
            }
        }
        this.setState({
            selected : selected,
            selectedName : selectedName
        })
    }

    render(){
        return(
            <>
        <Form.Group controlId="employeesID">
            <Form.Label>Employees</Form.Label>
               <Form.Control  multiple as="select" name="employees[]" onChange = {this.handleChange.bind(this)} htmlSize={3} custom>
                   {this.state.data.map((employee) => 
                    <option key = {employee[0]} name= {employee[1]+' '+employee[2]} value = {employee[0]}>{employee[1]+' '+employee[2]}</option>
                )}
                </Form.Control>
        </Form.Group>
        <p>Selected: {this.state.selectedName.toString()}</p>
        </>
        )
    }
}