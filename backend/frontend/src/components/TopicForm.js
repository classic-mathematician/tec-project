import React, { useState } from 'react';
import '../stylesheets/TopicForm.css';
import { v4 as uuidv4 } from 'uuid';


function TopicForm(props){

		const [input, setInput] = useState('');

		const manageChange = e => {
			setInput(e.target.value);
			
		}

		const manageSend = e => {
			e.preventDefault();
			console.log('Submitting form...')

			const newTopic = {
				id: uuidv4(),
				text: input,
				completed: false,
			}

			props.onSubmit(newTopic);
		}

  	return (
			<form 
				className='topic-form'
				onSubmit={manageSend}>
				<input
					className='topic-input'
					type = 'text'
					placeholder='Type a topic'
					name = 'text'
					onChange={manageChange}
				/>
				<button className='topic-button'>Add Topic</button>
			</form>	
    );
}

export default TopicForm;