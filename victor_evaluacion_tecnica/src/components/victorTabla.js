import React from 'react';

//props
let personasInscritas = []




class victorTabla extends React.Component{

  state = {
    loading: true
  }

  async componentDidMount(){
    const url = "https://virtual-assistant-src.s3.amazonaws.com/employees.json";
    const response = await fetch(url);
    const data = await response.json();

    for (var i = 0; i < data.employees.employee.length; i++) {
          //console.log(data.employees.employee[i]);
          personasInscritas.push(data.employees.employee[i]);
          console.log(personasInscritas[i]);

          console.log('res= ' + data);
        }
  }

  render(){
    return (  
        <div className="container">
          
        </div>
      );
  }

}

export default victorTabla;