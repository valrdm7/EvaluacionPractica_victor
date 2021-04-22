import React from 'react';

//bootstrap
import {Form} from 'react-bootstrap';
import axios from 'axios';

var id=6;
class victorFormulario extends React.Component{


	constructor(props){
		super(props);

		this.state = {
			firstName: '',
			email: '',
			birthday: '',
			civil_status: '',
			'items': [],
			'nuevosUsers': []
		}
	}


	changeHandler = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}

	submitHandler = (e) => {
		e.preventDefault();
		console.log(this.state);

		var joined = this.state.nuevosUsers.concat(this.state);


		return(
			this.setState({nuevosUsers: joined})
			);

		/*axios.post('https://virtual-assistant-src.s3.amazonaws.com/employees.json', this.state)
		.then(response =>{
			console.log(response);
		})
		.catch(error =>{
			console.log(error);
		});*/
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
		
		return (
			<div >
				<div className="tabla_v2">
					<Form onSubmit={this.submitHandler}>				
					<div className="form-row">
					    <div className="col">
					      <input type="text" name="firstName" className="form-control" placeholder="Nombre Completo"  onChange={this.changeHandler} required/>
					    </div>
					    <div className="col">
					      <input type="email" name="email" className="form-control" placeholder="E-mail"  onChange={this.changeHandler} required/>
					    </div>
					 </div>

					  <Form.Group controlId="formBasicEmail">
					    <Form.Label>Fecha de Nacimiento</Form.Label>
					    <Form.Control type="date" name="birthday" placeholder="date"  onChange={this.changeHandler} required/>
					    <div className="form-group">
						    <select className="custom-select" name="civil_status"  onChange={this.changeHandler} required>
						      <option value="">Situación sentimental</option>
						      <option value="Soltero">Soltero(a)</option>
						      <option value="Casado">Casado(a)</option>
						      <option value="Viudo">Viudo(a)</option>
						    </select>
						    <div className="invalid-feedback">Example invalid custom select feedback</div>
						</div>
						<div className="form-check form-check-inline">
							  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
							  <label className="form-check-label" htmlFor="inlineRadio1">Hombre</label>
							</div>
							<div className="form-check form-check-inline">
							  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
							  <label className="form-check-label" htmlFor="inlineRadio2">Mujer</label>
						</div>
					  </Form.Group>
					    	<button variant="primary" type="reset" className="btn btn-dark">Clear</button>
					  <Form.Group controlId="formBasicCheckbox">
					      	
					  </Form.Group>
					  		<button variant="primary" type="submit" className="btn btn-success" >Enviar</button>

					</Form>
				</div>

				<h2 className="display-4" >Jugadores Registrados</h2>

				<div className="tabla_v">
		              <table className="table table-sm table-dark">
				            <thead>
				              <tr>
				                <th scope="col">#id</th>
				                <th scope="col">Nombre</th>
				                <th scope="col">Correo</th>
				                <th scope="col">Fecha Nacimiento</th>
				                <th scope="col">Situación sentimental</th>
				              </tr>
				            </thead>
				            <tbody>
				                {this.state.items.map(function(item, index){return <tr key={item.id}><th scope="row">{item.id}</th><td>{(item.firstName)+' '+(item.lastName)}</td><td>{item.email}</td><td>{item.birthday}</td><td>{item.civil_status}</td></tr>})}
				                {this.state.nuevosUsers.map(function(newUser, index){return <tr key={newUser.id}><th scope="row">{newUser.id}</th><td>{(newUser.firstName)}</td><td>{newUser.email}</td><td>{newUser.birthday}</td><td>{newUser.civil_status}</td></tr>})}
				            </tbody>
				        </table>
		        </div>
		        </div>

			);
	}

}

export default victorFormulario;