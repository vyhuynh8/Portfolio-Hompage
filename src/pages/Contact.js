import React from 'react';
import Jumbo from '../components/Jumbo';
import Content from '../components/Content';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
// import Carousel from '../components/Carousel';


class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: '',
			disabled: false,
			emailSent: null
		}
	}

	handleChange = (event) => {

		const target = event.target;
		const val = target.value;
		const name = target.name;


		this.setState({
			[name]: val
		});
	}


	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({
			disabled: true,
			emailSent: false
		});
	}

	render() {
		return(
			<div>
				<Jumbo title={this.props.title}/>
				<Content>
					<Form onSubmit={this.handleSubmit}>
						<Form.Group>
							<Form.Label htmlFor="full-name">Full Name</Form.Label>
							<Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
						</Form.Group>

						<Form.Group>
							<Form.Label htmlFor="email">Email</Form.Label>
							<Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
						</Form.Group>

						<Form.Group>
							<Form.Label htmlFor="message">Message</Form.Label>
							<Form.Control id="message" name="message" type="message" value={this.state.message} onChange={this.handleChange}/>
						</Form.Group>

						<Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>Send</Button>
					
						{this.state.emailSent  == true && <p className="d-inline success-msg">Email sent</p>}
						{this.state.emailSent  == false && <p className="d-inline err-msg">Email not sent</p>}

					</Form>
				</Content>
			</div>
		);
	}
}

export default Contact;