import React from 'react';



class vTabla extends React.Component{

	constructor(){
		super();

		this.state = {
			'items': []
		}
	}

	componentDidMount(){
		this.getItems();

	}

	getItems = () =>{
		fetch('https://virtual-assistant-src.s3.amazonaws.com/employees.json')
		.then(response => response.json())
  		.then(data => this.setState({'items':data.employees.employee}, () => {console.log(JSON.stringify(this.state))}));
	}

	render(){
		return(

				<div></div>
			);
	}

}

export default vTabla;