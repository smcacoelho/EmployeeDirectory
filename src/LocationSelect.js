import React from 'react';
import Form from 'react-bootstrap/Form';

export class LocationSelect extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            data:[],
            selected:''
        }
    }

    componentDidMount(){
//'https://sofiacoelho.co.uk/api/test.php?flag=location'
        fetch('https://sofiacoelho.co.uk/EmployeeDirectory/api/test.php?flag=location')
        .then(response => response.json()) //passes http response to javascript
        .then((json) => {//awaits promise return
          this.setState({
              data: json[0]
          }) 
        });
    }
    
    handleChange(e){
        this.setState({
            selected : e.target.value
        })

    }
    capitalizeString(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render(){
        return(
            
    <Form.Group controlId="locationSelect">
    <Form.Label>Location</Form.Label>
    <Form.Control as="select" name="location"  onChange = {this.handleChange.bind(this)} custom>
        {this.state.data.map((location) => 
        <option key = {location[2]} value = {location[2]}>{this.capitalizeString(location[1])}</option>
        )}
      
    </Form.Control>
  </Form.Group>

        )
    }
}