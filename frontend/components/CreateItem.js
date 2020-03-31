import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';

class CreateItem extends Component {
	state = {
		title: '',
		description: '',
		image: '',
		largeImage: '',
		price: 0
	};

	handleChange = e => {
		const { name, type, value } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		this.setState({
			[name]: val
		});
	};

	render() {
		const { title, description, image, largeImage, price } = this.state;
		return (
			<Form onSubmit={(e) => {
        e.preventDefault();
        
      }}>
				<fieldset>
					<label htmlFor="title">
						Title
						<input
							type="text"
							id="title"
							name="title"
							placeholder="Title"
							required
							value={title}
							onChange={this.handleChange}
						/>
					</label>
					<label htmlFor="price">
						Price
						<input
							type="number"
							id="price"
							name="price"
							placeholder="Price"
							required
							value={price}
							onChange={this.handleChange}
						/>
					</label>
					<label htmlFor="description">
						Description
						<textarea
							id="description"
							name="description"
							placeholder="Enter a description"
							required
							value={description}
							onChange={this.handleChange}
						/>
					</label>
          <button type="submit">Submit</button>
				</fieldset>
			</Form>
		);
	}
}

export default CreateItem;