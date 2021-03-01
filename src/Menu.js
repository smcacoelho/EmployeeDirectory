import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';

export class DepartmentsList extends Component {

    constructor(props) {
        super(props);
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        //'https://sofiacoelho.co.uk/api/test.php?flag=employee'
        fetch('https://sofiacoelho.co.uk/api/test.php?flag=employee')
        .then(response => response.json())
        .then((json) => {
          alert(json);
          this.setState({
              data: json[0]
          })
          
        });
        
    }
      render() {
        return (
            <Table responsive bordered>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Job Title</td>
                        <td>Email</td>
                        <td>Department</td>
                    </tr>
                </thead>
                <tbody>
                {this.state.data.map((sqlData) => <tr>
                    <td key = {sqlData[0]}>{sqlData[1] + sqlData[2]}</td>
                    <td>{sqlData[3]}</td>
                    <td>{sqlData[4]}</td>
                    <td>{sqlData[6]}</td>
                </tr>)}
                </tbody>
            </Table>          
        );
    }
    
}